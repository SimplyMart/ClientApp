import React, { useContext } from 'react';
import QrReader from 'react-qr-reader';
import styled from 'styled-components';
import { ClientContext } from '../../context';
import { useHistory } from 'react-router-dom';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase.config';
import './styles.scss';

const Wrapper = styled.div`
  padding: 30px;
  background-color: #f5f5f5;
  min-height: 100vh;
  text-align: center;
  padding-bottom: 70px;
`;

const Heading = styled.div`
  width: 100%;
  padding: 30px 20px 20px;
  font-family: 'Sora', sans-serif;
  font-size: 35px;
  font-weight: 900;
  margin: auto;
  color: #2b2b2b;
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

const ScanQRCode = () => {
  const history = useHistory();
  const context = useContext(ClientContext);
  const { setActiveStoreId, user, setUser } = context;

  const handleScan = async (data) => {
    if (data) {
      setActiveStoreId(data);
      if (!user.visitedStores.includes(data)) {
        const temp = [...new Set([...user.visitedStores, data])];
        const userRef = doc(db, 'users', `${user.id}`);
        try {
          await updateDoc(userRef, {
            visitedStores: temp,
          });
          setUser({
            ...user,
            visitedStores: temp,
          });
        } catch (error) {
          console.log('Error creating the User', error.message);
        }
      }
      history.push('/store');
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <Wrapper>
      <Heading>Scan QR Code</Heading>
      <SubHeading>
        To Add a new store scan the QR code for the store using the below
        scanner
      </SubHeading>
      <QrReader
        className="qrCode"
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      <SubHeading style={{ marginTop: '30px' }}>
        Note: Place the QR code in the highlighted square
      </SubHeading>
    </Wrapper>
  );
};

export default ScanQRCode;
