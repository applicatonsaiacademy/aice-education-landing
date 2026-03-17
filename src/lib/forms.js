import { collection, addDoc, getDocs, serverTimestamp, orderBy, query } from 'firebase/firestore'
import { db } from './firebase'

function ensureDb() {
  if (!db) throw new Error('Firebase not configured. Set VITE_FIREBASE_* env vars.')
  return db
}

const timeoutPromise = (ms) => new Promise((_, reject) => setTimeout(() => reject(new Error('Request timed out')), ms))

export const saveContact = async (payload) => {
  return Promise.race([
    addDoc(collection(ensureDb(), 'contacts'), { ...payload, createdAt: serverTimestamp() }),
    timeoutPromise(5000)
  ])
}

export const saveNewsletter = async (payload) => {
  return Promise.race([
    addDoc(collection(ensureDb(), 'newsletter'), { ...payload, createdAt: serverTimestamp() }),
    timeoutPromise(5000)
  ])
}

export const savePreEnroll = async (payload) => {
  return Promise.race([
    addDoc(collection(ensureDb(), 'preenroll'), { ...payload, createdAt: serverTimestamp() }),
    timeoutPromise(5000)
  ])
}

export const fetchCollection = async (colName) => {
  const q = query(collection(ensureDb(), colName), orderBy('createdAt', 'desc'))
  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => {
    const data = doc.data()
    return {
      id: doc.id,
      ...data,
      // Convert Firestore Timestamp to millis so new Date() works in the UI
      createdAt: data.createdAt?.toMillis ? data.createdAt.toMillis() : data.createdAt
    }
  })
}

export const saveBlogPost = (payload) =>
  addDoc(collection(ensureDb(), 'blog_posts'), { ...payload, createdAt: serverTimestamp() })
