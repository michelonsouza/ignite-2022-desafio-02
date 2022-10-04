export type ThemeType = 'light' | 'dark';

export interface UserSharedPreferencesData {
  region: string;
  theme: ThemeType;
  updateTheme(theme: ThemeType): void;
}
