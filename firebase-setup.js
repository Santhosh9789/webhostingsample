// Import required Firebase SDK components
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

// Your Firebase configuration
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
export const auth = getAuth(app); // Export the auth object to be used in firebase-auth.js
