import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"; // for authentication
import "firebase/storage"; // for storage
import "firebase/database"; // for realtime databas
import "firebase/messaging"; // for cloud messaging
import "firebase/functions"; // for cloud functions

const app = firebase.initializeApp({
  apiKey: "AIzaSyB-IT4LE3Xka79T6JF2dcY-vHkJMa4JGQU",
  authDomain: "la-mamma-pedidos.firebaseapp.com",
  projectId: "la-mamma-pedidos",
  storageBucket: "la-mamma-pedidos.appspot.com",
  messagingSenderId: "1048018682717",
  appId: "1:1048018682717:web:d9cb8e8de9296328d95eb4",
  measurementId: "G-HQP5P4V5KC",
});

export const getFirebase = () => {
  return app;
};

//Para llamar a la base de datos
export const getFirestore = () => {
  return firebase.firestore();
};

// firebase.analytics();
