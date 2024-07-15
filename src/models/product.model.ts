import { Schema, model } from 'mongoose';

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    images: { type: Array<string>, required: true },
    price: { type: Number, required: true },
    salePrice: { type: Number, required: false },
  },
  {
    /* createdAt, updatedAt */
    timestamps: true,
    versionKey: false
  }
);

productSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
  }
});

export const Product = model('products', productSchema);
