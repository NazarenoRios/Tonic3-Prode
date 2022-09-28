const { User } = require("../../models");
const set_dir = require("../utils");
const { user_json_nav } = require("../utils/metrics_utils");
const { save_data } = require("../utils/save_data");
const { inc_user_permanency } = require("./registers_users");


const register_dir = set_dir("users_summary", []);
const { data, dir } = register_dir;


const find_index=(id)=>{
  for(let i = 0; i< data.length;i++){
    if(data[i].id===id)return i
  }
}
const abrev_country=(country)=>{
  if(country==='Argentina')return 'AR'
  if(country==='Estados Unidos')return 'US'
  if(country==='Brasil')return 'BR'
}

module.exports = {
  
  permanence_counter: async (user_data) => {
    const { name, id } = user_data;
    const user_country=await User.findOne({where:{id}})
    const {country}=user_country
    const abreved_country=abrev_country(country)
    let user_ix= find_index(id)
    console.log(user_ix)
    if (!id) return;
    if (!data[user_ix]) {
        data.push({
        id,
        name,
        user_country:country,
        permanence_logs: {},
      })
    user_ix=0
    }
    data[user_ix].permanence_logs = await user_json_nav(data[user_ix].permanence_logs,abreved_country);
    return save_data(dir, data);
  },
  finish_permanence_counter: (user_data) => {
    const { name, id } = user_data;
    try {
      if (!data[id].permanence_logs[date.getDate()]) {
        data[id].permanence_logs[date].last_session = date;
        const updated_data = user_json_nav(data, user_data.id, );
        save_data(dir, updated_data);
      }
    } catch (e) {
      console.log(e);
    }
  },
};
