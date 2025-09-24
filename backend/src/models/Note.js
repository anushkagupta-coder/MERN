import mongoose from "mongoose";

//1-create scheme
//2-model based of that schems;

const noteSchema=new mongoose.schema({
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