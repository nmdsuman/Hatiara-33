// Firebase কনফিগারেশন
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Firebase ইনিশিয়ালাইজেশন
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Firestore ডেটাবেস ইনিশিয়ালাইজেশন
const db = firebase.firestore();

// ১. Firestore-এ প্লেয়ারের নাম সেভ (Write) করার ফাংশন
function savePlayerNamesToFirestore(namesArray) {
    if (!namesArray || namesArray.length === 0) return;

    db.collection("gameData").doc("players").set({
        names: namesArray,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        console.log("Firestore-এ নাম সেভ হয়েছে!");
    })
    .catch((error) => {
        console.error("নাম সেভ করতে ভুল হয়েছে: ", error);
    });
}

// ২. Firestore থেকে লাইভ নাম পড়ার (Read / Real-time Sync) ফাংশন
function listenToPlayerNames(callback) {
    db.collection("gameData").doc("players")
    .onSnapshot((doc) => {
        if (doc.exists) {
            const data = doc.data();
            if (data && data.names) {
                console.log("Firestore থেকে প্রাপ্ত নাম:", data.names);
                if (callback) callback(data.names);
            }
        }
    }, (error) => {
        console.error("Firestore থেকে নাম আনতে সমস্যা: ", error);
    });
}
