import Note from "../models/Note.js";

export async function getAllNotes(req,res) {
    try{
        const  notes = await Note.find();
        res.status(200).json(notes);
    }
    catch(error){
        console.error("error in getAllNotes controller",error);
        res.status(500).json({message:"internal server error"});
    }
}

export async function createNote(req,res) {
    try {
        const {title,content} =req.body;
        const note=new Note({title,content});

        const savedNote=await note.save();
        res.status(201).json(savedNote);

    } catch (error) {
        console.error("error in createNote controller",error);
        res.status(500).json({message:"internal server error"});
    }
}

export function updateNote(req,res) {
    res.status(200).json({message:"note updated succesfully"})
}

export function deleteNote(req,res){
    res.status(200).json({message:"note deleted succesfully"})
}