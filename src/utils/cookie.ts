import { IronSessionOptions } from "iron-session";
import { IGetCities, IAddressesList } from "../types/warehouse";

export const sessionOptions: IronSessionOptions = {
  password: process.env.COOKIE_PASSWORD as string,
  cookieName: process.env.COOKIE_NAME as string,
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      token?: string;
      address?: IAddressesList;
      city?: IGetCities;
    };
  }
}

export default sessionOptions;
