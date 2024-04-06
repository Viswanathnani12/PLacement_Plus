// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMIrGLeVXdbl-l_92fVCGtBUDdx24_rSs",
  authDomain: "placement-plus.firebaseapp.com",
  projectId: "placement-plus",
  storageBucket: "placement-plus.appspot.com",
  messagingSenderId: "197096046251",
  appId: "1:197096046251:web:54f8761c1f93fd0565c1ee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getStorage(app);
