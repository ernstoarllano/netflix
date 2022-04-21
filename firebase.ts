// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDmn9E8R6TXf5iGvxtd_JvHPOPt7NnM90",
  authDomain: "netflix-41188.firebaseapp.com",
  projectId: "netflix-41188",
  storageBucket: "netflix-41188.appspot.com",
  messagingSenderId: "376914705023",
  appId: "1:376914705023:web:243029388e53be7c999d4a",
  measurementId: "G-C7XF2E40K3"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { db, auth }