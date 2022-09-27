const express=require('express')
const router=express.Router()
const {validateAuth}=require('../../middleware/auth')
const set_dir = require('../utils')
const summary_file=set_dir('register_summary')
const {data}=summary_file



router.get('/',(req,res,next)=>{
    //if(!req.user.admin)return res.sendStatus(401)
    res.send(data)
})






module.exports=router