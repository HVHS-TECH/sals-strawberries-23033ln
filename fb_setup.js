

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzQQ8komMarLvt7aXfGeTe1n0ahmJbYHs",
  authDomain: "sals-strawberries.firebaseapp.com",
  databaseURL: "https://sals-strawberries-default-rtdb.firebaseio.com",
  projectId: "sals-strawberries",
  storageBucket: "sals-strawberries.firebasestorage.app",
  messagingSenderId: "382420512161",
  appId: "1:382420512161:web:27161af6a5044c988f6fe0",
  measurementId: "G-NMHST4C3FH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);