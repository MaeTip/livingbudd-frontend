export interface IRoom {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  address: string;
  google_map?: string;
  building?: string;
  floor?: string;
  size: number;
  detail?: string;
  number_of_bedroom: number;
  number_of_bathroom?: number;
  maintenance_fee?: number;
  amenities?: string;
  facilities?: string;
  nearby_area?: string;
  is_created_by_owner: boolean;
  rental_price: number;
  rental_deposit?: number;
  rental_advance_payment?: number;
}
