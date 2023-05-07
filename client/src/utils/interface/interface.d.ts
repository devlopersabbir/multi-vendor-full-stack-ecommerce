import { Role } from "../enum/enum";
import { TUser } from "../types/types";

export interface IAuthState {
  accessToken: string | null | undefined;
  user: TUser | null | undefined;
}

export interface IAuthPayload {
  accessToken: string;
  user: TUser;
}
