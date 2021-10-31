import React, { useState, createContext, useEffect } from 'react';
import { auth, db } from './firebase/firebase.config';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

import { doc, getDoc, onSnapshot } from 'firebase/firestore';

const ClientContext = createContext();

const ClientProvider = ({ children }) => {
  const [user, setUser] = useState(() => auth.currentUser);
  const [initializing, setInitializing] = useState(true);
  const [activeStoreId, setActiveStoreId] = useState(
    'b7xaujbrpLMhvaEWwcnyg4KMwsx1',
  );
  const [activeStoreData, setActiveStoreData] = useState({});
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartItems.length; index++) {
      const element = cartItems[index];
      sum += element.quantity * element.price;
    }
    setTotal(sum);
  }, [cartItems]);

  useEffect(() => {
    if (activeStoreId) {
      const fetchStoreData = async () => {
        const storeRef = doc(db, 'store', `${activeStoreId}`);
        const snapShot = await getDoc(storeRef);

        if (snapShot.exists()) {
          onSnapshot(storeRef, (snapShot) => {
            setActiveStoreData({
              id: snapShot.id,
              ...snapShot.data(),
            });
            console.log(snapShot.data());
          });
        }
      };
      fetchStoreData();
    }
  }, [activeStoreId]);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    auth.useDeviceLanguage();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error.message);
    }
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ClientContext.Provider
      value={{
        user,
        setUser,
        initializing,
        setInitializing,
        signInWithGoogle,
        signOutUser,
        cartItems,
        setCartItems,
        activeStoreId,
        setActiveStoreId,
        activeStoreData,
        setActiveStoreData,
        total,
        setTotal,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export { ClientContext, ClientProvider };
