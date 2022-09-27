const set_dir = require("../utils");
const { user_json_nav } = require("../utils/metrics_utils");
const { save_data } = require("../utils/save_data");




const find_index=(id,data)=>{
  for(let i = 0; i< data.length;i++){
    if(data[i].id===id)return i
  }
}

module.exports = {
  
  permanence_counter: async (user_data) => {
    const register_dir = set_dir("users_summary", []);
const { data, dir } = register_dir;
    const { name, id } = user_data;
    let user_ix= find_index(id,data)
    console.log(user_ix)
    if (!id) return;
    if (!data[user_ix]) {
        data.push({
        id,
        name,
        permanence_logs: {},
      })
      console.log(data,'apwodkapwod')
    user_ix=0
    }
    data[user_ix].permanence_logs = await user_json_nav(data[user_ix].permanence_logs);
    return save_data(dir, data);
  },
  finish_permanence_counter: (user_data) => {
    const { name, id } = user_data;
    try {
      if (!data[id].permanence_logs[date.getDate()]) {
        data[id].permanence_logs[date].last_session = date;
        const updated_data = user_json_nav(data, user_data.id, false);
        save_data(dir, updated_data);
      }
    } catch (e) {
      console.log(e);
    }
  },
};
