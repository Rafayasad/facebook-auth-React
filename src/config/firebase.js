import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyCNOGNzu4Y7E8qfaVFBXP2lZjioEbn0nzI",
    authDomain: "facebook-auth-da98d.firebaseapp.com",
    projectId: "facebook-auth-da98d",
    storageBucket: "facebook-auth-da98d.appspot.com",
    messagingSenderId: "398145129598",
    appId: "1:398145129598:web:b0e94c277f1f0f52a45c2f",
    measurementId: "G-PV1C3NF9YN"
  };

var Firebase =  firebase.initializeApp(firebaseConfig); 
export default Firebase;