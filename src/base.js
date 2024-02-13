
import firebase from "firebase/compat/app"
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAUa-axUC4j5HdIDWs0Ac7Jx6kggfWBuSs",
  authDomain: "paper-review-hub.firebaseapp.com",
  databaseURL: "https://paper-review-hub-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "paper-review-hub",
  storageBucket: "paper-review-hub.appspot.com",
  messagingSenderId: "343936763202",
  appId: "1:343936763202:web:25233d9988e4924c7574db"
};

export const app = firebase.initializeApp(firebaseConfig);