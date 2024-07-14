import { Schema, model } from 'mongoose';

const orderSchema = new Schema(
  {
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    total: { type: Number, required: true },
  },
  {
    /* createdAt, updatedAt */
    timestamps: true,
    versionKey: false
  }
);

export const Order = model('orders', orderSchema);
