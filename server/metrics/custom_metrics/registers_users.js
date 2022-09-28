const set_dir = require("../utils");
const { save_data } = require("../utils/save_data");


const find_country=(country,data)=>{
  for(let i= 0; i< data.length; i++){
    if(data[i].x.toLowerCase()===country.toLowerCase())return i
  }
}

module.exports = {
  inc_user_permanency: async (country) => {
    const register_dir = await set_dir("user_permanency", [
      { x: "AR", y: 0 },
      { x: "BR", y: 0 },
      { x: "US", y: 0 },
    ]);
    const { data, dir } = register_dir;
    const country_ix = find_country(country,data)
    console.log(country_ix)
    data[country_ix].y += 1;
    save_data(dir, data);
  },
  dec_user_permanency: () => {
    const country_ix = data.indexOf(country);
    data[country_ix].y -= 1;
    save_data(dir, data);
  },
};
