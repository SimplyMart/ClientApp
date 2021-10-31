import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const Wrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  background: white;
`;

const StyledImage = styled.img`
  width: 100px;
  border-radius: 10px;
`;

const Counter = styled.div`
  width: 80px;
  display: flex;
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  padding: 1px 5px;
  font-weight: 500;
  color: #2b2b2b;
  border: 1px solid #2b2b2b;
`;

const DetailsContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: left;
  align-items: flex-end;

  .name {
    font-family: 'Sora', sans-serif;
    font-size: 20px;
    font-weight: 500;
    color: #2b2b2b;
    margin-bottom: 5px;
  }

  .price {
    font-family: 'Sora', sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: #2b2b2b;
    margin-bottom: 5px;
  }
`;

const CartItems = (props) => {
  const [Quantity, setQuantity] = useState(props.quantity);
  return Quantity > 0 ? (
    <Wrapper>
      <StyledImage src={props.image} />
      <DetailsContainer>
        <span className="name">{props.name}</span>
        <span className="price">₹ {props.price}</span>
        <Counter>
          <AiOutlineMinus
            onClick={() => {
              setQuantity(Quantity - 1);
              props.onDecrease();
            }}
            size={20}
          />
          {Quantity}
          <AiOutlinePlus
            onClick={() => {
              setQuantity(Quantity + 1);
              props.onIncrease();
            }}
            size={20}
          />
        </Counter>
      </DetailsContainer>
    </Wrapper>
  ) : null;
};

export default CartItems;
