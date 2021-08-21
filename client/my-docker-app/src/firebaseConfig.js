import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA4w2ra7kDQl682CSlQ7gt1ypPtYF8ChCw",
    authDomain: "cook-book-v0.firebaseapp.com",
    databaseURL: "https://cook-book-v0-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "cook-book-v0",
    storageBucket: "cook-book-v0.appspot.com",
    messagingSenderId: "603396570963",
    appId: "1:603396570963:web:3d0031bf9d6bb882756ba6"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase