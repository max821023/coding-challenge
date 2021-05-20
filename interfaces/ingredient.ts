import { Document } from 'mongoose';

export default interface IIngredient extends Document {
  name: string;
}