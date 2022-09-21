const set_dir = require('.')
const { user_json_nav } = require('./metrics_utils')
const { save_data } = require('./save_data')


const register_dir=set_dir('users_summary',{})
const {data,dir}=register_dir
const save_user=async(id,name)=>{
    const new_user={
        name,
        permanence_logs:{}
        }
        data[id]=new_user
        await save_data(dir,data)
}


module.exports={
    permanence_counter:async(user_data,type)=>{
        const {name,id}=user_data
        if(!data[id])await save_user(id,name)
            data[id].permanence_logs=user_json_nav(data[id].permanence_logs,type)
            return save_data(dir,data)
    },
    finish_permanence_counter:(user_data)=>{
        const {name,id}=user_data
        try{
            if(!data[id].permanence_logs[date.getDate()]){
                
                data[id].permanence_logs[date].last_session=date
                const updated_data=user_json_nav(data,user_data.id,false)
                console.log(data)
                save_data(dir,updated_data)
            
            }
        }catch(e){
            console.log(e)
        }
    }

}