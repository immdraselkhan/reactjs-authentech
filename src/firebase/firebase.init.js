// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlbrvZWwaxRVZ9oWLItTFXs8WEt7CQaIk",
  authDomain: "reactjs-authentech.firebaseapp.com",
  projectId: "reactjs-authentech",
  storageBucket: "reactjs-authentech.appspot.com",
  messagingSenderId: "292837699323",
  appId: "1:292837699323:web:1423b9b1f83b64bd238a5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the app
export default app;