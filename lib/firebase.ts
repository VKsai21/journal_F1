import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIy9_XF79-612wLnUSxmCId23llbf6_fc",
  authDomain: "journal-f4237.firebaseapp.com",
  databaseURL: "https://journal-f4237-default-rtdb.firebaseio.com",
  projectId: "journal-f4237",
  storageBucket: "journal-f4237.firebasestorage.app",
  messagingSenderId: "163134458727",
  appId: "1:163134458727:web:2e2b34638314ac49c57dc2",
};

export const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);

export const auth = getAuth(app);