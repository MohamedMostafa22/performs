import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Initialize Firebase

const firebaseConfig = {
  apiKey: 'AIzaSyD4Ajizt6AgnLrAiFeljfizJz4vCHzAD80',
  authDomain: 'performa-1c55c.firebaseapp.com',
  projectId: 'performa-1c55c',
  storageBucket: 'performa-1c55c.appspot.com',
  messagingSenderId: '732265732671',
  appId: '1:732265732671:web:3ab1aef1d1cd1349fff68a',
  measurementId: 'G-QW7SPC02M6',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

export {
  auth,
  googleAuthProvider,
  githubAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider,
};
