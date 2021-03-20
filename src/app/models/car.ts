import { CarImage } from "./carImage";

export interface Car {
  carId: number;
  brandId: number;
  colorId: number;
  carName: string;
  brandName: string;
  colorName: string;
  dailyPrice: number;
  description: string;
  imagePath:string;
  carImages:CarImage[];
}
