// firebase-config.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, Auth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXR_LbeYcL6mIaXa3JB4weoiscC03UdHg",
  authDomain: "blood-cap.firebaseapp.com",
  databaseURL: "https://blood-cap-default-rtdb.firebaseio.com/",
  projectId: "blood-cap",
  storageBucket: "blood-cap.appspot.com",
  messagingSenderId: "470521911608",
  appId: "1:470521911608:web:5467de4abb5124839509cd",
  measurementId: "G-SN2CNL5PN3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth: Auth = getAuth(app);
const database = getDatabase(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

// Export Firebase services
export { app, analytics, auth, database, firestore as db, storage };

// Export authentication functions
export { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
