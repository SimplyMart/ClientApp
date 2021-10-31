import React, { useContext } from 'react';
import styled from 'styled-components';
import emptyCart from '../../assets/emptyCart.png';
import './styles.scss';
import { ClientContext } from '../../context';
import CartItems from '../../components/cartItems/index';
import StripeCheckoutButton from '../../components/PaymentButton';

const Wrapper = styled.div`
  padding: 30px 20px 70px;
  background-color: #f5f5f5;
  min-height: 100vh;
  text-align: center;
`;

const StyledImage = styled.img`
  margin: 120px auto auto;
  width: 300px;
  display: block;
`;

const SubHeading = styled.div`
  width: 100%;
  padding: 0 20px 30px;
  font-family: 'Sora', sans-serif;
  font-size: 20px;
  font-weight: 400;
  margin: 0 auto 0;
  color: #a9a9a9;
`;

const Heading = styled.div`
  width: 100%;
  padding: 10px 20px 20px;
  font-family: 'Sora', sans-serif;
  font-size: 35px;
  font-weight: 900;
  margin: auto;
  color: #2b2b2b;
`;

const TotalAmount = styled.span`
  font-family: 'Sora', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #2b2b2b;
  margin-bottom: 5px;
`;

const Cart = () => {
  const context = useContext(ClientContext);
  const { cartItems, setCartItems, total } = context;

  return (
    <Wrapper>
      {cartItems.length === 0 ? (
        <>
          <StyledImage src={emptyCart} />
          <SubHeading style={{ marginTop: '30px', marginBottom: '70px' }}>
            Add new items in cart by scanning their barcode
          </SubHeading>
        </>
      ) : (
        <>
          <Heading>Cart</Heading>
          <div
            style={{
              maxHeight: '62vh',
              overflowX: 'auto',
              marginBottom: '15px',
            }}
          >
            {cartItems.map((item, index) => (
              <CartItems
                key={index}
                Increase={() => {
                  let modifiedCartItems = cartItems.map((l) =>
                    Object.assign({}, l),
                  );
                  modifiedCartItems[index].quantity =
                    modifiedCartItems[index].quantity + 1;
                  setCartItems(modifiedCartItems);
                }}
                Decrease={() => {
                  let modifiedCartItems = cartItems.map((l) =>
                    Object.assign({}, l),
                  );
                  modifiedCartItems[index].quantity =
                    modifiedCartItems[index].quantity - 1;
                  if (modifiedCartItems[index].quantity === 0) {
                    modifiedCartItems.splice(index, 1);
                  }
                  setCartItems(modifiedCartItems);
                }}
                {...item}
              />
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              maxWidth: '95%',
              margin: 'auto',
            }}
          >
            <StripeCheckoutButton price={total} />
            <TotalAmount>₹ {total}</TotalAmount>
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default Cart;
