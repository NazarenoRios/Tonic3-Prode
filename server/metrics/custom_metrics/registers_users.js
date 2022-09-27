const set_dir = require("../utils");
const { save_data } = require("../utils/save_data");
const register_dir = set_dir("user_permanency", [
  { x: "AR", y: 0 },
  { x: "BR", y: 0 },
  { x: "US", y: 0 },
]);
const { data, dir } = register_dir;

module.exports = {
  inc_user_permanency: (country) => {
    const country_ix = data.indexOf(country);
    data[country_ix].y += 1;
    save_data(dir, data);
  },
  dec_user_permanency: () => {
    const country_ix = data.indexOf(country);
    if (!country_ix) return save_country(country);
    data[country_ix].y -= 1;
    save_data(dir, data);
  },
};
