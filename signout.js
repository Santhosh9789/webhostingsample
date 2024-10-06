import { signOut } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

function logout() {
    signOut(auth).then(() => {
        alert("Logged out successfully!");
        // Optionally redirect to the login page
        // window.location.href = "login.html";
    }).catch((error) => {
        console.error("Error logging out:", error);
    });
}
