import ratelimt from "../config/upstash.js";

const rateLimiter = async (req,resizeBy,next) => {

    try{
        const {success}=await ratelimt.limit("my-rate-limit");

        if(!success){
            return res.status(429).json({
                message:"too many requests ,please try again later",
            });
        }

        next();
    }catch (error){
        console.log("Rate limit error", error);
        next(error);
    }


 
};

export default rateLimiter;