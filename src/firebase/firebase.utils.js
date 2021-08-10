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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // console.log("user auth (with constant connection to FIREBASE AUTH)", userAuth);

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // console.log("user reference (for all CRUD methods)", userRef);
  const snapShot = await userRef.get();
  // console.log("snap shot (the data)", snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.messaging);
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
