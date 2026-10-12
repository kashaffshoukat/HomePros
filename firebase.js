const firebaseConfig = {
  apiKey: "AIzaSyCYkTWPI0ZOANABsfK00sZ3XrUGLKY7nzo",
  authDomain: "home-pros-cayman.firebaseapp.com",
  projectId: "home-pros-cayman",
  storageBucket: "home-pros-cayman.firebasestorage.app",
  messagingSenderId: "887374316972",
  appId: "1:887374316972:web:dd7c7ec6a72dc2a52fa609",
  measurementId: "G-1LF1M9WXY1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();