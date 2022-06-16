import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBIw9bnaTdDJcysdJZeMDg2QdLkQcn1PIs",
    authDomain: "dynamix360-users.firebaseapp.com",
    projectId: "dynamix360-users",
    storageBucket: "dynamix360-users.appspot.com",
    messagingSenderId: "551918715858",
    appId: "1:551918715858:web:f3daf4963d216b42a97e0b"
  };

  firebase.initializeApp(config);

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  function login() {
        return auth.signInWithPopup(provider);
  }

  function logout() {
        return auth.signOut();
  }

  export { auth, login, logout };