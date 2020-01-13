import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAq-CKfaRsZaCFucqnedWs4gy83ZcoC2_E',
  authDomain: 'zedz-clothing-db.firebaseapp.com',
  databaseURL: 'https://zedz-clothing-db.firebaseio.com',
  projectId: 'zedz-clothing-db',
  storageBucket: 'zedz-clothing-db.appspot.com',
  messagingSenderId: '325958834501',
  appId: '1:325958834501:web:722db7237dd455eb41062c',
  measurementId: 'G-RW5PM3RD7Z'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
