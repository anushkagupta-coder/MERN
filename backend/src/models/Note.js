import mongoose from "mongoose";

//1-create schema
//2-model based of that schems;

const noteSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,     
    },

    content:{
        type:String,
        required:true,
    },
},
{timestamps:true}//CREATEDAT ,  UPDATEDAT
);

const Note=mongoose.model("Note",noteSchema)

export default Note;