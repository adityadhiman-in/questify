import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
    userId:{
        type: String,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    location:{
        type: String,
    },
    picturepath:{
        type: String,
    },
    description:{
        type: String,
    },
    userPicturePath:{
        type: String,
    },
    likes:{
        type : Map,
        of: Boolean,
    },
    comments:{
        type: Array,
        default :[]
    }    
}, {timestamps: true});

export default mongoose.model("Post", postSchema);