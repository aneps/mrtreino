import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC--dYhz-d401bJcGRqukK9kpsbEUyJFm0",
  authDomain: "mrtreino.firebaseapp.com",
  projectId: "mrtreino",
  storageBucket: "mrtreino.firebasestorage.app",
  messagingSenderId: "403372293284",
  appId: "1:403372293284:web:06aaebc5ed2a043f6a3a31",
  measurementId: "G-J9K4P78M5V",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
