import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider ,signInWithPopup } from "firebase/auth"

//Prueba para las push notification
import { getMessaging } from 'firebase/messaging'

const firebaseConfig = {
  apiKey: "AIzaSyCHvqGAuaAdONtnzCKCeJON2FEMpDPPuBY",
  authDomain: "fir-360201.firebaseapp.com",
  projectId: "firebase-360201",
  storageBucket: "firebase-360201.appspot.com",
  messagingSenderId: "144833752845",
  appId: "1:144833752845:web:e22aa9b0b9cb30f4a44a44",
  measurementId: "G-CSFP77QPF1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

//Prueba para las push notification
export const messaging = getMessaging(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth,provider)
        .then(result => {
            const fullname = result.user.displayName;
            const email = result.user.email;
            const photoURL = result.user.photoURL;

            localStorage.setItem("fullname", fullname)
            localStorage.setItem("email", email)
            localStorage.setItem("photoURL", photoURL)
        })
        .catch(err => console.log(err))
}