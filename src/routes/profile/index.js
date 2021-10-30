import React, { useContext } from 'react';
import './styles.scss';
import { Input, Button } from 'antd';
import { AiOutlineUser, AiOutlineLogout } from 'react-icons/ai';
import { GoDeviceMobile } from 'react-icons/go';
import styled from 'styled-components';
import { ClientContext } from '../../context';

const { TextArea } = Input;

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #f5f5f5;
  padding: 20px 20px 100px;
`;

const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  margin: auto;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const StyledInput = styled(Input)`
  border-radius: 10px;
  font-family: 'Sora', sans-serif;
  border: 2px solid #2b2b2b;
  margin-bottom: 20px;
  height: 50px;
  font-size: 18px;
  color: #2b2b2b;

  &:focus, &:hover {
    border-color: #2b2b2b !important;
    box-shadow: none !important;
  }

  .ant-input-lg {
    font-size: 18px;
  }
`;

const Heading = styled.div`
  width: 100%;
  padding: 0 20px 20px;
  font-family: 'Sora', sans-serif;
  font-size: 35px;
  font-weight: 900;
  margin: auto;
  color: #2b2b2b;
`;

const StyledLogoutButton = styled(Button)`
  width: 100%;
  height: 60px;
  border-radius: 40px;
  font-family: 'Sora', sans-serif;
  background: #d22b2b;
  color: white;
  font-size: 24px;
  font-weight: 400;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto 0;

  &:hover,
  &:focus {
    color: white;
    background: #d22b2b;
    border: 2px solid white;
  }
`;

const StyledTextArea = styled(TextArea)`
  font-size: 18px;
  color: #2b2b2b;
  border-radius: 10px;
  border: 2px solid #2b2b2b;
  font-family: 'Sora', sans-serif;
  padding: 10px 15px;
  resize: none;
`;

const Profile = () => {
  const context = useContext(ClientContext);
  const { user, signOutUser } = context;
  return (
    <Wrapper>
      <Heading>Profile</Heading>
      <StyledImage
        src={
          user.userImage
            ? user.userImage
            : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fuser_149071&psig=AOvVaw1HG1DQcbPfBes46HpaaSgW&ust=1635694042865000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCODI_qa58vMCFQAAAAAdAAAAABAD'
        }
      />
      <StyledInput size="large" placeholder="Name" prefix={<AiOutlineUser />} />
      <StyledInput
        size="large"
        placeholder="Mobile Number"
        prefix={<GoDeviceMobile />}
      />
      <StyledTextArea placeholder="Address" rows={4} />
      <StyledLogoutButton
        onClick={async () => {
          await signOutUser();
        }}
      >
        <AiOutlineLogout />
        &nbsp;&nbsp;Logout
      </StyledLogoutButton>
    </Wrapper>
  );
};

export default Profile;
