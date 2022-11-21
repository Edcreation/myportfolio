import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpIUddnQ-hGgENajpAtXV-oydqTYmNgMU",
  authDomain: "portfolio-4f93d.firebaseapp.com",
  projectId: "portfolio-4f93d",
  storageBucket: "portfolio-4f93d.appspot.com",
  messagingSenderId: "8939273851",
  appId: "1:8939273851:web:af1eecfe8bd092be0cecde",
  measurementId: "G-E9PEPCW2Q6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    
  </React.StrictMode>
);
