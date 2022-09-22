const express=require('express')
const router=express.Router()
const register_summary=require('./register_summary')
const user_summary=require('./user_summary')


router.use('/register_summary',register_summary)
router.use('/user_summary',user_summary)


module.exports=router