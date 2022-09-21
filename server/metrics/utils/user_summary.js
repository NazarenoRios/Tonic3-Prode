const {dir,data}=require('.')
const save_data = require("./save_data")

const fs =require('fs')
const path = require('path')
const dir=path.join(__dirname, '../data') + '/users_summary.json'
const file=fs.readFileSync(dir)
const  data=file.toString()?JSON.parse(file):{}


module.exports={
    save_user:(user)=>{
        const new_user={
            name:user.name,
            }
            data[user.name]=new_user
            save_data(dir,data)
    }
}