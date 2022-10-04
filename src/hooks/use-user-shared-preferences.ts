import { useContext } from 'react';

import {
  UserSharedPreferencesContext,
  UserSharedPreferencesData,
} from '@/contexts';

export function useUserSharedPreferencesContext(): UserSharedPreferencesData {
  const context = useContext(UserSharedPreferencesContext);

  if (!context) {
    throw new Error(
      'You must have UserSharedPreferencesContext in upper scope.',
    );
  }

  return context;
}
