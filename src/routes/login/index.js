import React, { useContext } from 'react';
import { Button } from 'antd';
import { FcGoogle } from 'react-icons/fc';
import styled from 'styled-components';
import './styles.scss';
import { ClientContext } from '../../context';
import logo from '../../assets/logo.png';

const Wrapper = styled.div`
  width: 100vw;
  background-color: #fff;
  text-align: center;
  padding: 5% 5%;
  overflow: hidden;
`;

const StyledLogo = styled.img`
  width: 300px;
  height: 300px;
  margin: auto;
  display: block;
`;

const StyledLoginButton = styled(Button)`
  margin-top: 40px;
  width: 90%;
  height: 60px;
  border-radius: 40px;
  font-family: 'Sora', sans-serif;
  background: white;
  color: #000;
  font-size: 20px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;

  &:hover, &:focus {
    color: #000;
  }
`;

const Drawer = styled.div`
  position: absolute;
  bottom: 0;
  padding: 30px 10px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background-color: #23234c;
  width: 100vw;
  left: 0;
`;

const LoginPage = () => {
  const context = useContext(ClientContext);
  const { signInWithGoogle } = context;
  return (
    <Wrapper>
      <StyledLogo src={logo} />
      <Drawer>
        <StyledLoginButton
          type="default"
          size="large"
          onClick={async () => {
            await signInWithGoogle();
          }}
        >
          <FcGoogle size={40} />
          &nbsp;&nbsp;Login with Google
        </StyledLoginButton>
      </Drawer>
    </Wrapper>
  );
};

export default LoginPage;
