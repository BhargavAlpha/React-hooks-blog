
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDGOYzmPfkrbKTa3cTrdngCsPNmsmLAMeo",
  authDomain: "react-hooks-blog-5a94b.firebaseapp.com",
  projectId: "react-hooks-blog-5a94b",
  storageBucket: "react-hooks-blog-5a94b.appspot.com",
  messagingSenderId: "582704608963",
  appId: "1:582704608963:web:2d177cd63320cf6fc5d476"
};
const app=initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export {firestore};