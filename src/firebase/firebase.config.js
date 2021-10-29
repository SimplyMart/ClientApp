import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

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

export default app;
