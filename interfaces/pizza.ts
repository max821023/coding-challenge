import { Document } from 'mongoose';

export default interface IPizza extends Document {
  name: string;
  toppings: string[];
  photo: string;
}