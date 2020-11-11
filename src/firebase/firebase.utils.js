import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDziq88mthYPGKwmXSxtTT0ExQSHrMBgKk',
  authDomain: 'shop-db-97d74.firebaseapp.com',
  databaseURL: 'https://shop-db-97d74.firebaseio.com',
  projectId: 'shop-db-97d74',
  storageBucket: 'shop-db-97d74.appspot.com',
  messagingSenderId: '203720060464',
  appId: '1:203720060464:web:58418b5e16fb424e2347f5',
  measurementId: 'G-Q4GTZ8X8NJ',
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
