var admin = require('firebase-admin');
var serviceAccount = require("./prode-tonic3-firebase-adminsdk-zxyzb-436af36958.json");
const { User } = require("../models");
const { validateAuth } = require("../middleware/auth")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});


async function sendPush(title, body, userId) {


  const users = await User.findAll()
  const allTokens = []
  users.forEach(user => {
    let userTokens = user.dataValues.registrationToken
    userTokens.forEach(token => allTokens.push(token))
  })

  const payload = {
    "notification": {
      "title": `${title}`,
      "body": `${body}`
    },
    data: {
      "title": "Title of data",
      "body": "Body of data."
    },
  };
  const options = {
    priority: "high",
    timeToLive: 60 * 60
  }
  if (userId) {

    const user = await User.findByPk(userId)
    const singleUserToken = user.datavalues.registrationToken
    admin.messaging().sendToDevice(singleUserToken, payload, options)
      .then(function (response) {
        console.log("successfully sent message : ", response)
      }).catch(function (e) {
        console.log(e)
        console.log("didn't work");
      });

  }
  if (!userId) {

    allTokens.forEach(token => admin.messaging().sendToDevice([token], payload, options)
      .then(function (response) {
        console.log("successfully sent message : ", response)
      }).catch(function (e) {
        console.log(e)
        console.log("didn't work");
      }))

  }
}


module.exports = { sendPush };