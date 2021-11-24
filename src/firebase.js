// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtY8_55DRiZ9ndwy4W9HzkaseS68HVcXc",
  authDomain: "event-management-ed439.firebaseapp.com",
  projectId: "event-management-ed439",
  storageBucket: "event-management-ed439.appspot.com",
  messagingSenderId: "689571092149",
  appId: "1:689571092149:web:1829b88c34cb7f678710fc",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Access Firestore instance
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { app, auth, provider };
