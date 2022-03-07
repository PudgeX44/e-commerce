import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1rWqFYZUUWpzl7p5m_HhbVHoNSjvuEH4",
  authDomain: "e-commerce-pudge.firebaseapp.com",
  projectId: "e-commerce-pudge",
  storageBucket: "e-commerce-pudge.appspot.com",
  messagingSenderId: "712359382086",
  appId: "1:712359382086:web:6ccfd79394945b1edace47",
  measurementId: "G-RGZ7PVCCTH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
