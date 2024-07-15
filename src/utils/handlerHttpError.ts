import { Response } from 'express';

const handlerHttpError = (res: Response, error: Error, statusCode: number = 500) => {
  console.error(error.message);
  res.status(statusCode).json({ error: error.message });
}

export = handlerHttpError;