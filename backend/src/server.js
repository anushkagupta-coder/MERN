import express from "express"
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"

dotenv.config();

console.log(process.env.MONGO_URI);

const app= express();

app.use("/api/notes",notesRoutes)

connectDB();


app.listen(5001,()=> {
    console.log("server started on port:5001");
});

//mongodb+srv://anushka612004_db_user:Udi5VPrYtb0MCExn@cluster0.9elijjp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0