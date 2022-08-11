import firebase from 'firebase/app'
import 'firebase/firestore'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrmw0_9m8BB6IKh1ZsfD6DqTQA9KqFVzc",
  authDomain: "todo-app-18820.firebaseapp.com",
  projectId: "todo-app-18820",
  storageBucket: "todo-app-18820.appspot.com",
  messagingSenderId: "846545099579",
  appId: "1:846545099579:web:7d76325110f8604b24b51e"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig)

export default firebase