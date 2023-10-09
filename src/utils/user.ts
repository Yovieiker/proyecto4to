import isBrowser from "./isBrowser";
import { LocalStorageEncrypt } from "./localStorage";

export const getTokenStorage = (): string | null | undefined => {
  const user = isBrowser() ? LocalStorageEncrypt.decrypt("user") : null;
  return user ? user?.tokenAuth : null;
};

export const getDeviceTokenStorage = (): string | null | undefined => {
  return isBrowser() ? LocalStorageEncrypt.decrypt("deviceToken") : null;
};

export const getDeviceIdStorage = (): string | null | undefined => {
  return isBrowser() ? LocalStorageEncrypt.decrypt("deviceId") : null;
};
