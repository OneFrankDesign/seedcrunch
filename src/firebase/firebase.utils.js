import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyAFc47CZUyWMGNqyPnCyfuJYbTJg-XuVI4",
  authDomain: "seedcrunch-db.firebaseapp.com",
  projectId: "seedcrunch-db",
  storageBucket: "seedcrunch-db.appspot.com",
  messagingSenderId: "699604288810",
  appId: "1:699604288810:web:d77f95bf9aa669d14f0a53",
  measurementId: "G-GJ53PCEKE3",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
