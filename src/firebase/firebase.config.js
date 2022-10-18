// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgA8JiRRhE5Bh4BwbrovzfXzvA2Ok05Vk",
  authDomain: "news-portal-auth-63db3.firebaseapp.com",
  projectId: "news-portal-auth-63db3",
  storageBucket: "news-portal-auth-63db3.appspot.com",
  messagingSenderId: "655122236194",
  appId: "1:655122236194:web:53cde57b6259891ac2db7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;