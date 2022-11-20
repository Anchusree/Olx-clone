import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdyIfWzSgfRX3Ern6Nkdqxmzt_AnwD2cM",
  authDomain: "olxproject-3482d.firebaseapp.com",
  projectId: "olxproject-3482d",
  storageBucket: "olxproject-3482d.appspot.com",
  messagingSenderId: "221675229125",
  appId: "1:221675229125:web:3540b1bbc9fcbe484d05ac",
  measurementId: "G-Y5LGERBZ96"
};

  export default firebase.initializeApp(firebaseConfig)
