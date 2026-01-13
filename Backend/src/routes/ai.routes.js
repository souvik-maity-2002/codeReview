import express from 'express';
import { getReview } from '../controllers/ai.controller.js';
import { generateContent } from '../services/ai.service.js';

const router = express.Router();

// Use your controller function
router.post('/get-review', getReview);

export default router;
