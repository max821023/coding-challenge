import { NextFunction, Request, Response } from 'express';
import Recommendation from '../models/Recommendation';

const createRecommendation = (req: Request, res: Response, next: NextFunction) => {
  let { recommendedPizza, firstIngredient, secondIngredient } = req.body;

  const recommendation = new Recommendation({
    recommendedPizza,
    firstIngredient,
    secondIngredient
  });

  return recommendation.save()
    .then(result => {
      return res.status(201).json({
        recommendation: result
      });
    })
    .catch(error => {
      return res.status(500).json({
      message: error.message,
      error
      });
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