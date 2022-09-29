const geoip = require("geoip-lite");
const axios = require("axios");

// Determine Client Country by IP Address
exports.userIp = async (req, res, next) => {
  try {
    const ip = await axios.get("https://geolocation-db.com/json/");
    return await res.status(200).send(ip.data.country_code);
  } catch (e) {
    console.log(e);
  }
};

//Geo IP fallback
//const geo = geoip.lookup(ip);
//res.json({ country: geo.country });
