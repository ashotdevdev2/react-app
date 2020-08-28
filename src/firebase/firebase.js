import firebase from 'firebase/app'
import 'firebase/auth'

let firebaseConfig = {
    apiKey: "AIzaSyBCfGmF6u4T-2sDJ8A9H1SmR-upRTMQeao",
    authDomain: "react-app-207df.firebaseapp.com",
    databaseURL: "https://react-app-207df.firebaseio.com",
    projectId: "react-app-207df",
    storageBucket: "react-app-207df.appspot.com",
    messagingSenderId: "980288801424",
    appId: "1:980288801424:web:1bd2f1cc9171902c746615"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase