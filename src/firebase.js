// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAiW1U-SYvmXMr2N51NNVxWhnj1ShKD5fs",
  authDomain: "dashboard-ad9ce.firebaseapp.com",
  projectId: "dashboard-ad9ce",
  storageBucket: "dashboard-ad9ce.firebasestorage.app",
  messagingSenderId: "71341671567",
  appId: "1:71341671567:web:78befddf1b2a2293779cfa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase Auth
export const auth = getAuth(app);
