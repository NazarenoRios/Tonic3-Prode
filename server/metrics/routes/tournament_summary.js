const express=require('express')
const router=express.Router()
const {validateAuth}=require('../../middleware/auth')
const set_dir = require('../utils')
const { get_json_data, get_prop_index } = require('../utils/routes_utils')


router.get('/',async (req,res,next)=>{
    const str_file= get_json_data('register_summary')
    const num_file= get_json_data('register_summary_num')
    res.status(200).send({str_file,num_file})
    
 })
router.get('/',(req,res)=>{
    try{
        const file= get_json_data('phase_participants_summary')
        res.status(200).send(file)
    }catch(e){
        console.log(e)
    }
})



module.exports=router