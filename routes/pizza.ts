import express from 'express';
import controller from '../controllers/pizza';

const router = express.Router();

router.post('/create/pizza', controller.createPizza);
router.get('/get/pizzas', controller.getAllPizzas);

export = router;