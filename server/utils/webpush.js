var admin = require('firebase-admin');
var serviceAccount = require("./prode-tonic3-firebase-adminsdk-zxyzb-436af36958.json");

admin.initializeApp({
    credential:admin.credential.cert(serviceAccount),
    });

    
var registrationToken =[ "eE2tNF6vYo6Ct04_efNFb3:APA91bEjTI4ajQ4rkltzUXjF_OOLsWtmzWwB6VKs5nRIOsNN4TGDwXCXTqamCBr8l5ZY0p-qXgW40OaNRJsD3eAFupUmIXIcG9S0tmEiAcR6xtUFPXXhamCC1fNYR3sBVrQ6LK1E1_5C"];
var payload = {
      "notification":{
      "title":"Title of notification",
      "body":"body of notification"
        },
      data : {
      "title" : "data title",
      "body" : "Body of data."
        },
    };
var options = {
        priority : "high",       
        timeToLive: 60*60
    }



async function sendPush() {
    admin.messaging().sendToDevice(registrationToken,payload,options)
    .then(function (response){
     console.log("successfully sent message : ",response)
     }).catch(function(){
     console.log("didn't work");
     });
}


module.exports = { sendPush };









/* admin.initializeApp({
    credential:admin.credential.cert(serviceAccount),
    });

async function sendPush(id) {
    try {
        const userLogged = await User.findOne({ where: { id: id } });
        var registrationToken =["eE2tNF6vYo6Ct04_efNFb3:APA91bEjTI4ajQ4rkltzUXjF_OOLsWtmzWwB6VKs5nRIOsNN4TGDwXCXTqamCBr8l5ZY0p-qXgW40OaNRJsD3eAFupUmIXIcG9S0tmEiAcR6xtUFPXXhamCC1fNYR3sBVrQ6LK1E1_5C"];
var payload = {
      "notification":{
      "title":"Aca va el titulo",
      "body":"body of notification"
        },
      data : {
      "title" : "data title",
      "body" : "Body of data."
        },
    };
var options = {
        priority : "high",         
        timeToLive: 60*60
    }
admin.messaging().sendToDevice(registrationToken,payload,options)
       .then(function (response){
        console.log("successfully sent message : ",response)
        }).catch(function(){
        console.log("didn't work");
        });
    }catch (error) {
        return error;
      }
}

module.exports = { sendPush }; */

