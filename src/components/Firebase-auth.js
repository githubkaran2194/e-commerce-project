import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbX_Zdbfa0Dw3lab6tp1KGhRdxG4KJEM8",
  authDomain: "e-commerce-889c3.firebaseapp.com",
  databaseURL: "https://e-commerce-889c3-default-rtdb.firebaseio.com",
  projectId: "e-commerce-889c3",
  storageBucket: "e-commerce-889c3.appspot.com",
  messagingSenderId: "292186128845",
  appId: "1:292186128845:web:51c059bf23ca3bb10bc484",
  measurementId: "G-SLBYDLEXV0"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();

export{ app, auth };