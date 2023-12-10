import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxhDhyNbvepE41xPAAgxRlZGyeTbaP23E",
  authDomain: "fir-auth-2194.firebaseapp.com",
  projectId: "fir-auth-2194",
  storageBucket: "fir-auth-2194.appspot.com",
  messagingSenderId: "65770351402",
  appId: "  1:65770351402:web:05839932f9bbfe14098c53",
  measurementId: "G-RSZ0DDQ9MY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export{ app, auth };