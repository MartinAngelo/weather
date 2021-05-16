import firebase from "firebase";


var firebaseConfig = {
    apiKey: "AIzaSyA0Z5V8vNUlso4BEF2Bq-4B-E562Uj0aLo",
    authDomain: "web-r-1454f.firebaseapp.com",
    projectId: "web-r-1454f",
    storageBucket: "web-r-1454f.appspot.com",
    messagingSenderId: "992052345659",
    appId: "1:992052345659:web:12c7b483b4754fdfc6d51e",
    measurementId: "G-03PLLTL4EK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  export default firebase;