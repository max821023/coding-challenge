import { NextFunction, Request, Response } from 'express';
import Recommendation from '../models/Recommendation';
import Pizza from '../models/Pizza';

const createRecommendation = (req: Request, res: Response, next: NextFunction) => {
  let { ingredientOne, ingredientTwo } = req.body;
  Pizza.find({toppings: {$all: [ingredientOne, ingredientTwo]}})
    .then(async data => {
      const recommendation = new Recommendation({
        ingredientOne,
        ingredientTwo,
        recommendedPizza: data[Math.floor(Math.random()*data.length)].name
      });
        try {
        const result_1 = await recommendation.save();
        return res.status(201).json({
          recommendation: result_1
        });
      } catch (error) {
        return res.status(500).json({
          message: error.message,
          error
        });
      }
    })
};

const getAllRecommendations = (req: Request, res: Response, next: NextFunction) => {
  Recommendation.find()
  .exec()
  .then(results => {
    return res.status(200).json({
      recommendations: results
    });
  })
  .catch(error => {
    return res.status(500).json({
      message: error.message,
      error
    });
  });
};

export default { createRecommendation, getAllRecommendations };