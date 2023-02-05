export interface IUser {
  _id: string;
  firstName: string;
  email: string;
  lastName: string;
  role: ROLE;
  createdAt: Date;
  updatedAt: Date;
}

export enum ROLE {
  ADMIN,
  USER,
}
