export enum Status {
  ENABLE = "0",
  DISABLE = "1"
}

export enum AiCarouselGiftee {
  FOR_MOM = "mom",
  FOR_BESTIES = "bestie",
  FOR_COLLEAGUE = "colleague",
  FOR_CHILD = "child",
  FOR_LOVER = "lover"
}

export interface Admin {
  id: number;
  name: string;
  email: string;
  roles: string[];
  password: string;
  status: Status;
  otp_code: string;
  last_iat: number;
  created_by: Admin;
  updated_by: Admin;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

export type ErrorObj<T extends object> = {
  [key in keyof T]: string;
}

export interface ResponseAPI<T = any> {
  errors?: T extends object ? ErrorObj<T> : any;
  code: number,
  message: string,
  data: T,
  timestamp: string,
  version: string
}

export interface IRow<T> {
  row: T;
}