import { Role } from "../enum/enum";

export interface IUser {
  id?: number;
  uuid?: string;
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
  address?: string;
  role?: string;
}
