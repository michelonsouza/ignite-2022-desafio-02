import { EncryptStorage, AsyncEncryptStorage } from 'encrypt-storage';

declare global {
  interface Window {
    encryptStorage?: EncryptStorage;
    EncryptStorage?: EncryptStorage;
    AsyncEncryptStorage?: AsyncEncryptStorage;
  }
}
