// আপনার আসল Firebase কনফিগারেশন
const firebaseConfig = {
    apiKey: "AIzaSyAlsMQq44ZX02PxFaALyFwxHlpGhxDqQhw",
    authDomain: "hatiara-33.firebaseapp.com",
    databaseURL: "https://hatiara-33-default-rtdb.firebaseio.com",
    projectId: "hatiara-33",
    storageBucket: "hatiara-33.firebasestorage.app",
    messagingSenderId: "80134570368",
    appId: "1:80134570368:web:78498e9651db7807b78165",
    measurementId: "G-0MKT8Z1MM6"
};

// Firebase ইনিশিয়ালাইজেশন
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Firestore ডেটাবেস ইনিশিয়ালাইজেশন
const db = firebase.firestore();
