module.exports={
    get_json_data:(json_name)=>{
        try{
           if(!json_name)return false
           const {data}=set_dir(json_name)
           return data
        }
        catch(e){
           console.log(e)
        }
     },
     get_prop_index:(val,prop,data)=>{
        for(let i= 0; i< data.length; i++){
            if(data[i][prop]===val)return i
        }
     }
}