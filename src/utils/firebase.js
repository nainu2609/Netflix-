// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4-AusHZEiK84oh8dVssRVAzmmoHmH2AI",
  authDomain: "netflix-clone-104f9.firebaseapp.com",
  projectId: "netflix-clone-104f9",
  storageBucket: "netflix-clone-104f9.appspot.com",
  messagingSenderId: "541076591107",
  appId: "1:541076591107:web:fa62be0bd0fcc35dc5b436",
  measurementId: "G-ZZ8RXK597Q"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);