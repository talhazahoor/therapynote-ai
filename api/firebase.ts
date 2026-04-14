import { initializeApp } from 'firebase/app';

const firebaseApiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

if (!firebaseApiKey) {
  throw new Error('Firebase API key is required');
}

const firebaseApp = initializeApp({
  apiKey: firebaseApiKey,
});

export default firebaseApp;