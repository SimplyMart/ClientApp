import React from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingPage = () => {
  return (
    <Wrapper>
      <Spin size="large" />
    </Wrapper>
  );
};

export default LoadingPage;
