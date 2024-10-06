import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign Up Function
window.signup = function() {
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Sign-up successful!");
            document.getElementById('signupForm').reset();
        })
        .catch((error) => {
            document.getElementById('signupError').textContent = error.message;
        });
};

// Login Function
window.login = function() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Login successful!");
            document.getElementById('loginForm').reset();
            document.getElementById('logoutButton').style.display = 'block';
        })
        .catch((error) => {
            document.getElementById('loginError').textContent = error.message;
        });
};

// Logout Function
window.logout = function() {
    signOut(auth).then(() => {
        alert("Logged out successfully!");
        document.getElementById('logoutButton').style.display = 'none';
    }).catch((error) => {
        console.error("Error logging out:", error);
    });
};
