// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJtN16ydFgAG3sM93lq2pwTcRGKCCbpwA",
  authDomain: "task-manager-f118f.firebaseapp.com",
  projectId: "task-manager-f118f",
  storageBucket: "task-manager-f118f.appspot.com",
  messagingSenderId: "164182855565",
  appId: "1:164182855565:web:71059605c13967899877c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
