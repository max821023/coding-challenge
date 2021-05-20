import mongoose, { Schema } from 'mongoose';
import IIngredient from '../interfaces/ingredient';

const IngredientSchema: Schema = new Schema({
  name: { type: String, required: true}
})

export default mongoose.model<IIngredient>('Ingredient', IngredientSchema);