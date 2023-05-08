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
  image?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ICategory {
  id: number;
  uuid: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface IProduct {
  id: number;
  uuid: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  price: number;
  images?: [];
  quantity: number;
  userUuid: any;
  category: ICategory;
  createdAt?: string;
  updatedAt?: string;
  categoryUuid: any;
}
