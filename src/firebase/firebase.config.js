import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDd2w6TW7q_1odwYzud19ks9F6xvL590-4',
  authDomain: 'simplymart-8324e.firebaseapp.com',
  projectId: 'simplymart-8324e',
  storageBucket: 'simplymart-8324e.appspot.com',
  messagingSenderId: '562825845485',
  appId: '1:562825845485:web:18468a4da699f83f8f0ae4',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

export const createUserProfileDocument = async (userAuth, additionalData = {}) => {
  if (!userAuth) return;

  console.log(userAuth);

  const userRef = doc(db, 'users', `${userAuth.uid}`);

  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        userImage: photoURL,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating the User', error.message);
    }
  } else {
    const { photoURL } = userAuth;

    try {
      await updateDoc(userRef, {
        userImage: photoURL,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating the User', error.message);
    }
  }

  return userRef;
};

export default app;
