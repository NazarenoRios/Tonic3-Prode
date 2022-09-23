const set_dir = require('.')
const { save_data } = require('./save_data')
const register_dir=set_dir('register_summary',{'created_acc':0,'deleted_acc':0})
const {data,dir}=register_dir
/*
class Regist_counter{
    constructor(){
        this.value=0,

    }
    sum(toSum){
        if(!toSum)return this.value+=1
        return this.value+=toSum
    }
    res(toRes){
        if(!toRes)return this.value-=1
        return this.value-=toRes
    }
    save_value(){
        save_data(dir,data)
    }
}
*/

module.exports={
    inc_registed_acc:(op)=>{
        data.created_acc+=1
        save_data(dir,data)
    },
    inc_deleted_acc:()=>{
        data.register_summary.deleted_acc+=1
        save_data(dir,data)
        }
}