importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: "AIzaSyB-q6M_IJnO-P1nj0qAACHBD3BqX5-jGuQ",
  authDomain: "prode-tonic3.firebaseapp.com",
  databaseURL: "https://prode-tonic3-default-rtdb.firebaseio.com",
  projectId: "prode-tonic3",
  storageBucket: "prode-tonic3.appspot.com",
  messagingSenderId: "776824448804",
  appId: "1:776824448804:web:55bac67a007a4e032eb5b1",
  measurementId: "G-C0G7P5J93M"
};


const app = firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging(app)

/* 
messaging.onBackgroundMessage(payload => {
    console.log("Recibiste mensaje apasdpapap")

    const notificationTitle = payload.notification.title
    const notificationOptions = {
        body: payload.notification.body,
        icon: "/logo192.png"
    }

    return self.registration.showNotification(
      notificationTitle,
      notificationOptions
    )
}) */
