const fs =require('fs')
const path = require('path')


function set_dir(file_name,init_data){
    const dir=path.join(__dirname, '../data') + `/${file_name}.json`
    const file=fs.readFileSync(dir)
    const  data=file.toString()?JSON.parse(file):init_data

    return{dir,data}
}
module.exports=set_dir