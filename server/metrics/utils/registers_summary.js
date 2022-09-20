const { save_data } = require('./save_data')

const fs =require('fs')
const path = require('path')
const dir=path.join(__dirname, '../data') + '/register_summary.json'
const file=fs.readFileSync(dir)
const  data=file.toString()?JSON.parse(file):{}

set_prop=(prop)=>data[prop]=0

module.exports={
    inc_registed_acc:()=>{
        console.log(dir,data)
        if(!data.created_acc)set_prop('created_acc')
        data.created_acc+=1
        save_data(dir,data)
    },
    inc_deleted_acc:()=>{
        if(!data.deleted_acc)set_prop('deleted_acc')
        data.register_summary.deleted_acc+=1
        save_data(dir,data)
        }
}