// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDybMMUIgYFYHQm-qRcf2l2uuzBpEBFbFA",
  authDomain: "netflix-clone-ff854.firebaseapp.com",
  projectId: "netflix-clone-ff854",
  storageBucket: "netflix-clone-ff854.appspot.com",
  messagingSenderId: "730114980762",
  appId: "1:730114980762:web:2551283f416505b733d823"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }