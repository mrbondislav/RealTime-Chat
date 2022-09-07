import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDOUtG19d5KLkEzvVTxR6qNxiF7sXT45lE",
    authDomain: "just-chat-9b331.firebaseapp.com",
    projectId: "just-chat-9b331",
    storageBucket: "just-chat-9b331.appspot.com",
    messagingSenderId: "52133585206",
    appId: "1:52133585206:web:750485d21aeff29e5cd397"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();