import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9eT_SAMPLE_KEY_REPLACE_THIS",
  authDomain: "nojicam-app.firebaseapp.com",
  projectId: "nojicam-app",
  storageBucket: "nojicam-app.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abc123def456"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
