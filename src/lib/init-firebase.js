// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXPGwv7G16LL3ntjHlXvHTvD-T4nPMHHk",
  authDomain: "crud-with-firebasedb.firebaseapp.com",
  projectId: "crud-with-firebasedb",
  storageBucket: "crud-with-firebasedb.appspot.com",
  messagingSenderId: "587372292160",
  appId: "1:587372292160:web:aaea189bd87e57db4c97a5",
  measurementId: "G-YRZJ0DVE9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize db
export const db = getFirestore(app)