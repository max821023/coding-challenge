import express from 'express';
import controller from '../controllers/pizza';

const router = express.Router();

router.get('/get/pizzas', controller.getAllPizzas);

export = router;