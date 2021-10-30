import React, { useEffect, useContext } from "react";
import { auth, createUserProfileDocument } from "./firebase/firebase.config";
import { onSnapshot } from "firebase/firestore";
import "./App.css";
import { ClientContext } from "./context";
import LoginPage from "./routes/login";
import BottomNavBar from "./components/bottomNavBar";
import ScanQRCode from "./routes/scanQR";
import Profile from "./routes/profile";
import Cart from "./routes/cart";
import LoadingPage from "./routes/loading";
import { Switch, Route } from "react-router-dom";
import Home from "./routes/home";

function App() {
  const context = useContext(ClientContext);
  const { user, setUser, initializing, setInitializing } = context;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);

        onSnapshot(userRef, (snapShot) => {
          setUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
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
      {initializing ? (
        <LoadingPage />
      ) : !user ? (
        <LoginPage />
      ) : (
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/scanQr" component={ScanQRCode} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
          <BottomNavBar />
        </div>
      )}
    </div>
  );
}

export default App;
