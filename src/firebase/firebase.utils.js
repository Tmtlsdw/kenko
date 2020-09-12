import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyB6JxZaCGPXEUf7SRRCTAD5IGZnW8O0-hU",
  authDomain: "kenko-a4bfa.firebaseapp.com",
  databaseURL: "https://kenko-a4bfa.firebaseio.com",
  projectId: "kenko-a4bfa",
  storageBucket: "kenko-a4bfa.appspot.com",
  messagingSenderId: "630869513071",
  appId: "1:630869513071:web:188a200335eadf894b0e9a",
  measurementId: "G-9VZ8X4JC08",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
