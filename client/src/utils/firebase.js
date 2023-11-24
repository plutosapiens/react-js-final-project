// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmi4oLTUzkizqoBoO2oFkSH_4YdSVQP3M",
  authDomain: "pluto-s-react-project.firebaseapp.com",
  databaseURL: "https://pluto-s-react-project-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pluto-s-react-project",
  storageBucket: "pluto-s-react-project.appspot.com",
  messagingSenderId: "115412208327",
  appId: "1:115412208327:web:bdefe419da520e1f7bcce2",
  measurementId: "G-Q0GR4MMY3N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);