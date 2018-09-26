import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyDRhQvgjlDiaJlvs54hmdfJ5dKu8cVRmX8",
    authDomain: "globin-43075.firebaseapp.com",
    databaseURL: "https://globin-43075.firebaseio.com",
    projectId: "globin-43075",
    storageBucket: "globin-43075.appspot.com",
    messagingSenderId: "792303065796"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const auth = firebase.auth();
  const db = firebase.database();

  export { 
    db,  
    auth, 
};