import React from "react";
import FirebaseProvider from "./context/firebase";

const App = () => {
  return (
    <FirebaseProvider>
      <h1>App</h1>
    </FirebaseProvider>
  );
};

export default App;
