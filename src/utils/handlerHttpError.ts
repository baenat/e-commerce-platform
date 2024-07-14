import { Response } from 'express';

const handlerHttpError = (response: Response, message: string = 'Algo sucedio ', code: number = 403) => {
  response.status(code).json({ error: message });
}

export = handlerHttpError;