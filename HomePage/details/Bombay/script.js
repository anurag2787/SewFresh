// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

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


const main = document.querySelector('.main');
// Function to fetch data
function fetchData() {
  console.log("Clicked")
    const tailorRef = ref(db, 'bombay');
    

    get(tailorRef).then((snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            main.innerHTML = '';  // Clear the container before adding new content
            Object.entries(data).forEach(([key, tailor]) => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <div class="image">
                        <img src="${tailor.image_link}">
                    </div>
                    <div class="title">
                        <h1>${tailor.name}</h1>
                        <div class="star">${tailor.rating} <span class="star-col">&#9733;</span></div>
                    </div>
                    <div class="des">
                        <p>${tailor.location}</p>
                        <button class="explore-btn">Explore</button>
                    </div>
                `;
                main.appendChild(card);

                const button = card.querySelector('.explore-btn');
                button.addEventListener('click', () => showAbout(tailor));
            });
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error("Error fetching data:", error);
    });
}

// Function to show about tailor
function showAbout(tailor) {
    // const aboutContainer = document.querySelector('.container');
    // const main = document.querySelector('.main');
    // main.style.display = 'none'; // Optionally hide the main content
    main.innerHTML = `
        <div class="container8">
            <div class="img8">
                <img src="${tailor.image_link}" alt="${tailor.name}">
            </div>
            <div class="product-description">
                <h1>${tailor.name}</h1>
                <span>${tailor.location}</span>
                <p>${tailor.about}</p>
                <div class="rating-container">
                    <div class="rating-number">${tailor.rating} &#9733;</div> 
                </div>
                <div class="product-price">
                <a href="../Book here/index.html" class="cart-btn">BOOK NOW</a>
                    <button onclick="fetchData()" id="goback" class="cart-btn">Click Here to Go Back</button>
                    
                </div>
            </div>
        </div>
    `;
    document.getElementById('goback').addEventListener('click', fetchData);
    // main.appendChild(card);

    //             const button2 = card.querySelector('#goback');
    //             button2.addEventListener('click', () => fetchData());
    //         ;
}

// Call the function to fetch data
fetchData();
