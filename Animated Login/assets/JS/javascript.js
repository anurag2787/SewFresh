import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAm1NeyUemiarmola0FBpqkpGzm7dGiwvY",
  authDomain: "hof-login-page.firebaseapp.com",
  projectId: "hof-login-page",
  storageBucket: "hof-login-page.appspot.com",
  messagingSenderId: "776320479505",
  appId: "1:776320479505:web:ac4b669fb2a15f6fc75cb0",
  measurementId: "G-PX2R8Z79WL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const googleLoginButtons = document.querySelectorAll('.social');

googleLoginButtons.forEach(button => {
  button.addEventListener("click", async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google sign-in successful:", user);
      alert("Login successful!");
      window.location.href = '/SewFresh-HOF/index.html';
    } catch (error) {
      console.error("Google sign-in error:", error.message);
      alert("Google sign-in failed. Please try again.");
    }
  });
});

const signUpForm = document.getElementById('signup-form');

signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signUpForm.querySelector("#signup-email").value;
  const password = signUpForm.querySelector("#signup-password").value;
  
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    signUpForm.reset();
    console.log("User signed up:", user);
    alert("Thank you for signing up");
    window.location.href = '/SewFresh-HOF/index.html';
  } catch (error) {
    console.error("Error signing up:", error.message);
    alert("Facing some difficulties, please try again.");
  }
});

const signInForm = document.getElementById('signin-form');

signInForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signInForm.querySelector("#signin-email").value;
  const password = signInForm.querySelector("#signin-password").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    signInForm.reset();
    console.log("User signed in:", user);
    alert("Logged in successfully!");
    window.location.href = '/SewFresh-HOF/index.html';
  } catch (error) {
    console.error("Error signing in:", error.message);
    alert("Invalid email or password. Please try again.");
  }
});
