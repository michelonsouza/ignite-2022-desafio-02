import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { CartContextProvider, UserSharedPreferencesProvider } from './contexts';
import { Router } from './router';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes';

export function App(): JSX.Element {
  return (
    <UserSharedPreferencesProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <CartContextProvider>
            <Router />
          </CartContextProvider>
        </BrowserRouter>
      </ThemeProvider>
    </UserSharedPreferencesProvider>
  );
}
