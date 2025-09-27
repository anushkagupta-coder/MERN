import {useEffect, useState} from "react";
import Navbar from "../components/Navbar.jsx";
import RateLimitedUI from "../components/RateLimitedUI.jsx";
import axios from "axios";

const HomePage=()=>{
  const [isRateLimited,setIsRateLimited]=useState(false);
  const [notes,setNotes]=useState([])
  const [loading,setloading]=useState(true)

  useEffect(() => {
        const fetchNotes = async() =>{
            try{
                const res=await axios.post ("http://localhost:5173/api/notes")
                
                console.log(res);
            } catch(error){
                console.log("enter fetching notes");
            }
        }
        fetchNotes();
    
    },[]);

  return (
    <div className = "min-h-screen">
        <Navbar/>
        {isRateLimited && <RateLimitedUI/>}
    </div>
  );
};



export default HomePage;