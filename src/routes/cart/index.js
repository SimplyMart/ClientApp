import React, { useContext } from 'react';
import styled from 'styled-components';
import emptyCart from '../../assets/emptyCart.png';
import './styles.scss';
import { ClientContext } from '../../context';
import CartItems from '../../components/cartItems/index';

const Wrapper = styled.div`
  padding: 30px 20px;
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

const Cart = () => {
  const context = useContext(ClientContext);
  const { cartItems } = context;
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
          {cartItems.map((item, index) => (
            <CartItems key={index} {...item} />
          ))}
        </>
      )}
    </Wrapper>
  );
};

export default Cart;
