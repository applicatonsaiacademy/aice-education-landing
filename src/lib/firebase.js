import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'

// Read config from environment variables (set in .env.local or deployment env)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
}

const hasConfig = Object.values(firebaseConfig).every(Boolean)

let db = null
let analytics = null
let auth = null

if (hasConfig) {
  const app = initializeApp(firebaseConfig)
  db = getFirestore(app)
  auth = getAuth(app)
  if (typeof window !== 'undefined') {
    analytics = getAnalytics(app)
  }
} else {
  if (import.meta.env.DEV) {
    console.warn('Firebase config missing. Set VITE_FIREBASE_* env vars to enable form submissions.')
  }
}

export { db, analytics, auth }
