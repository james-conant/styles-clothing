const firebase = require("firebase/app");
require("firebase/firestore");
require("firebase/auth");

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
const firestore = firebase.firestore();

// Need to allow permissions in firebase to run
const addCollectionAndDocuments = async (obj) => {
  firestore.collection("collections").doc().set(obj);
};
const obj = {
  items: [
    {
      id: 46,
      imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
      name: "Pink Shirt",
      price: 69,
    },
    {
      id: 47,
      imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
      name: "Pink Shirt",
      price: 69,
    },
    {
      id: 48,
      imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
      name: "Pink Shirt",
      price: 69,
    },
    {
      id: 49,
      imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
      name: "Pink Shirt",
      price: 69,
    },
    {
      id: 50,
      imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
      name: "Pink Shirt",
      price: 69,
    },
    {
      id: 51,
      imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
      name: "Pink Shirt",
      price: 69,
    },
    {
      id: 52,
      imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
      name: "Pink Shirt",
      price: 69,
    },
    {
      id: 53,
      imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
      name: "Pink Shirt",
      price: 69,
    },
    {
      id: 54,
      imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
      name: "Pink Shirt",
      price: 69,
    },
    {
      id: 55,
      imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
      name: "Pink Shirt",
      price: 69,
    },
  ],
  title: "new-releases",
};
addCollectionAndDocuments(obj);
