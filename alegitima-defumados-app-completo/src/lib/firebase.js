import { initializeApp } from 'firebase/app'
import { getAuth, setPersistence, browserLocalPersistence, sendPasswordResetEmail } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Preencha com .env da Vercel (recomendado) ou direto aqui para testes locais
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'SUA_API_KEY',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'SEU_AUTH_DOMAIN',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'SEU_PROJECT_ID',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'SEU_STORAGE_BUCKET',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || 'SEU_SENDER_ID',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || 'SEU_APP_ID',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)
// Remember me
setPersistence(auth, browserLocalPersistence)
// Reset password helper
export const resetPassword = (email) => sendPasswordResetEmail(auth, email)
