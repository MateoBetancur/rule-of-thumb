import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB0q4ELJIr5E8Y17JPfXivYG1eyRqHa2Ik",
  authDomain: "prueba-fa9f7.firebaseapp.com",
  databaseURL: "https://prueba-fa9f7.firebaseio.com",
  projectId: "prueba-fa9f7",
  storageBucket: "prueba-fa9f7.appspot.com",
  messagingSenderId: "1091002558839",
  appId: "1:1091002558839:web:74b1a04167ef9be9579972",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = {
  app,
  db,
};
