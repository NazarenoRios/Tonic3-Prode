const express=require('express')
const router=express.Router()
const register_summary=require('./register_summary')
const tournament_summary=require('./tournament_summary')


router.use('/register_summary',register_summary)
router.use('/tournament_summary',tournament_summary)


module.exports=router