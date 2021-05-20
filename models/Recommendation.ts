import mongoose, { Schema } from 'mongoose';
import IRecommendation from '../interfaces/recommendation';

const RecommendationSchema: Schema = new Schema({
  recommendedPizza: { type: String, required: true },
  firstIngredient: { type: String, required: true },
  secondIngredient: { type: String, required: true }
})

export default mongoose.model<IRecommendation>('Recommendation', RecommendationSchema);