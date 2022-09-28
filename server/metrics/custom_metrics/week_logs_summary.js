const set_dir = require("../utils");
const { get_prop_index } = require("../utils/routes_utils");
const { save_data } = require("../utils/save_data");

const new_dir = set_dir("week_logs_summary", [
  { x: "Mon", y: 0 },
  { x: "Tues", y: 0 },
  { x: "Wed", y: 0 },
  { x: "Thur", y: 0 },
  { x: "Fri", y: 0 },
  { x: "Sat", y: 0 },
  { x: "Sun", y: 0 },
]);
const { data, dir } = new_dir;
module.exports = {
  inc_user_log: (day) => {
    console.log(day)
    const day_ix=get_prop_index(day,"x",data)
    if(!day_ix)return ''
    console.log(day,'0192301293')
    data[day_ix].y+=1
    save_data(dir,data)
  },
  reset_user_log:()=>{
    const new_dir = set_dir("week_logs_summary", [
        { x: "Mon", y: 0 },
        { x: "Tues", y: 0 },
        { x: "Wed", y: 0 },
        { x: "Thur", y: 0 },
        { x: "Fri", y: 0 },
        { x: "Sat", y: 0 },
        { x: "Sun", y: 0 },
      ]);
      const { data, dir } = new_dir;
      save_data(dir,data)
  }
};
