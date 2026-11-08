import { Router } from 'express';
import { getComments, createComment } from '../controllers/comments.controller.js';

const router = Router();
router.get('/', getComments);
router.post('/', createComment);

export default router;
