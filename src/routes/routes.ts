import express, { Express, Router } from "express";

import productRoutes from './product.route';
import orderRoutes from './order.route';

const routerApp = (app: Express) => {

  const router = express.Router();

  app.use(`/api/v${process.env.APP_VERSION}`, router);

  router.use('/products', productRoutes);
  router.use('/orders', orderRoutes);

  router.use('*', (resquest, response) => {
    response.status(404).json({ error: 'EndPoint not found' });
  });

}

export = routerApp;