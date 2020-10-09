import firebase from "firebase"

const firebaseAPP=firebase.initializeApp({
    apiKey: "AIzaSyBSo7vgGi-wERFupJ0YSTkB_u-r7dbLbKg",
  authDomain: "clone-792cb.firebaseapp.com",
  databaseURL: "https://clone-792cb.firebaseio.com",
  projectId: "clone-792cb",
  storageBucket: "clone-792cb.appspot.com",
  messagingSenderId: "649532260720",
  appId: "1:649532260720:web:4b7f5e20cccdddb4d8cfb5",
  measurementId: "G-N6WZ3GR9EG"
});

const db=firebaseAPP.firestore();

const auth=firebase.auth();

export{db,auth};
