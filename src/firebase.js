import firebase from 'firebase'

const firebaseApp = firebase.initializeApp( {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDERID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth()

  export{db,auth};