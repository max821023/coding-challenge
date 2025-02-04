import mongoose, { Schema } from 'mongoose';
import IPizza from '../interfaces/pizza';

const PizzaSchema: Schema = new Schema({
  name: { type: String, required: true },
  toppings: [{ type: String }],
  photo: { type: String }
})

export default mongoose.model<IPizza>('Pizza', PizzaSchema);