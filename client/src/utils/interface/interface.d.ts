import { Role } from "../enum/enum";
import { TUser } from "../types/types";

export interface IUser {
  id: number;
  uuid: string;
  name: string;
  email: string;
  password?: string;
  address: string;
  phone: string;
  role: Role;
}

export interface IProduct {
  id: number;
  uuid: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  price: number;
  quantity: number;
  userUuid: any;
  categoryUuid: any;
}
