import { Router } from 'express';
import { getAllOrders, getOrder, createOrder, updateOrder, deleteOrder } from './../controllers/order.controller';

const orderRoutes = Router();

orderRoutes.get('/', getAllOrders);
orderRoutes.get('/:id', getOrder);
orderRoutes.post('/', createOrder);
orderRoutes.put('/:id', updateOrder);
orderRoutes.delete('/:id', deleteOrder);

export = orderRoutes;
