var admin = require('firebase-admin');
var serviceAccount = require("./prode-tonic3-firebase-adminsdk-zxyzb-436af36958.json");
const { User } = require("../models");

admin.initializeApp({
    credential:admin.credential.cert(serviceAccount),
    });

    
const registrationToken =[ "eE2tNF6vYo6Ct04_efNFb3:APA91bHHt48zzAC2-MeGPRA_3d6ImLCHEv67eCxXtWEvAUX2EfuBJdLbvyyfV__ZofCecLybRMeahGAouMW2UDAvbNVn0mUgPFLf5syfo09ys8okaSz63Z7Z-z6zwMXca_L84cXnnkSo"];

const payload = {
      "notification":{
      "title":"Aca va el titulo",
      "body":"Y aca nose que va"
        },
      data : {
      "title" : "piapapiepeppuup",
      "body" : "Body of data."
        },
    };
const options = {
        priority : "high",       
        timeToLive: 60*60
    }



async function sendPush(pepepe) {
    //const userTokens = await User.findByPk(userId)
    console.log(pepepe)
    admin.messaging().sendToDevice(registrationToken,payload,options)
    .then(function (response){
    
     console.log("successfully sent message : ",response)
     //console.log("pepepepepep",userTokens)
     //console.log(userTokens[0].dataValues.registrationToken)
     }).catch(function(e){
        //console.log(userTokens)
     console.log(e)
     console.log("didn't work");
     });
}


module.exports = { sendPush };