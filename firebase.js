/*
 * Copyright (c) 2023 Hoàng Trung Công <https://github.com/trungcong1999>
 *
 * Created Date: Tuesday, April 11th 2023, 5:10:58 pm
 * Author: Hoàng Trung Công
 *
 */

import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDmOttkRbwcmmjXC_5TvYH-MonSxGktkIY",
  authDomain: "react-native-uber-203ed.firebaseapp.com",
  projectId: "react-native-uber-203ed",
  storageBucket: "react-native-uber-203ed.appspot.com",
  messagingSenderId: "308192793220",
  appId: "1:308192793220:web:d01daf3b681deb1765a8d1",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();

export { db, firebase };

