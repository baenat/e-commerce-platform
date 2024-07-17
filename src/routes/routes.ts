import express, { Express, Router } from "express";

import productRoutes from './product.route';
import orderRoutes from './order.route';

const routerApp = (app: Express) => {

  const router = express.Router();
  const baseRoute = `/api/v${process.env.APP_VERSION}`;

  /* Version */
  app.use(baseRoute, router);

  /* Documentacion Rutas Dispoibles */
  app.use('/', (resquest, response) => {
    response.json({
      message: 'Available Endpoints',
      endpoints: {
        products: `${baseRoute}/products`,
        orders: `${baseRoute}/orders`
      }
    });
  });

  /* Rutas disponibles */
  router.use('/products', productRoutes);
  router.use('/orders', orderRoutes);

  /* Ruta no encontrada */
  router.use('*', (resquest, response) => {
    response.status(404).json({ error: 'EndPoint not found' });
  });

}

export = routerApp;