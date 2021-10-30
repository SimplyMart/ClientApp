import React, { useContext } from 'react';
import styled from 'styled-components';
import './styles.scss';
import { ClientContext } from '../../context';

const Wrapper = styled.div`
  padding: 30px 20px 70px;
  background-color: #f5f5f5;
  min-height: 100vh;
  text-align: center;
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

const HomePage = () => {
  const context = useContext(ClientContext);
  return (
    <Wrapper>
      <Heading>Visited Stores</Heading>
    </Wrapper>
  );
};

export default HomePage;
