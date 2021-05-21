import { Document } from 'mongoose';

export default interface IRecommendation extends Document {
  recommendedPizza: string;
  ingredientOne: string;
  ingredientTwo: string;
}