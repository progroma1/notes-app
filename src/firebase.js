import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB3ReM_QhFAT2F3GQFe9WB6NXwIDpgaq_8",
  authDomain: "apple-notes-demo.firebaseapp.com",
  projectId: "apple-notes-demo",
  storageBucket: "apple-notes-demo.appspot.com",
  messagingSenderId: "469273745550",
  appId: "1:469273745550:web:3a14d6efb4b6c0495991df"
}
firebase.default.initializeApp(firebaseConfig);


export default firebase;