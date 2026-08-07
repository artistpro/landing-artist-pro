/// <reference types="vite/client" />
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDoZhMqoi5QOyIByCFO3zJf1NYHkEOFnk4",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "artistpro-co.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "artistpro-co",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "artistpro-co.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "735007369456",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:735007369456:web:856574444f7dc43be0fa35",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
