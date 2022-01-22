import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyArNNMJ-hwhi3Wkad9A9fRaM8J4Y9Z0JjU",
  authDomain: "crwn-db-8e197.firebaseapp.com",
  projectId: "crwn-db-8e197",
  storageBucket: "crwn-db-8e197.appspot.com",
  messagingSenderId: "469562044447",
  appId: "1:469562044447:web:c7215476ae0200514ca52a",
  measurementId: "G-97QPJHG1VM",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
