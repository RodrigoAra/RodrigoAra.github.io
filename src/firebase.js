import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signInAnonymously } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js';
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js' ; 


const firebaseConfig = {
  apiKey: "AIzaSyDIyuPRVnNheD_PyELyQceaLF1hLa6bkC0",
  authDomain: "multiplayer-website-ra.firebaseapp.com",
  databaseURL: "https://multiplayer-website-ra-default-rtdb.firebaseio.com",
  projectId: "multiplayer-website-ra",
  storageBucket: "multiplayer-website-ra.firebasestorage.app",
  messagingSenderId: "1096650742344",
  appId: "1:1096650742344:web:561b68cceec9dd4b4fd67d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase(app);

export { app , auth, db, onAuthStateChanged, signInAnonymously, ref, set }; 
