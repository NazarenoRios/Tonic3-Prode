const set_dir = require('.')
const { save_data } = require('./save_data')
const register_dir=set_dir('register_summary',{'created_acc':0,'deleted_acc':0})
const {data,dir}=register_dir


module.exports={
    inc_registed_acc:()=>{
        data.created_acc+=1
        save_data(dir,data)
    },
    inc_deleted_acc:()=>{
        data.register_summary.deleted_acc+=1
        save_data(dir,data)
        }
}