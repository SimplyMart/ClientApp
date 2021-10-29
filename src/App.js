import React, { useEffect, useContext } from 'react';
import { auth } from './firebase/firebase.config';
import 'firebase/firestore';
import './App.css';
import { ClientContext } from './context';
// import { Switch, Route, Link } from 'react-router-dom';

function App() {
  const context = useContext(ClientContext);
  const {
    user,
    setUser,
    initializing,
    setInitializing,
    signInWithGoogle,
    signOutUser,
  } = context;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
      if (initializing) {
        setInitializing(false);
      }
    });

    return unsubscribe;
//eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      {!user ? (
        <button
          onClick={async () => {
            await signInWithGoogle();
          }}
        >
          Sign in
        </button>
      ) : (
        <button
          onClick={async () => {
            await signOutUser();
          }}
        >
          Sign out
        </button>
      )}
    </div>
  );
}

export default App;
