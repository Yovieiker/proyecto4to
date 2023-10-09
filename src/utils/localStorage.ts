import { EncryptStorage } from "storage-encryption";

export const LocalStorageEncrypt = new EncryptStorage(
  `${process.env.LOCAL_STORAGE_ENCRYPT_KEY || ""}`,
  "localStorage"
);

export const SessionStorageEncrypt = new EncryptStorage(
  `${process.env.LOCAL_STORAGE_ENCRYPT_KEY || ""}`,
  "sessionStorage"
);
