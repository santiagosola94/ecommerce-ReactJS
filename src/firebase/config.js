// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAadXIKdK1IsZNd3_wJRgHHxaQpDtiDi4g",
    authDomain: "ecommerce-sola-santiago.firebaseapp.com",
    projectId: "ecommerce-sola-santiago",
    storageBucket: "ecommerce-sola-santiago.appspot.com",
    messagingSenderId: "965995979166",
    appId: "1:965995979166:web:c6b139039e36410cf9368f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = ()=> {
    return app
}