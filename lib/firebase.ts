import { initializeApp, getApps } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDDL2m8f3cTuzlTBWRONpzp2p65qE8WLbw",
  authDomain: "go4garage-d66fc.firebaseapp.com",
  projectId: "go4garage-d66fc",
  storageBucket: "go4garage-d66fc.firebasestorage.app",
  messagingSenderId: "695062682562",
  appId: "1:695062682562:web:f4c0b7e9925f5a8b9a93f6",
  measurementId: "G-F2WTHD61QR"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Analytics only on client side
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, analytics };
