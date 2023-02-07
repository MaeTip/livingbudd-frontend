export interface IRoomOwner {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  fullname: string;
  phone: string;
  email?: string;
  contact?: string;
  room_price: number;
  room_location: string;
  room_condition?: string;
  room_detail?: string;
  admin_comment?: string;
  is_mark_as_read?: boolean;
}
