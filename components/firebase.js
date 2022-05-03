// Import the functions you need from the SDKs you need
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuKN_GhDJ7ZFiOlUAmae-63iS5iN6B5U4",
  authDomain: "fir-demo-713b2.firebaseapp.com",
  databaseURL: "https://fir-demo-713b2-default-rtdb.firebaseio.com",
  projectId: "fir-demo-713b2",
  storageBucket: "fir-demo-713b2.appspot.com",
  messagingSenderId: "222394900086",
  appId: "1:222394900086:web:42aec6073a1cbd9b6dc957"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
 const storage = getStorage(app);
 const database = getDatabase(app);
const db = getFirestore(app);
 export {storage,database,db}