import { NextFunction, Request, Response } from 'express';
import Pizza from '../models/pizza';

const getAllPizzas = (req: Request, res: Response, next: NextFunction) => {
  Pizza.find()
  .exec()
  .then(results => {
    return res.status(200).json({
      pizzas: results
    });
  })
  .catch(error => {
    return res.status(500)
  })
}

export default { getAllPizzas };