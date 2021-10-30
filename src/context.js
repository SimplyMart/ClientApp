import React, { useState, createContext } from 'react';
import { auth } from './firebase/firebase.config';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const ClientContext = createContext();

const ClientProvider = ({ children }) => {
  const [user, setUser] = useState(() => auth.currentUser);
  const [initializing, setInitializing] = useState(true);
  const [activeStoreId, setActiveStoreId] = useState(null);
  const [activeStoreData, setActiveStoreData] = useState({});
  const [cartItems, setCartItems] = useState([
    {
      name: 'Lays',
      price: '20',
      quantity: 1,
      image: 'https://m.media-amazon.com/images/I/81vJyb43URL._SL1500_.jpg',
    },
    {
      name: 'Frooti',
      price: '25',
      quantity: 12,
      image:
        'https://www.bigbasket.com/media/uploads/p/l/265689-2_5-frooti-drink-fresh-n-juicy-mango.jpg',
    },
  ]);

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
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export { ClientContext, ClientProvider };
