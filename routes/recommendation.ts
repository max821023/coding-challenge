import express from 'express';
import controller from '../controllers/recommendation';

const router = express.Router();

router.post('/create/recommendation', controller.createRecommendation);
router.get('/get/recommendations', controller.getAllRecommendations);

export = router;