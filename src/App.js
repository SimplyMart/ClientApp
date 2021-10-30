import React, { useEffect, useContext } from 'react';
import { auth } from './firebase/firebase.config';
import 'firebase/firestore';
import './App.css';
import { ClientContext } from './context';
import LoginPage from './routes/login';
import BottomNavBar from './components/bottomNavBar';
import ScanQRCode from './routes/scanQR';
import { Switch, Route } from 'react-router-dom';

function App() {
  const context = useContext(ClientContext);
  const {
    user,
    setUser,
    initializing,
    setInitializing,
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
        <LoginPage />
      ) : (
        <div>
          {/* <button
            onClick={async () => {
              await signOutUser();
            }}
          >
            Sign out
          </button> */}
          <Switch>
            <Route exact path="/scanQr" component={ScanQRCode} />
          </Switch>
          <BottomNavBar />
        </div>
      )}
    </div>
  );
}

export default App;
