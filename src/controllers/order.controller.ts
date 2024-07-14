import { Request, Response } from 'express';
import { Order } from './../models/order.model';
import handlerHttpError from '../utils/handlerHttpError';

export const getAllOrders = async (req: Request, res: Response) => {
  const orders = await Order.find();
  res.json(orders);
};

export const getOrder = async (req: Request, res: Response) => {

  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    handlerHttpError(res, `Error: getOrder ${error}`);
  }

};

export const createOrder = async (req: Request, res: Response) => {
  const newOrder = new Order(req.body);
  await newOrder.save();
  res.status(201).json(newOrder);
};

export const updateOrder = async (req: Request, res: Response) => {
  const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (order) {
    res.json(order);
  } else {
    res.status(404).json({ message: 'Order not found' });
  }
};

export const deleteOrder = async (req: Request, res: Response) => {
  const order = await Order.findByIdAndDelete(req.params.id);
  if (order) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Order not found' });
  }
};
