// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyCXF86hq6KTBHRnfGEQ9th6gvfn_FtMq7E",
  authDomain: "newsfeed-847a5.firebaseapp.com",
  projectId: "newsfeed-847a5",
  storageBucket: "newsfeed-847a5.appspot.com",
  messagingSenderId: "291958451236",
  appId: "1:291958451236:web:cf59db78384a5d87463cb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const googleProvider=new GoogleAuthProvider()