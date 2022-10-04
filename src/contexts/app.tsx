import { useMemo } from 'react';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { ThemeSwitch } from '@/components';
import { CartContextProvider } from '@/contexts';
import { useUserSharedPreferencesContext } from '@/hooks';
import { Router } from '@/router';
import { GlobalStyle } from '@/styles/global';
import { defaultTheme, darkTheme } from '@/styles/themes';

export function AppContext(): JSX.Element {
  const { theme } = useUserSharedPreferencesContext();

  const memoTheme: DefaultTheme = useMemo(() => {
    return theme === 'light' ? defaultTheme : darkTheme;
  }, [theme]);

  return (
    <ThemeProvider theme={memoTheme}>
      <GlobalStyle />
      <ThemeSwitch />
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
