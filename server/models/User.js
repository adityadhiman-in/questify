import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    firstName :{
        type: String,
        required: true,
        min: 2,
        max: 20
    },
    lastName :{
        type: String,
        required: true,
        min: 2,
        max: 20
    },
    email :{
        type: String,
        required: true,
        max: 50,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    password :{
        type: String,
        required: true,
        max: 8
    },
    picturePath :{
        type: String,
        default: "",
    },
    friends:{
        type: Array,
        default: []
    },
    location : String,
    occupation: String,
    viewdProfile : Number,
    Impressions : Number
}, {timestamps : true})

export default mongoose.model('User', UserSchema);