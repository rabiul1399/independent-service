// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1XFsvJ42ie-yJPhtScmclgNmdoKowAxg",
  authDomain: "assignment-ten-fireauth.firebaseapp.com",
  projectId: "assignment-ten-fireauth",
  storageBucket: "assignment-ten-fireauth.appspot.com",
  messagingSenderId: "937770083880",
  appId: "1:937770083880:web:76c302ccec637c3860b71d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;