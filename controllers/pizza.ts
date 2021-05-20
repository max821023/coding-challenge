import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Pizza from '../models/Pizza';

const createPizza = (req: Request, res: Response, next: NextFunction) => {
  let { name, ingredients } = req.body;

  const pizza = new Pizza({
    _id: new mongoose.Types.ObjectId(),
    name,
    ingredients
  });

  return pizza.save()
    .then(result => {
      return res.status(201).json({
        pizza: result
      });
    })
    .catch(error => {
      return res.status(500).json({
      message: error.message,
      error
      });
    })
};

const getAllPizzas = (req: Request, res: Response, next: NextFunction) => {
  Pizza.find()
  .exec()
  .then(results => {
    return res.status(200).json({
      pizzas: results
    });
  })
  .catch(error => {
    return res.status(500).json({
      message: error.message,
      error
    });
  });
};

export default { createPizza, getAllPizzas };