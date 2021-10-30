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

const StyledSpinner = styled(Spin)`
  .ant-spin-dot-item {
    background-color: #2b2b2b;
  }
`;

const LoadingPage = () => {
  return (
    <Wrapper>
      <StyledSpinner size="large" />
    </Wrapper>
  );
};

export default LoadingPage;
