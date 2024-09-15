import Post from '../models/Post.js'; 
import multer from 'multer';
import path from 'path';

// Setup multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Controller to create a new post
const createPost = async (req, res) => {
  try {
    const { title, description, location, contact } = req.body;
    const image = req.file.path; 

    const newPost = new Post({
      title,
      description,
      location,
      image,
      contact
    });

    await newPost.save();
    res.redirect('/'); 
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

// Controller to get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.render('explore', { posts }); 
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');s
  }
};

export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).render('404', { error_msg: 'Post not found' });
    }

    res.render('singlePost', { post }); // Render single post view
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

export { createPost, getAllPosts, upload };
