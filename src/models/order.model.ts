import { Schema, model } from 'mongoose';

const orderSchema = new Schema(
  {
    productsId: [{ type: Schema.Types.ObjectId, ref: 'Product', required: true }],
    quantity: { type: Number, required: true },
    total: { type: Number, required: true },
  },
  {
    /* createdAt, updatedAt */
    timestamps: true,
    versionKey: false
  }
);

orderSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
  }
});

export const Order = model('orders', orderSchema);
