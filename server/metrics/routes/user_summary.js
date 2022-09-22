const express=require('express')
const router=express.Router()
const {validateAuth}=require('../../middleware/auth')
const set_dir = require('../utils')

const user_summary=set_dir('users_summary')
const {data}=user_summary

router.get('/',(req,res,next)=>{
    res.status(200).send(data)
})
router.get('/:user_id',(req,res,next)=>{
    // if(!req.user.admin)return res.sendStatus(401)
     const {user_id}=req.params
     if(!data[user_id])return res.sendStatus(404)
     res.send(data[user_id])
 })




module.exports=router