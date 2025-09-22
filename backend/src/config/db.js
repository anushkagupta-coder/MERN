import mongoose from "mongoose"

export const connectDB = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://anushka612004_db_user:Udi5VPrYtb0MCExn@cluster0.9elijjp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("mongodb connecetd succesfulyyyyyy")
    } catch (error){
        console.error("error in connecting mongobd",error);
    }
};