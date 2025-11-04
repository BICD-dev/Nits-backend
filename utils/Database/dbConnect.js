import mongoose from 'mongoose';

async function connectDb (){
     try {
        await mongoose.connect('MONGO_URI');
        console.log("MongoDb database connected successfully")
     } catch (error) {
        console.error("mongodb connection failed ",error.message)
     }
}
export default connectDb