import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu30PxMT5OAqNi8Ue7yjffm-vKhTu6WYs",
  authDomain: "kisac-live-production.firebaseapp.com",
  projectId: "kisac-live-production",
  storageBucket: "kisac-live-production.appspot.com",
  messagingSenderId: "812217665656",
  appId: "1:812217665656:web:761499604f7b8e7a50858d",
  measurementId: "G-317TFV14H0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app)

export { app, auth , db};
