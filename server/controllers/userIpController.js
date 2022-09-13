const geoip = require("geoip-lite");
const userIp = require("../utils/userIp");
const axios = require("axios");

// Determine Client Country by IP Address
exports.userIp = async (req, res, next) => {
  try {
    const ip = await axios.get("https://geolocation-db.com/json/");
    return await res.status(200).send(ip.data);
  } catch (e) {
    console.log(e);
  }
};

/* exports.userIp = async (req, res, next) => {
    try {
  
      let now = new Date();
      let nowUnix = +new Date()/1000;
      let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
      console.log(ip)
      //const serviceLimits = await db.getGeoLimitExpiry();
      const serviceLimits = {
        ipstack_limit_expiry: 1543035611,
        iplocate_limit_expiry: 0
      };
  
      //handle IPStack result
      if(serviceLimits.ipstack_limit_expiry < nowUnix) {
              
        let result = await userIp.ipStackRequest(ip);
        if(result === 'LIMIT_REACHED') {
                  
          let limitExpire = +new Date(now.getFullYear(), now.getMonth()+1, 1+1)/1000;
          //db.updateGeoLimitExpiry('ipstack', limitExpire);
  
        } else if(result !== 'FAILED') {
          res.json({country: result});
          return;
        }
      }
  
      //handle IPLocate result
      if(serviceLimits.iplocate_limit_expiry < nowUnix) {
  
        result = await userIp.ipLocateRequest(ip);
        if(result === 'LIMIT_REACHED') {
  
          let limitExpire = +new Date(now)/1000 + (60*60*24);
          //db.updateGeoLimitExpiry('iplocate', limitExpire);
  
        } else if(result !== 'FAILED') {
          res.json({country: result});
          return;
        }
      }
  
      //Geo IP fallback
      const geo = geoip.lookup(ip);
      res.json({country: geo.country});
  
    } catch(e) {
      next(e);
    }
  }; */
