import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import './styles.scss';
import { ClientContext } from '../../context';
import { useHistory } from 'react-router-dom';

const Wrapper = styled.div`
  padding-bottom: 70px;
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

const StorePage = () => {
  const history = useHistory();
  const context = useContext(ClientContext);
  const { activeStoreId } = context;

  useEffect(() => {
    if (!activeStoreId) {
      history.push('/');
    }
  }, [activeStoreId]);
  return (
    <Wrapper>
        
    </Wrapper>
  );
};

export default StorePage;
