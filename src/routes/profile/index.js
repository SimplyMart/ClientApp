import React, { useContext, useState } from "react";
import "./styles.scss";
import { Input, Button, message } from "antd";
import { AiOutlineUser, AiOutlineLogout, AiOutlineMail } from "react-icons/ai";
import { GoDeviceMobile } from "react-icons/go";
import styled from "styled-components";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
import { ClientContext } from "../../context";

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
  border-radius: 5px;
  font-family: "Sora", sans-serif;
  border-bottom: 3px solid #23234c;
  margin-bottom: 20px;
  height: 50px;
  font-size: 18px;
  color: #2b2b2b;

  &:focus,
  &:hover {
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
  font-family: "Sora", sans-serif;
  font-size: 35px;
  font-weight: 900;
  margin: auto;
  color: #2b2b2b;
`;

const StyledLogoutButton = styled(Button)`
  width: 100%;
  height: 60px;
  border-radius: 40px;
  font-family: "Sora", sans-serif;
  background: #d22b2b;
  color: white;
  font-size: 24px;
  font-weight: 400;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto 0;

  &:hover,
  &:focus {
    color: white;
    background: #d22b2b;
    border: 2px solid white;
  }
`;

const StyledSubmitButton = styled(Button)`
  width: 100%;
  height: 60px;
  border-radius: 40px;
  font-family: "Sora", sans-serif;
  background: #50c878;
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
    background: #50c878;
    border: 2px solid white;
  }
`;

const StyledTextArea = styled(TextArea)`
  font-size: 18px;
  color: #2b2b2b;
  border-radius: 10px;
  ${"" /* border: 2px solid #2b2b2b; */}
  border-bottom: 3px solid #23234c;
  font-family: "Sora", sans-serif;
  padding: 10px 15px;
  resize: none;

  &:focus,
  &:hover {
    border-color: #2b2b2b !important;
    box-shadow: none !important;
  }
`;

const Profile = () => {
  const context = useContext(ClientContext);
  const { user, signOutUser } = context;
  const [name, setName] = useState(user.displayName || "");
  const [email, setEmail] = useState(user.email || "");
  const [mobile, setMobile] = useState(user.mobile || "");
  const [address, setAddress] = useState(user.address || "");

  const handleSubmit = async () => {
    const userRef = doc(db, "users", `${user.id}`);

    try {
      await updateDoc(userRef, {
        displayName: name,
        mobile,
        email,
        address,
      });
      message.success("Details Updated!!", 2.5);
    } catch (error) {
      console.log("Error updating the User", error.message);
    }
  };

  return (
    <Wrapper>
      <Heading>Profile</Heading>
      <StyledImage
        src={
          user.userImage
            ? user.userImage
            : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fuser_149071&psig=AOvVaw1HG1DQcbPfBes46HpaaSgW&ust=1635694042865000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCODI_qa58vMCFQAAAAAdAAAAABAD"
        }
      />
      <StyledInput
        size="large"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Name"
        prefix={<AiOutlineUser style={{ color: "#23234c" }} />}
      />
      <StyledInput
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        size="large"
        placeholder="Email"
        prefix={<AiOutlineMail style={{ color: "#23234c" }} />}
      />
      <StyledInput
        size="large"
        value={mobile}
        onChange={(e) => {
          setMobile(e.target.value);
        }}
        placeholder="Mobile Number"
        prefix={<GoDeviceMobile style={{ color: "#23234c" }} />}
      />
      <StyledTextArea
        onChange={(e) => {
          setAddress(e.target.value);
        }}
        value={address}
        placeholder="Address"
        rows={4}
      />
      <StyledSubmitButton
        onClick={async () => {
          await handleSubmit();
        }}
      >
        Save Changes
      </StyledSubmitButton>
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
