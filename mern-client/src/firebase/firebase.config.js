// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5uehsEdzu-ng0z_oERbk2GNJ95SknmRo",
  authDomain: "new-online-book-store.firebaseapp.com",
  projectId: "new-online-book-store",
  storageBucket: "new-online-book-store.firebasestorage.app",
  messagingSenderId: "867617329850",
  appId: "1:867617329850:web:11221d4fd89888e78fe883"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;