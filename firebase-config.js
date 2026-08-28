// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// 🔥 আপনার Firebase Console থেকে পাওয়া Config এখানে দিন
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const playersRef = ref(db, 'defaultPlayers');

// Realtime Database Sync for Hazari & Callbridge
export function syncDefaultPlayers() {
    onValue(playersRef, (snapshot) => {
        const data = snapshot.val();
        if (data && Array.isArray(data)) {
            // LocalStorage আপডেট করা হচ্ছে যেন অফলাইনেও ব্যাকআপ থাকে
            localStorage.setItem('presetPlayers', JSON.stringify(data));
            localStorage.setItem('playerNames', JSON.stringify(data));
        }
    });
}

export { db, playersRef, set, onValue };
