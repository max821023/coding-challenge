import { Document } from 'mongoose';

export default interface IRecommendation extends Document {
  recommendedPizza: string;
  firstIngredient: string;
  secondIngredient: string;
}