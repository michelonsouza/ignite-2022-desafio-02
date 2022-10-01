/// <reference types="vite/client" />

type EnvType = 'development' | 'staging' | 'production' | 'qa' | 'test';
type BooleanType = 'true' | 'false';

interface ImportMetaEnv {
  readonly PORT?: string;
  readonly HOST?: string;
  readonly HTTPS?: BooleanType;
  readonly VITE_APP_NODE_ENV: EnvType;
  readonly VITE_APP_ENCRYPT_STORAGE_PREFIX: string;
  readonly VITE_APP_ENCRYPT_STORAGE_SECRET_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
