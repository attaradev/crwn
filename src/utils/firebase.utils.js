import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionReference = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach(object => {
    const documentReference = collectionReference.doc();
    batch.set(documentReference, object);
  })

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(document => {
    const { title, items } = document.data();
    return {
      routName: encodeURI(title.toLowerCase()),
      id: document.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

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