import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import dbConnect from './database/database';
import routerApp from "./routes/routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT ?? 3000;

app.use(cors());
app.use(express.json());

/* Rutas */
routerApp(app);

/* Conexion BD */
dbConnect()
  .then(() => {
    app.listen(port, () => {
      console.log(`*** [server]: Server is running on port: ${port} ***`);
    });
  });