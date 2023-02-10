import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDh-PYBa4g5R9TvdkFy-fk8YD1w4s3OE2k",
  authDomain: "movieflix-b947b.firebaseapp.com",
  projectId: "movieflix-b947b",
  storageBucket: "movieflix-b947b.appspot.com",
  messagingSenderId: "342868440305",
  appId: "1:342868440305:web:4c6bc72ec06f88c02d2550"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore()

export { auth, db }