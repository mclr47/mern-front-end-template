import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// 
// import * as firebase from "firebase/app";

// import 'firebase/firebase-analytics';
// import 'firebase';
// import 'firebase/auth';
// import {initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firebaseapp.js'
// import * as fb_analitics from 'firebase/analytics';
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need

 import {initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTnQhC9DnXTpKEVBPQ4MinC0lZNc33Kz4",
  authDomain: "photo-sharing-app-52d3e.firebaseapp.com",
  projectId: "photo-sharing-app-52d3e",
  storageBucket: "photo-sharing-app-52d3e.appspot.com",
  messagingSenderId: "470664352445",
  appId: "1:470664352445:web:a29bb5abd0a80e22629dd4"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 console.log(app.name);

     

// 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
