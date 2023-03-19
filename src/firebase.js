
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCnAN3wS2dg4f5RhNfLgMBHmP5f8FZoZEs",
  authDomain: "chat-ccca9.firebaseapp.com",
  projectId: "chat-ccca9",
  storageBucket: "chat-ccca9.appspot.com",
  messagingSenderId: "896617426269",
  appId: "1:896617426269:web:a992a3b71de61fcd5bccb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth()
export  const storage = getStorage(app)
export const db = getFirestore()
