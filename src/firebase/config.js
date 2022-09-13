import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDSCwt6Mik_iRXKK0CG9hoyQG1CQZJp2yE",
    authDomain: "react-firebase-library-app.firebaseapp.com",
    projectId: "react-firebase-library-app",
    storageBucket: "react-firebase-library-app.appspot.com",
    messagingSenderId: "1096253305177",
    appId: "1:1096253305177:web:fafff2cd7f151a72dcdc48"
  };
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Initialize Firebase
initializeApp(firebaseConfig);

const db=getFirestore();

export{db}