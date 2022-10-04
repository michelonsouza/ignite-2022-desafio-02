import { useCallback, useMemo } from 'react';

import { Sun, MoonStars } from 'phosphor-react';

import { useUserSharedPreferencesContext } from '@/hooks';

import {
  RootContainer,
  SwitchContainer,
  SwitchTrail,
  SwitchCircle,
} from './styles';

export function ThemeSwitch(): JSX.Element {
  const { theme, updateTheme } = useUserSharedPreferencesContext();

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    updateTheme(newTheme);
  }, [theme, updateTheme]);

  const memoIsActive = useMemo(() => {
    return theme === 'dark' ? { 'data-dark': 'true' } : {};
  }, [theme]);

  const MemoIcon = useMemo(() => {
    return theme === 'dark' ? MoonStars : Sun;
  }, [theme]);

  return (
    <RootContainer>
      <SwitchContainer role="presentation" onClick={toggleTheme}>
        <SwitchTrail />
        <SwitchCircle {...memoIsActive}>
          <MemoIcon size={22} />
        </SwitchCircle>
      </SwitchContainer>
    </RootContainer>
  );
}
