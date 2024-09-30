// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, isSupported, logEvent,reason } from "firebase/analytics";

import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx7guL3oCsfbJ6VW4sN9jTPIaLSIf3rtM",
  authDomain: "live-landing-page.firebaseapp.com",
  projectId: "live-landing-page",
  storageBucket: "live-landing-page.appspot.com",
  messagingSenderId: "484312651743",
  appId: "1:484312651743:web:6c83d7836291e92981d66a",
  measurementId: "G-MJE27ST1KD"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = (typeof window != "undefined")?(getAnalytics(app)):null;
if(analytics === null){
    console.log("reason",reason)
    if(reason==='analytics/cookies-not-enables'){
        alert('Please enable cookies')
    }
    //logEvent(analytics, 'notification_received');
}


export const db = getFirestore(app);

