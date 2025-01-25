// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FBASE_PRID,
  storageBucket: process.env.NEXT_PUBLIC_FBASE_STB,
  messagingSenderId: process.env.NEXT_PUBLIC_FBASE_MSG_ID,
  appId: process.env.NEXT_PUBLIC_FBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app