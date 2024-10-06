import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

// Initialize Firebase Auth
const auth = getAuth();

// Sign Up Function
function signup() {
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up successfully
            alert("Sign-up successful!");
            // Optionally redirect to another page
            // window.location.href = "your_redirect_page.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            document.getElementById('signupError').textContent = errorMessage;
        });
}

// Login Function
function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Logged in successfully
            alert("Login successful!");
            // Optionally redirect to another page
            // window.location.href = "your_redirect_page.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            document.getElementById('loginError').textContent = errorMessage;
        });
}
