export interface IUser {
  _id: string;
  firstname: string;
  email: string;
  lastname: string;
  role: ROLE;
  createdAt: Date;
  updatedAt: Date;
}

export enum ROLE {
  ADMIN,
  USER
}