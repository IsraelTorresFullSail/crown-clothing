import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBsrjSBbtVvRFYnOFfwaZIer3iK6uUrqSE",
    authDomain: "crown-db-1ad9d.firebaseapp.com",
    databaseURL: "https://crown-db-1ad9d.firebaseio.com",
    projectId: "crown-db-1ad9d",
    storageBucket: "crown-db-1ad9d.appspot.com",
    messagingSenderId: "289995711900",
    appId: "1:289995711900:web:4691091697f634d073d459"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;