const { permanence_counter } = require("../metrics/utils/user_summary")
const { validateAuth } = require("./auth")

module.exports={
    user_listener:(req,res,next)=>{
        if(!req.user)return next()
            permanence_counter({id:req.user.id,name:req.user.name})
           next()
    }
}