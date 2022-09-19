const fs =require('fs')
const path = require('path')

const dir=path.join(__dirname, '../data') + '/metrics_data.json'

const file=fs.readFileSync(dir)
console.log(file.toString(),'aopwdoawkd')
const data=file.toString()?JSON.parse(file):file.toString()


const save_data=async(file,data)=>{
    console.log(file,data)
    const finished=(e)=>{
        if(e){
            console.log(e)
            return
        }
    }
    const json_data=JSON.stringify(data,null,2)
    await fs.writeFileSync(file,json_data,finished)
   return console.log('saved succefully')
}


const save_user=(user)=>{
    console.log(dir)
    const new_user={
        name:user.name,
        age:user.age,
    }
    data[user.name]=new_user
    save_data(dir,data)
}



module.exports=save_user
