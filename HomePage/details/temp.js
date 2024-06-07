// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10..0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPn27voVatozKjKMfqY2aFskpXmqQP7iw",
    authDomain: "sew-fresh.firebaseapp.com",
    databaseURL: "https://sew-fresh-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "sew-fresh",
    storageBucket: "sew-fresh.appspot.com",
    messagingSenderId: "57985795537",
    appId: "1:57985795537:web:de88fc3ba56579818e4cf0"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Function to fetch data
function fetchData() {
  // Reference to the root of your database or to the specific node where your data is stored
  const dataRef = ref(db);

  // Fetch the data
  get(dataRef).then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      console.log("Data retrieved:", data);
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error("Error fetching data:", error);
  });
}

// Call the function to fetch data
fetchData();


