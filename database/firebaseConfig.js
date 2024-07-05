import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
  apiKey: "AIzaSyCijBQ6hvLBe1HBLgtpYjkjkYrMmC5PyDk",
  authDomain: "ecommersedetodito.firebaseapp.com",
  databaseURL: "https://ecommersedetodito-default-rtdb.firebaseio.com",
  projectId: "ecommersedetodito",
  storageBucket: "ecommersedetodito.appspot.com",
  messagingSenderId: "802460070875",
  appId: "1:802460070875:web:f1663d5f5ab2da4accedfe"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

  const databaseURL = firebaseConfig.databaseURL;

  export { auth, databaseURL };