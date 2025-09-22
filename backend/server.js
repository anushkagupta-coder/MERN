import express from "express"

const app= express();


app.get("/api/notes",(req,res)=>{
    res.status(200).send("you get 500 notes");
});

app.post("/api/notes",(req,res)=> {
    res.status(201).json({message:"note created succesfully"})
})

app.put("/api/notes:id",(req,res)=> {
    res.status(200).json({message:"note updated succesfully"})
})

app.put("/api/notes:id",(req,res)=> {
    res.status(200).json({message:"note deleted succesfully"})
})



app.listen(5001,()=> {
    console.log("server started on port:5001");
});