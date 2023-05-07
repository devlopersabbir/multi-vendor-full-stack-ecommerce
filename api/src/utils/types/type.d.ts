import { Role } from "../enum/enum";

export type TUser = {
  id: number;
  uuid: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  role?: Role;
};
