// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: `${process.env.apiKey}`,
    // authDomain: `${process.env.authDomain}`,
    // projectId: `${process.env.projectId}`,
    // storageBucket: `${process.env.storageBucket}`,
    // messagingSenderId: `${process.env.messagingSenderId}`,
    // appId: `${process.env.appId}`

    apiKey: "AIzaSyAk0eXY0AnA33TVyM0JfJaa-A_68HcGQz0",
    authDomain: "car-inventory-bfad1.firebaseapp.com",
    projectId: "car-inventory-bfad1",
    storageBucket: "car-inventory-bfad1.appspot.com",
    messagingSenderId: "253910798737",
    appId: "1:253910798737:web:6efe877b27d601620e8a30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;