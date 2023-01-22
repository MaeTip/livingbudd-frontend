export interface IReservation {
  id: number
  email?: string;
  fullname: string;
  gender?: Gender;
  age?: number;
  phone: string;
  contact?: string;
  number_of_tenant?: number;
  has_pet?: boolean;
  vehicle?: Vehicle;
  working_address?: string;
  additional_request?: string;
}

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

export enum Vehicle {
  MOTORCYCLE = "MOTORCYCLE",
  CAR = "CAR",
  MOTORCYCLE_AND_CAR = "MOTORCYCLE_AND_CAR",
  NO = "NO",
}
