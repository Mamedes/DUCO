interface IHotelResponseDTO {
  id?: number;
  secureId?: string;
  email: string;
  name: string;
  phone: string;
  totalTables: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export { IHotelResponseDTO };
