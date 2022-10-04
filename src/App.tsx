import { AppContext, UserSharedPreferencesProvider } from './contexts';

export function App(): JSX.Element {
  return (
    <UserSharedPreferencesProvider>
      <AppContext />
    </UserSharedPreferencesProvider>
  );
}
