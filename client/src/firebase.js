import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyB-q6M_IJnO-P1nj0qAACHBD3BqX5-jGuQ",
  authDomain: "prode-tonic3.firebaseapp.com",
  databaseURL: "https://prode-tonic3-default-rtdb.firebaseio.com",
  projectId: "prode-tonic3",
  storageBucket: "prode-tonic3.appspot.com",
  messagingSenderId: "776824448804",
  appId: "1:776824448804:web:55bac67a007a4e032eb5b1",
  measurementId: "G-C0G7P5J93M",
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
