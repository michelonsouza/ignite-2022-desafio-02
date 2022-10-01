import { EncryptStorage } from 'encrypt-storage';

export const encryptStorage = new EncryptStorage(
  import.meta.env.VITE_APP_ENCRYPT_STORAGE_SECRET_KEY,
  {
    prefix: import.meta.env.VITE_APP_ENCRYPT_STORAGE_PREFIX,
  },
);

window.EncryptStorage = undefined;
window.AsyncEncryptStorage = undefined;

if (import.meta.env.VITE_APP_NODE_ENV !== 'production') {
  window.encryptStorage = encryptStorage;
}
