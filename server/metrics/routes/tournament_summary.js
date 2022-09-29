const express=require('express')
const router=express.Router()

const { get_json_data } = require('../utils/routes_utils')



router.get('/',(req,res)=>{
    try{
        const file= get_json_data('phase_participants_summary')
        res.status(200).send(file)
    }catch(e){
        console.log(e)
    }
})



module.exports=router