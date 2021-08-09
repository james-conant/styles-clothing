import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBdwCduaYsyN0_Y4Jyqx2b2EP1sJzy1FEg",
  authDomain: "styles-clothing-db.firebaseapp.com",
  projectId: "styles-clothing-db",
  storageBucket: "styles-clothing-db.appspot.com",
  messagingSenderId: "487858426429",
  appId: "1:487858426429:web:2023ed5860edc8242b5054",
  measurementId: "G-789W1PG74Q",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
