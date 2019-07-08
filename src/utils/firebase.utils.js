import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "crwn-gh.firebaseapp.com",
  databaseURL: "https://crwn-gh.firebaseio.com",
  projectId: "crwn-gh",
  storageBucket: "",
  messagingSenderId: "993210399901",
  appId: "1:993210399901:web:53bd046f185d7bc0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);