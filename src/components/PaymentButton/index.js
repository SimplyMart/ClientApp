import { addDoc, collection } from '@firebase/firestore';
import { message } from 'antd';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import logoWhiteBg from '../../assets/logo-white-bg.png';
import { ClientContext } from '../../context';
import { db } from '../../firebase/firebase.config';
import './styles.scss';

const StripeCheckoutButton = ({ price }) => {
  const history = useHistory();
  const { activeStoreData, activeStoreId, cartItems, total, user } =
    useContext(ClientContext);
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51IFFUnA3TZnASROvZuNOiH7c06Ih0rTa5jVLIb6BfZ7XwNTZpW9osfqsfwZm1msst37xN7H7kJwbn1PDbRlzZ7c5004ZPhRcQ4';

  const onToken = async (token) => {
    const { ownerName, phoneNumber } = activeStoreData;
    // console.log(token);
    const data = {
      items: cartItems,
      username: ownerName,
      phoneNumber,
      storeId: activeStoreId,
      cost: total,
      purchasedOn: new Date(),
      userId: user.id,
    };
    await addDoc(collection(db, 'payments'), data);
    message.success('Payment Successful');
    history.replace('/');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="SIMPLY MART"
      currency="INR"
      billingAddress
      shippingAddress
      image={logoWhiteBg}
      description={`Your total is ₹${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      ComponentClass="StripeButton"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
