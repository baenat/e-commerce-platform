import { Router } from 'express';
import { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct } from './../controllers/product.controller';

const productRoutes = Router();

productRoutes.get('/', getAllProducts);
productRoutes.get('/:id', getProduct);
productRoutes.post('/', createProduct);
productRoutes.put('/:id', updateProduct);
productRoutes.delete('/:id', deleteProduct);

export = productRoutes;