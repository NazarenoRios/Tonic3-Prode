const set_dir = require("../utils");
const { to_str } = require("../utils/fase_to_str");
const { save_data } = require("../utils/save_data");

const register_dir = set_dir("phase_participants_summary", []);
const { data, dir } = register_dir;

const find_prop = (to_find, prop, data) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i][prop] === to_find) return i;
  }
};

module.exports = {
  inc_participants: (fase) => {
    const str_fase = to_str(fase);
    const phase_ix = find_prop(str_fase, "name", data);
    console.log("asdasd",str_fase)
    console.log("bbbb",phase_ix)
    if (!phase_ix && phase_ix !== 0) {
        data.push({"name":str_fase,value:1,text:`1%`})
        return save_data(dir,data)
    }
    data[phase_ix].value+=1
    data[phase_ix].text=`${data[phase_ix].value}%`
    save_data(dir,data)
  },
};
