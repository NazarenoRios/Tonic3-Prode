const fs=require('fs')

module.exports={
    save_data:async (file,data)=>{
        const finished=(e)=>{
            if(e){
                console.log(e)
                return
            }
        }
        const json_data=JSON.stringify(data,null,2)
        await fs.writeFileSync(file,json_data,finished)
       return console.log('metric saved successfully')
    }
}
