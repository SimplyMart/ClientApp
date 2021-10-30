import React from 'react';
import styled from 'styled-components';
import { FaHome, FaShoppingCart, FaUser } from 'react-icons/fa';
import { BiQrScan } from 'react-icons/bi';
import { BsDot } from 'react-icons/bs';
import { useLocation, useHistory } from 'react-router-dom';

const Wrapper = styled.div`
  position: fixed;
  z-index: 200;
  bottom: 0;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  background: white;
  align-content: center;
  padding: 10px 0;
`;

const NavDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 80px;
  font-family: 'Sora', sans-serif;
  font-size: 15px;
  font-weight: 500;
  ${(props) => (props.current ? `color: #2B2B2B	;` : `color: #b1b1b1;`)}
`;

const routes = [
  { name: 'Home', route: '/', icon: <FaHome size={30} /> },
  { name: 'Scan QR', route: '/scanQr', icon: <BiQrScan size={30} /> },
  { name: 'Cart', route: '/cart', icon: <FaShoppingCart size={30} /> },
  { name: 'Profile', route: '/profile', icon: <FaUser size={30} /> },
];

const BottomNavBar = () => {
  const location = useLocation();
  const history = useHistory();
  const path = location.pathname;
  return (
    <Wrapper>
      {routes.map((route) => (
        <NavDiv
          onClick={() => {
            history.push(route.route);
          }}
          current={path === route.route}
        >
          {route.icon}
          {path === route.route ? (
            <BsDot size={20} />
          ) : (
            <span>{route.name}</span>
          )}
        </NavDiv>
      ))}
    </Wrapper>
  );
};

export default BottomNavBar;
