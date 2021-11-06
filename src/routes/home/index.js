import React, { useContext } from 'react';
import styled from 'styled-components';
import { ClientContext } from '../../context';
import VisitedStoreCard from '../../components/visitedStoreCard';

const Wrapper = styled.div`
  padding: 30px 20px 110px;
  background-color: #f5f5f5;
  min-height: 100vh;
  text-align: center;
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
  const { visitedStoresData } = context;
  return (
    <Wrapper>
      <Heading>Visited Stores</Heading>
      {visitedStoresData && visitedStoresData.length > 0
        ? visitedStoresData.map((store, index) => {
            return (
              <VisitedStoreCard
                key={index}
                storeId={store.id}
                storeImage={store.profileUrl}
                storeName={store.storeName}
                storeAddress={store.address}
              />
            );
          })
        : null}
    </Wrapper>
  );
};

export default HomePage;
