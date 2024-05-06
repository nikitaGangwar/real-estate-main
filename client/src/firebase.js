// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: "real-estate-system-e4456.firebaseapp.com",
//   projectId: "real-estate-system-e4456",
//   storageBucket: "real-estate-system-e4456.appspot.com",
//   messagingSenderId: "407465684304",
//   appId: "1:407465684304:web:39490114bb92c86e939055"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-system-6ed45.firebaseapp.com",
  projectId: "real-estate-system-6ed45",
  storageBucket: "real-estate-system-6ed45.appspot.com",
  messagingSenderId: "309490573983",
  appId: "1:309490573983:web:a93267a4bdb0a05e2878aa",
  measurementId: "G-7SG72TC1YG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);