const set_dir = require("../utils");
const { parse_date } = require("../utils/init_date");
const { save_data } = require("../utils/save_data");

const find_obj_ix = (date_obj, data) => {
  const { month } = date_obj;
  for (let i = 0; i < data.length; i++) {
    if (data[i]["month"] === month) return i;
  }
};
const push_num_date=(month,index)=>{
  const register_dir = set_dir("register_summary_num", []);
    const { data, dir } = register_dir;
    if(!index){
      data.push({month,users:1})
     return save_data(dir,data)
    }
    data[index].users+=1
    save_data(dir,data)
}

const save_date = (dir, data) => {

  const { str_month,month } = parse_date(new Date());
  const obj_ix = find_obj_ix({ month: str_month },data);
  push_num_date(month,obj_ix)

  if (obj_ix!==0 && !obj_ix) {
    data.push({ month: str_month, users: 1 });
    return save_data(dir, data);
  } else {
    data[obj_ix].users += 1;
    return save_data(dir, data);
  }
};

module.exports = {
  inc_registed_acc: () => {
    const register_dir = set_dir("register_summary", []);
    const { data, dir } = register_dir;
    save_date(dir, data)
  },
};
