import { TUser } from "../types/types";
import { IProduct, IUser } from "./interface";

// auth
export interface IAuthState {
  accessToken: string | null | undefined;
  user: TUser | null | undefined;
}

export interface IAuthPayload {
  accessToken: string;
  user: TUser;
}
// user
export interface IUserState {
  users: IUser[] | null | undefined;
}

// product
export interface IProductState {
  products: IProduct[] | null | undefined;
}
