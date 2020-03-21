import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAocOI7p5edXWn4CAF6yCQJ2jGMqTHWyBI",
  authDomain: "crwn-db-13d92.firebaseapp.com",
  databaseURL: "https://crwn-db-13d92.firebaseio.com",
  projectId: "crwn-db-13d92",
  storageBucket: "crwn-db-13d92.appspot.com",
  messagingSenderId: "372765197862",
  appId: "1:372765197862:web:a106d86dbf037384cf48e7",
  measurementId: "G-GZMZ4HX2B2"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
