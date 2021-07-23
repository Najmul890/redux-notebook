import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDjWUBMR4paIUvKX7XxCSNDNaurRt6ECgc",
    authDomain: "note-book890.firebaseapp.com",
    projectId: "note-book890",
    storageBucket: "note-book890.appspot.com",
    messagingSenderId: "304515891088",
    appId: "1:304515891088:web:c6b388bf35d5e3ee037d15"
  };


  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();