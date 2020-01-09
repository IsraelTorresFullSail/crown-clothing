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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;