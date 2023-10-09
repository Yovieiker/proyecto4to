import {
  browserName,
  osName,
  osVersion,
  browserVersion,
} from "react-device-detect";
import { v4 as uuidv4 } from "uuid";
import { getDeviceIdStorage } from "./user";

class Device {
  getCode(): string {
    const code = getDeviceIdStorage();
    if (code) {
      return code;
    }
    return uuidv4();
  }

  getBrowserName(): string {
    return browserName;
  }

  getBrowserVersion(): string {
    return browserVersion;
  }

  getOsName(): string {
    return osName;
  }

  getOsVersion(): string {
    return osVersion;
  }
}

export default new Device();
