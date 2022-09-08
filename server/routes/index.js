const express=require('express')
const router=express.Router()
const match=require('./match')

router.use('/match',match)

module.exports=router