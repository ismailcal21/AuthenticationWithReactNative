// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADTILb3V8jjOsFSo8hKN7N7UI2MwE0XrE",
  authDomain: "login-76bf0.firebaseapp.com",
  projectId: "login-76bf0",
  storageBucket: "login-76bf0.appspot.com",
  messagingSenderId: "33552380818",
  appId: "1:33552380818:web:ac339ee5a9cef22572874b",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
export { auth };
