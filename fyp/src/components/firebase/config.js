// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANp2HlJ5cA_v4vh-2gHDF_JFmqSu2oZxo",
  authDomain: "eman-fyp-supervisor.firebaseapp.com",
  projectId: "eman-fyp-supervisor",
  storageBucket: "eman-fyp-supervisor.appspot.com",
  messagingSenderId: "264094175894",
  appId: "1:264094175894:web:f30550c7bc268953e2e8b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);