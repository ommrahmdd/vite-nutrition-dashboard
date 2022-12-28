import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDmaO6GmQ9Ph3R5wt8b-19Jbbfauyx_A-k",
  authDomain: "vital-nutrition.firebaseapp.com",
  projectId: "vital-nutrition",
  storageBucket: "vital-nutrition.appspot.com",
  messagingSenderId: "767775867401",
  appId: "1:767775867401:web:c70011cbafe36e3a696ed8",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
