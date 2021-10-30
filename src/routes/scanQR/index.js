import React, { useState } from 'react';
import QrReader from 'react-qr-reader';
import styled from 'styled-components';
import './styles.scss';

const Wrapper = styled.div`
  padding: 30px;
  background-color: #f5f5f5;
  height: 100vh;
  text-align: center;
`;

const Heading = styled.div`
  width: 90%;
  padding: 30px 20px 20px;
  font-family: 'Sora', sans-serif;
  font-size: 35px;
  font-weight: 900;
  margin: auto;
  color: #2b2b2b;
`;

const SubHeading = styled.div`
  width: 90%;
  padding: 0 20px 30px;
  font-family: 'Sora', sans-serif;
  font-size: 20px;
  font-weight: 400;
  margin: 0 auto 0;
  color: #a9a9a9;
`;

const ScanQRCode = () => {
  const [qrCodeResult, setQrCodeResult] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setQrCodeResult(data);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  return (
    <Wrapper>
      <div>
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
        <SubHeading style={{marginTop: '30px'}}>
          Note: Place the QR code in the highlighted sqaure
        </SubHeading>
        <h5>{qrCodeResult}</h5>
      </div>
    </Wrapper>
  );
};

export default ScanQRCode;
