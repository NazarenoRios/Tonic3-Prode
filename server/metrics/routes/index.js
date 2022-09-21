const express=require('express')
const { finish_permanence_counter, permanence_counter } = require('../utils/user_summary')
const router=express.Router()
const {validateAuth}=require('../../middleware/auth')
const parseFn=(req,res,next)=>{
    req.cookies.token=req.body.token
    next()
}

router.post('/',parseFn,validateAuth,(req,res,next)=>{
    const finish_counter=permanence_counter({id:req.user.id,name:req.user.name},'logout_date')
    console.log(finish_counter)
    if(finish_counter)return res.sendStatus(204)
    res.sendStatus(404)
})




module.exports=router