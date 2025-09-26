import ratelimt from "../config/upstash.js"

const rateLimiter = async (req,resizeBy,next) => {

    try{
        const {success}=await ratelimt.limit("my-limit-key")

        if(!success){
            return res.status.status(429).json({
                message:"too many requests ,please try again later"
            })
        }
    }catch {error}{
        console.log("Rate limit error", error);
        next(error);
    }


    next()
}

export default rateLimiter