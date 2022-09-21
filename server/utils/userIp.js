const request = require("request");

module.exports = {
  // IP Stack Request
  ipStackRequest: (ip) =>
    new Promise((resolve, reject) => {
      let url =
        "http://api.ipstack.com/" +
        ip +
        `?access_key=${process.env.IPSTACK_KEY}`;
      request(
        {
          url: url,
          method: "GET",
          json: true,
        },
        (error, response, body) => {
          if (response.statusCode !== 200) resolve("FAILED");

          if (body.success === false) {
            resolve("LIMIT_REACHED");
          }

          if (typeof body.country_code !== "undefined") {
            resolve(body.country_code);
          }
          resolve("FAILED");
        }
      );
    }),

  // IP Locate Request
  ipLocateRequest: (ip) =>
    new Promise((resolve, reject) => {
      let url = "https://www.iplocate.io/api/lookup/" + ip;
      request(
        {
          url: url,
          method: "GET",
          json: true,
        },
        (error, response, body) => {
          if (response.statusCode === 429) {
            resolve("LIMIT_REACHED");
          }

          if (response.statusCode !== 200) {
            resolve("FAILED");
          }

          if (typeof body.country_code !== "undefined") {
            resolve(body.country_code);
          }
          resolve("FAILED");
        }
      );
    }),
};
