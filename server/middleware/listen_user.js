const { permanence_counter } = require("../metrics/custom_metrics//user_summary")
const { validateAuth } = require("./auth")
const { validateToken } = require("../config/tokens");
module.exports={
    user_listener:(req,res,next)=>{
        if(!req.cookies.token)return next()
        const {user}=validateToken(req.cookies.token)
        if(!user)return next()
            permanence_counter({id:user.id,name:user.name})
           next()
    }
}