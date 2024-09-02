import mongoose from 'mongoose';

// Connect to MongoDB
const connectDb = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
        });
        console.log(`Connected to MongoDB ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
}
export default connectDb;