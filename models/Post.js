import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  contact: {
    type: String, // Contact information field
    required: true, // Make this field required
  },
});

const Post = mongoose.model('Post', PostSchema);

export default Post;
