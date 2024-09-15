import express from 'express';
import { ensureAuthenticated } from '../middleware/auth.js';
import { createPost, getAllPosts, getPostById, upload } from '../controllers/postController.js';

const router = express.Router();

// Home page route - Protected
router.get('/', ensureAuthenticated, getAllPosts);

// Post creation - Protected
router.post('/', ensureAuthenticated, upload.single('image'), createPost);

// View single post - Protected
router.get('/:id', ensureAuthenticated, getPostById);

export default router;
