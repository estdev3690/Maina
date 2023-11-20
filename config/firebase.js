// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoHn2Xe0E_LZUUVgdyKaTFS1xBOFtKIHg",
  authDomain: "chat-71091.firebaseapp.com",
  databaseURL: "https://chat-71091-default-rtdb.firebaseio.com",
  projectId: "chat-71091",
  storageBucket: "chat-71091.appspot.com",
  messagingSenderId: "853118320474",
  appId: "1:853118320474:web:5095d801609bc5418c7d63",
  measurementId: "G-BW813C5P87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);