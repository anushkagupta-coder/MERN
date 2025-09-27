import {useEffect, useState} from "react";
import Navbar from "../components/Navbar.jsx";
import RateLimitedUI from "../components/RateLimitedUI.jsx";
import axios from "axios";
import toast from "react-hot-toast";

const HomePage=()=>{
  const [isRateLimited,setIsRateLimited]=useState(false);
  const [notes,setNotes]=useState([])
  const [loading,setloading]=useState(true)

  useEffect(() => {
        const fetchNotes = async() =>{
            try{
                const res=await axios.get ("http://localhost:5001/api/notes");
                console.log(res.data);

                setNotes(res.data)
                setIsRateLimited(false)
            } catch(error){
                console.log("error fetching notes");
                console.log(error);
                if(error.response?.status===429){
                    setIsRateLimited(true)
                }
                else{
                    toast.error("failed to load notes")

                }
            }finally {
                setLoading(false)
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