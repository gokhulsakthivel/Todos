import firebase, { firestore } from 'firebase';
import 'firebase/auth'
import 'firebase/database'
import 'firebase/analytics'

var firebaseConfig = {
    apiKey: "AIzaSyDgSlT3R2-b3ttE8S2noFpPhlO3qqxJdkY",
    authDomain: "todos-703b1.firebaseapp.com",
    databaseURL: "https://todos-703b1.firebaseio.com",
    projectId: "todos-703b1",
    storageBucket: "todos-703b1.appspot.com",
    messagingSenderId: "667809366567",
    appId: "1:667809366567:web:e08827c505d0dfe5e3c402",
    measurementId: "G-HR95GHMLEN"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
export const auth = firebase.auth();

export default firebase;   