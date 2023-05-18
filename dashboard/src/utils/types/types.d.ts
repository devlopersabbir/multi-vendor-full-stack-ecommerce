export type TUser = {
  id: number;
  uuid: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  role: Role;
};

export type TRole = "ADMIN" | "VENDOR" | "CUSTOMER";
