import { initializeApp } from "firebase/app";

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