import { Request, Response } from 'express';
import { Product } from './../models/product.model';
import handlerHttpError from '../utils/handlerHttpError';

export const getAllProducts = async (req: Request, res: Response) => {
  const products = await Product.find();
  res.json(products);
};

export const getBestSellers = async (req: Request, res: Response) => {
  const products = (await Product.aggregate([{ $sample: { size: 4 } }]).exec()).map(product => {
    const formattedProduct = {
      ...product,
      id: product._id,
    };
    delete formattedProduct._id;
    return formattedProduct;
  });
  res.json(products);
};

export const getProduct = async (req: Request, res: Response) => {

  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    handlerHttpError(res, `Error: getProduct ${error}`);
  }

};

export const createProduct = async (req: Request, res: Response) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.status(201).json(newProduct);
};

export const updateProduct = async (req: Request, res: Response) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (product) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};
