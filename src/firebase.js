// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDPY9Na_um_TxR9sGVv69Z-5R1FAzMHVOQ",
  authDomain: "enveus-maps.firebaseapp.com",
  databaseURL: "https://enveus-maps.firebaseio.com",
  projectId: "enveus-maps",
  storageBucket: "enveus-maps.appspot.com",
  messagingSenderId: "1006440007613",
  appId: "1:1006440007613:web:9a83734b525b0e1955b4d4",
  measurementId: "G-RJ8V2G5GJR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const Auth = firebase.auth();
export const DB = firebase.firestore();
export const Storage = firebase.storage();
export const MapRef = Storage.refFromURL('gs://enveus-maps.appspot.com/map.png');

// store hookup
import { icons, landmarks } from './stores';

DB.collection('icons').onSnapshot((snapshot) => {
  icons.set(snapshot.docs.map(doc => doc.data()));
});

DB.collection('landmarks').onSnapshot((snapshot) => {
  landmarks.set(snapshot.docs.map(doc => doc.data()));
});