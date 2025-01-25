// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtmFnyzJWDRcRv7TbplkTPJeu0mQphvEo",
  authDomain: "webcafelanding-3a4f2.firebaseapp.com",
  projectId: "webcafelanding-3a4f2",
  storageBucket: "webcafelanding-3a4f2.firebasestorage.app",
  messagingSenderId: "619787151602",
  appId: "1:619787151602:web:ddf3f80c1da17cee47486b",
  measurementId: "G-4SV2NEQC5Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);