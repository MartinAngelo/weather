import firebase from "firebase";


var firebaseConfig = {
    apiKey: "AIzaSyCG_biTOWAbaBronfDm--2ESBI54tNApW8",
    authDomain: "weather-6114d.firebaseapp.com",
    projectId: "weather-6114d",
    storageBucket: "weather-6114d.appspot.com",
    messagingSenderId: "747078155804",
    appId: "1:747078155804:web:1706d81c86ec89ec5369d9",
    measurementId: "G-EEXGRFV8MS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase;


