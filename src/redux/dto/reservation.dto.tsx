export interface IReservation {
  email: string;
  fullname: string;
  gender: Gender;
  age: number;
  phone: string;
  contact?: string;
  number_of_tenant: number;
  has_pet: boolean;
  vehicle?: Vehicle;
  working_address: string;
  additional_request?: string;
}

export enum Gender {
  MALE,
  FEMALE,
}

export enum Vehicle {
  MOTORCYCLE,
  CAR,
  MOTORCYCLE_AND_CAR,
  NO,
}
