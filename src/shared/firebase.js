import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAhNj_1yx9TZXqE61irpE1GFGnE7xdFfF0",
  authDomain: "rweeeter.firebaseapp.com",
  projectId: "rweeeter",
  storageBucket: "rweeeter.appspot.com",
  messagingSenderId: "744093592076",
  appId: "1:744093592076:web:ceb58c4beaabce4c1a9c29",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const apiKey = firebaseConfig.apiKey;
export const firebaseAuth = firebase.auth();
export const firebaseStore = firebase.firestore();
export const firebaseStorage = firebase.storage();
