import { Document } from 'mongoose';

export default interface IPizza extends Document {
  name: string;
  ingredients: string[];
}