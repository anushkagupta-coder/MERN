import Note from "../models/Note.js";

export async function getAllNotes(req,res) {
    try{
        const  notes = await Note.find().sort({createdAt:-1});//-1 for newest first
        res.status(200).json(notes);
    }
    catch(error){
        console.error("error in getAllNotes controller",error);
        res.status(500).json({message:"internal server error"});
    }
}

export async function getNoteById(req,res){
    try{
        const note = await Note.findById(req.params.id);
        if(!note) return res.status(404).json({message:"note not found"});
        res.json(note);
    }
    catch(error){
        console.error("error in getNoteById controller",error);
        res.status(500).json({message:"internal server error"});
    }
}

export async function createNote(req,res) {
    try{
        const {title,content} = req.body;
        const note=new Note({title,content});

        const savedNote = await note.save();
        res.status(201).json(savedNote);

    }
    catch(error){
        console.error("error in createNote controller",error);
        res.status(500).json({message:"internal server error"});
    }
}

export async function updateNote(req,res) {
    try{
        const { title ,content }= req.body;
        await Note.findByIdAndUpdate(req.params.id,{title,content})
        res.status(200).json({message:"note updated succesfully"});
    }
    catch (error) {
        console.error("error in createNote controller",error);
        res.status(500).json({message:"internal server error"});
    }
}

export async function deleteNote(req,res){
    try{
        const deletedNode = await Note.findByIdAndDelete(req.params.id)
        if(!deletedNode) return res.status(404).json({message:"note not found "});
        res.status(200).json({message:"note deleted successfully"});

    }
    catch(error){
        console.error("error in deleteNode controller",error);
        res.status(500).json({message:"internal server error"});
    }
}