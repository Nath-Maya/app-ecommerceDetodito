import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID
} from '@env';

// const firebaseConfig = {
//   apiKey: "AIzaSyCijBQ6hvLBe1HBLgtpYjkjkYrMmC5PyDk",
//   authDomain: "ecommersedetodito.firebaseapp.com",
//   databaseURL: "https://ecommersedetodito-default-rtdb.firebaseio.com",
//   projectId: "ecommersedetodito",
//   storageBucket: "ecommersedetodito.appspot.com",
//   messagingSenderId: "802460070875",
//   appId: "1:802460070875:web:f1663d5f5ab2da4accedfe"
// };

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

  const databaseURL = firebaseConfig.databaseURL;

  export { auth, databaseURL };