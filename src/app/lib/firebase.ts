import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// isi konfigurasi sesuai dengan konfigurasi firebase kalian
const firebaseConfig = {
    apiKey: "AIzaSyApxIVWvtcXfgaTEzqILAyWY1LOgBFBjXM",
    authDomain: "todolist-11cf1.firebaseapp.com",
    projectId: "todolist-11cf1",
    storageBucket: "todolist-11cf1.firebasestorage.app",
    messagingSenderId: "185537959331",
    appId: "1:185537959331:web:66aea4fb92aaa120487616"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }
