// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK58S9NMppBJSh8cM17s_04Sx5tdf4gjU",
  authDomain: "netflix-gpt-5e70f.firebaseapp.com",
  projectId: "netflix-gpt-5e70f",
  storageBucket: "netflix-gpt-5e70f.appspot.com",
  messagingSenderId: "682022736586",
  appId: "1:682022736586:web:7315a5de1fad9e98821a33",
  measurementId: "G-2BLSK1HXZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()