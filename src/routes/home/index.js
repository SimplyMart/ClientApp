import React, { useContext } from "react";
import styled from "styled-components";
import "./styles.scss";
import { ClientContext } from "../../context";
import { Card, Avatar } from "antd";
import Store1 from "../../assets/store1.jpg";
import Store2 from "../../assets/store2.jpg";
import Store3 from "../../assets/store3.jpg";
import Store4 from "../../assets/store4.jpg";

const Wrapper = styled.div`
  padding: 30px 20px 70px;
  background-color: #f5f5f5;
  min-height: 100vh;
  text-align: center;
`;

const SubHeading = styled.div`
  width: 100%;
  padding: 0 20px 30px;
  font-family: "Sora", sans-serif;
  font-size: 20px;
  font-weight: 400;
  margin: 0 auto 0;
  color: #a9a9a9;
`;

const Heading = styled.div`
  width: 100%;
  padding: 10px 20px 20px;
  font-family: "Sora", sans-serif;
  font-size: 35px;
  font-weight: 900;
  margin: auto;
  color: #2b2b2b;
`;

const HomePage = () => {
  const context = useContext(ClientContext);
  const { Meta } = Card;
  return (
    <Wrapper>
      <Heading>Visited Stores</Heading>
      <Card
        style={{
          width: "100%",
          marginTop: 16,
          borderRadius: "10px",
          boxShadow: "5px 5px 5px 0px #bdbdbd",
        }}
      >
        <Meta
          avatar={
            <Avatar
              style={{
                borderRadius: "10px",
                border: "1px solid #bdbdbd",
              }}
              shape="square"
              size={120}
              src={Store1}
            />
          }
          title="Carniceria"
          description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
        />
      </Card>
      <Card
        style={{
          width: "100%",
          marginTop: 16,
          borderRadius: "10px",
          boxShadow: "5px 5px 5px 0px #bdbdbd",
        }}
      >
        <Meta
          avatar={
            <Avatar
              style={{
                borderRadius: "10px",
                border: "1px solid #bdbdbd",
              }}
              shape="square"
              size={120}
              src={Store2}
            />
          }
          title="Countdown"
          description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
        />
      </Card>
      <Card
        style={{
          width: "100%",
          marginTop: 16,
          borderRadius: "10px",
          boxShadow: "5px 5px 5px 0px #bdbdbd",
        }}
      >
        <Meta
          avatar={
            <Avatar
              style={{
                borderRadius: "10px",
                border: "1px solid #bdbdbd",
              }}
              shape="square"
              size={120}
              src={Store3}
            />
          }
          title="Waitrose"
          description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
        />
      </Card>
      <Card
        style={{
          width: "100%",
          marginTop: 16,
          borderRadius: "10px",
          boxShadow: "5px 5px 5px 0px #bdbdbd",
        }}
      >
        <Meta
          avatar={
            <Avatar
              style={{
                borderRadius: "10px",
                border: "1px solid #bdbdbd",
              }}
              shape="square"
              size={120}
              src={Store4}
            />
          }
          title="Shahi Grocer"
          description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
        />
      </Card>
    </Wrapper>
  );
};

export default HomePage;
