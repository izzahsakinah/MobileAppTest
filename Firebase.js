// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy39LmuccBlezZTKnAH4Gea5h3H2Pi-qY",
  authDomain: "mynanoria-app.firebaseapp.com",
  projectId: "mynanoria-app",
  storageBucket: "mynanoria-app.appspot.com",
  messagingSenderId: "884133751784",
  appId: "1:884133751784:web:191c455c4976bc0251125d"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//export const auth = getAuth(app)
// Initialize Firebase
let app;
if (firebase.apps.length === 0)
{
    app = firebase.initializeApp(firebaseConfig);
}else {
    app = firebase.app();
}

//const db = app.firestore();
const auth = firebase.auth()

export {auth};