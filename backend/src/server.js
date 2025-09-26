import express from "express"
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"

dotenv.config();

console.log(process.env.MONGO_URI);

const app= express();
const PORT=process.env.PORT ||5001
connectDB();

//middleware
app.use(express.json()); //this middleware will pasre json bodies : req.body
//our simple custom middleware 
app.use((req,res,next)=> {
    console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
    next();
})

app.use("/api/notes",notesRoutes)




app.listen(PORT,()=> {
    console.log("server started on port:",PORT);
});

//mongodb+srv://anushka612004_db_user:Udi5VPrYtb0MCExn@cluster0.9elijjp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0