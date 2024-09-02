import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import User from '../models/User.js';

// Register Controller
export const register = async(req, res)=>{
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation
        } = req.body;
        
        const saltRounds = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile : Math.floor(Math.random() * 1000),
            impressions :  Math.floor(Math.random() * 1000)
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } 
    catch (error) {
        res.status(500).json({error : error.message});
    }
};

export const login = async(req, res)=>{
    try {
        const {email, password} = req.body;
        const userExist = await User.findOne({email : email});
        if(!userExist){
            return res.status(404).json({message : "User not found"});
        }
        
        const isMatch = await bcrypt.compare(password, userExist.password);
        if(!isMatch){
            return res.status(401).json({message : "Invalid credentials"});
        }
        
        const token = jwt.sign({id : userExist._id}, process.env.JWT_SECRET, {expiresIn : '1h'});
        delete userExist.password;;
        res.status(200).json({user : userExist, token : token});

    } catch (error) {
        res.status(500).json({error : error.message});
    }
}