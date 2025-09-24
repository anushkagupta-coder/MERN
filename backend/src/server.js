import express from "express"
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"

dotenv.config();

console.log(process.env.MONGO_URI);

const app= express();
const PORT=process.env.PORT ||5001

app.use("/api/notes",notesRoutes)

connectDB();
//middleware
app.use(express.json())

app.listen(PORT,()=> {
    console.log("server started on port:",PORT);
});

//mongodb+srv://anushka612004_db_user:Udi5VPrYtb0MCExn@cluster0.9elijjp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0