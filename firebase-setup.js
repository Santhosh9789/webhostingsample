// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdRzTjyVu7cwvhoUFTqZsLlRnmHx77t_0",
  authDomain: "fir-website-32e50.firebaseapp.com",
  projectId: "fir-website-32e50",
  storageBucket: "fir-website-32e50.appspot.com",
  messagingSenderId: "908676658823",
  appId: "1:908676658823:web:35d7f2a8e453f2cbe8ea22",
  measurementId: "G-XQKPYCL968"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("Firebase initialized successfully.");
