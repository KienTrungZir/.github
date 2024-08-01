// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdkuu_tnTUlTpVzIa9OwETkf6z9ccPzXo",
  authDomain: "myapp-b461f.firebaseapp.com",
  databaseURL: "https://myapp-b461f-default-rtdb.firebaseio.com",
  projectId: "myapp-b461f",
  storageBucket: "myapp-b461f.appspot.com",
  messagingSenderId: "666418190235",
  appId: "1:666418190235:web:1dfbe8e9b6a30f6877733e",
  measurementId: "G-LTBSG684GX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);