import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "crwn-gh.firebaseapp.com",
  databaseURL: "https://crwn-gh.firebaseio.com",
  projectId: "crwn-gh",
  storageBucket: "crwn-gh.appspot.com",
  messagingSenderId: "993210399901",
  appId: "1:993210399901:web:53bd046f185d7bc0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuthentication, additionalData) => {
  if (!userAuthentication) return;

  const userReference = firestore.doc(`users/${userAuthentication.uid}`);
  const snapshot = await userReference.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuthentication;
    const createdAt = new Date();

    try {
      await userReference.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error('Error creating user:', error.message)
    }
  }

  return userReference;
};