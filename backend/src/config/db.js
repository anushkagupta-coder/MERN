import mongoose from "mongoose"

export const connectDB = async ()=>{
    try{
        await mongoose.connect(
            process.env.MONGO_URI
        );
        console.log("mongodb connected succesfulyyyyyy")
    } catch (error){
        console.error("error in connecting mongobd",error);
        process.exit(1);//exit with failure 
    }
};