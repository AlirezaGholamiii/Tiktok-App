// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCwZL089SgmzKcnXkzct61sOgfXi0ByJfQ",
    authDomain: "tiktok-clone-5ccc4.firebaseapp.com",
    projectId: "tiktok-clone-5ccc4",
    storageBucket: "tiktok-clone-5ccc4.appspot.com",
    messagingSenderId: "1063249318927",
    appId: "1:1063249318927:web:3feed808438847eec23f7a",
    measurementId: "G-XGCY4TXK6L"
  };

  const firebaseapp =
  firebase.initializeApp(firebaseConfig);


  const db = firebaseapp.firestore();

  export default db;