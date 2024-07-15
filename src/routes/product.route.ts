import { Router } from 'express';
import { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct, getBestSellers } from './../controllers/product.controller';

const productRoutes = Router();

productRoutes.get('/', getAllProducts);
productRoutes.get('/favorites', getBestSellers);
productRoutes.get('/:id', getProduct);
productRoutes.post('/', createProduct);
productRoutes.put('/:id', updateProduct);
productRoutes.delete('/:id', deleteProduct);

export = productRoutes;