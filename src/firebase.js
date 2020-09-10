import firebase from 'firebase'

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyBLERLCyJ92Y0OCKECCqK6jFTAZUg2__g0",
    authDomain: "ecomm-site-9d986.firebaseapp.com",
    databaseURL: "https://ecomm-site-9d986.firebaseio.com",
    projectId: "ecomm-site-9d986",
    storageBucket: "ecomm-site-9d986.appspot.com",
    messagingSenderId: "39763797018",
    appId: "1:39763797018:web:66cee5951e7dca4a2bdda3",
    measurementId: "G-ETTDNYPWR1"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth()

  export{db,auth};