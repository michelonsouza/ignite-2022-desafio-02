import {
  createContext,
  PropsWithChildren,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from 'react';

import { UserStorageKeys } from '@/enums';
import { mapboxService } from '@/services';
import { encryptStorage } from '@/utils';

import { UserSharedPreferencesData, ThemeType } from './types';

export * from './types';

export const UserSharedPreferencesContext =
  createContext<UserSharedPreferencesData>({} as UserSharedPreferencesData);

export function UserSharedPreferencesProvider({
  children,
}: PropsWithChildren): JSX.Element {
  const [region, setRegion] = useState<string>(() => {
    const storagedRegion = encryptStorage.getItem<string>(
      UserStorageKeys.REGION,
    );

    return storagedRegion || '--';
  });
  const [theme, setTheme] = useState<ThemeType>('light');

  const memoValue: UserSharedPreferencesData = useMemo(() => {
    return {
      region,
      theme,
      updateTheme: setTheme,
    };
  }, [region, theme]);

  const successGetGeoLocation = useCallback(
    async (geolocation: GeolocationPosition) => {
      const { coords } = geolocation;
      const { latitude, longitude } = coords;

      const result = await mapboxService(latitude, longitude);

      if (result) {
        const { features } = result;
        const region = features.find(feature => feature.id.includes('region'));

        if (region) {
          const formattedRegion = region['place_name_pt-BR'];
          encryptStorage.setItem(UserStorageKeys.REGION, formattedRegion);
          setRegion(formattedRegion);
        }
      }
    },
    [],
  );

  const errorGetGeolocation = (error: GeolocationPositionError) => {
    // eslint-disable-next-line no-console
    console.error('Error to aquire Geolocatio', error);
  };

  useEffect(() => {
    if (!window.navigator.geolocation) {
      // eslint-disable-next-line no-console
      console.error('Geolocation is not supported by your browser');
    } else {
      console.log('porque?');
      window.navigator.geolocation.getCurrentPosition(
        successGetGeoLocation,
        errorGetGeolocation,
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserSharedPreferencesContext.Provider value={memoValue}>
      {children}
    </UserSharedPreferencesContext.Provider>
  );
}
