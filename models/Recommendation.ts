import mongoose, { Schema } from 'mongoose';
import IRecommendation from '../interfaces/recommendation';

const RecommendationSchema: Schema = new Schema({
  recommendedPizza: { type: String },
  ingredientOne: { type: String, required: true },
  ingredientTwo: { type: String, required: true }
})

export default mongoose.model<IRecommendation>('Recommendation', RecommendationSchema);