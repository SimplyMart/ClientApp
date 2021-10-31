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
  const [cartItems, setCartItems] = useState([
    {
      prodId: '7622201149437',
      itemname: 'Dairy Milk',
      name: 'Dairy Milk',
      price: 20,
      quantity: 5,
      cost: 100,
      image:
        'https://firebasestorage.googleapis.com/v0/b/simplymart-8324e.appspot.com/o/stores%2Fproducts%2F7622201149437?alt=media&token=b82769fe-f574-40fe-9704-96a0a7845c65',
    },
    {
      prodId: '8901262060011',
      itemname: 'Amul Cheese Spread',
      name: 'Amul Cheese Spread',
      price: 120,
      quantity: 2,
      cost: 240,
      image:
        'https://firebasestorage.googleapis.com/v0/b/simplymart-8324e.appspot.com/o/stores%2Fproducts%2F8901262060011?alt=media&token=3abf9c54-ba5e-4201-8f79-c90db2ef438f',
    },
    {
      prodId: '8901262060011',
      itemname: 'Godrej Room Freshner',
      name: 'Godrej Room Freshner',
      price: 220,
      quantity: 3,
      cost: 660,
      image:
        'https://firebasestorage.googleapis.com/v0/b/simplymart-8324e.appspot.com/o/stores%2Fproducts%2F8901023018404?alt=media&token=1305f100-8125-42e8-8942-c5dc04aa1406',
    },
  ]);

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
