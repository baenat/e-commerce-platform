import { Schema, model } from 'mongoose';

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  {
    /* createdAt, updatedAt */
    timestamps: true,
    versionKey: false
  }
);

export const Product = model('products', productSchema);
