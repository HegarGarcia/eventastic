import React, { createContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import config from '../constants/firebaseConfig';

const app = firebase.initializeApp(config);

export const FirebaseContext = createContext({
  firestore: app.firestore(),
  auth: app.auth(),
  storage: app.storage()
});

const FirebaseProvider = ({ children }) => (
  <FirebaseContext.Provider
    value={{
      firestore: app.firestore(),
      auth: app.auth(),
      storage: app.storage()
    }}
  >
    {children}
  </FirebaseContext.Provider>
);

export default FirebaseProvider;
