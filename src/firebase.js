// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";

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

// Firebase declarations
export const Auth = firebase.auth();
export const DB = firebase.firestore();
export const Storage = firebase.storage();
export const MapRef = Storage.refFromURL('gs://enveus-maps.appspot.com/map.png');

// Collections
export const Icons = DB.collection('icons');
export const Landmarks = DB.collection('landmarks');
export const TempUsers = DB.collection('tempUsers');

// store hookup
import { icons, landmarks, tempUsers } from './stores';

const getDataFromDoc = doc => doc.data();
const getDataFromSnapshot = snapshot => snapshot.docs.map(getDataFromDoc);

Icons.onSnapshot((snapshot) => {
  icons.set(snapshot.docs.map(doc => doc.data()));
});

Landmarks.onSnapshot((snapshot) => {
  landmarks.set(snapshot.docs.map(doc => doc.data()));
});

TempUsers.onSnapshot((snapshot) => {
  tempUsers.set(getDataFromSnapshot(snapshot));
});

export const Functions = {
  addTempUser: firebase.functions().httpsCallable('addTempUser'),
}