import Post from "../models/Post.js";
import User from "../models/User.js";

// Create
export const createPost = async(req, res)=>{
    try {
        const {userId, description, picturePath} = req.body;
        const user = await User.findById(userId);
        const newPost = new Post({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            picturePath,
            userPicturePath: user.picturePath,
            comments: [],
            likes: {},
        })
        await newPost.save();

        const post = await Post.find();
        res.status(201).json(post);

    } catch (error) {
       res.status(409).send({error: error.message}) ;
    }
}

// Read

export const getFeedPosts = async(req, res)=>{
    try {
        const posts = await Post.find().sort({createdAt: -1});
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({message : error.message})
    }
}

export const getUserPosts = async(req, res)=>{
    try {
        const {userId} = req.params;
        const posts = await Post.find({userId}).sort({createdAt: -1});
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({message : error.message})
    }
}

// Update

export const likePost = async(req, res)=>{
 try {
    const {id} = req.params;
    const {userId} = req.body;
    const post = await Post.findById(id);
    const isLiked = post.likes.get(userId);

    if(isLiked){
        post.likes.delete(userId);
    }
    else{
        post.likes.set(userId, true);
    }
    const updatePost = await Post.findByIdAndUpdate(
        id,
        {likes: post.likes},
        {new: true}
    )
    res.status(200).json(updatePost);
 } catch (error) {
    res.status(404).json({error: error.message});
 }   
}