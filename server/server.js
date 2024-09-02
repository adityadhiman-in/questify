// Imports
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import { url } from 'inspector';
import connectDb from './config/db.js';
import { register } from 'module';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import { verifyToken } from './middlewares/auth.js';

// Load environment variables from .env file
dotenv.config();

// Configuration
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 8080;

// Connect to MongoDB
connectDb();

// Middlewares
app.use(express.json());
app.use(helmet());
// app.use(helmet.crossOriginEmbedderPolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, 'public/assets')));

// File Storage
const storage = multer.diskStorage({
    destination : (req, res) =>{
        createBrotliCompress(null, "public/assets");
    },
    filename : (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({storage});


// Routes with Files
app.post("/auth/register", upload.single("picture"), register);

// Routes
app.use("/auth", authRoutes);
app.use("/users", userRoutes);

app.listen(port, ()=>{
    console.log(`Server running on port http://localhost:${port}`);
});