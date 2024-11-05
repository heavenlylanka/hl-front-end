import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCT7PhQfZ6hRTIWRGPlv2cEcSIVW4d1hHc",
    authDomain: "heavenlylanka-7a761.firebaseapp.com",
    projectId: "heavenlylanka-7a761",
    storageBucket: "heavenlylanka-7a761.appspot.com",
    messagingSenderId: "182862528865",
    appId: "1:182862528865:web:9e5eac5417a01fb8f60520"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
