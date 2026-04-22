import { initializeApp, getApps, getApp } from 'firebase/app';

export const firebaseConfig = {
  projectId: 'go4garage-d66fc',
  appId: '1:36448236878:web:24aed293ba5dc7f2c41a1f',
  storageBucket: 'go4garage-d66fc.firebasestorage.app',
  apiKey: 'AIzaSyDDL2m8f3cTuzlTBWRONpzp2p65qE8WLbw',
  authDomain: 'go4garage-d66fc.firebaseapp.com',
  messagingSenderId: '36448236878',
  measurementId: 'G-KJ9Z06N7N5',
};

export const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
