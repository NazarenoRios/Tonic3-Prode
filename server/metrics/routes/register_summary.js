const express=require('express')
const { validateToken } = require('../../config/tokens')
const router=express.Router()
const { get_json_data, get_prop_index } = require('../utils/routes_utils')


router.get('/',async (req,res,next)=>{
   const str_file= get_json_data('register_summary')
   const num_file= get_json_data('register_summary_num')
   res.status(200).send({str_file,num_file})
   
})

router.get('/permanency',(req,res,next)=>{
   try{
      const file_data= get_json_data('user_permanency')
      file_data.forEach((data,i) => {
         file_data[i] = [data]
      });
         return res.send(file_data)
   }catch(e){
      console.log(e)
      res.sendStatus(404)
   }
})

router.get('/logs_per_day',(req,res,next)=>{
   try{
      const file_data=get_json_data('week_logs_summary')
      return res.status(200).send(file_data)
   }catch(e){
      console.log(e)
   }
})


module.exports=router