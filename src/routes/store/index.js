import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import './styles.scss';
import { ClientContext } from '../../context';
import { useHistory } from 'react-router-dom';
import Quagga from 'quagga';

const Wrapper = styled.div`
  padding-bottom: 70px;
  background-color: #f5f5f5;
  min-height: 100vh;
  text-align: center;
`;

const BarCodeScannerDiv = styled.div`
  padding: 20px;
  height: 410px;
  border-radius: 10px;
  background-color: aliceblue;

  .title {
    font-family: 'Sora', sans-serif;
    font-size: 25px;
    font-weight: 900;
    margin: auto;
    color: #2b2b2b;
  }
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

const Heading = styled.div`
  width: 100%;
  padding: 10px 20px 0;
  font-family: 'Sora', sans-serif;
  font-size: 35px;
  font-weight: 900;
  margin: auto;
  color: #2b2b2b;
`;

const StorePage = () => {
  const history = useHistory();
  const context = useContext(ClientContext);
  const { activeStoreId, activeStoreData } = context;

  useEffect(() => {
    Quagga.init(
      {
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          constraints: {
            width: 300,
            height: 300,
            facingMode: 'environment',
          },
          target: document.querySelector('#barCodeReader'),
        },
        locator: {
          halfSample: true,
          patchSize: 'large', // x-small, small, medium, large, x-large
          debug: {
            showCanvas: true,
            showPatches: false,
            showFoundPatches: false,
            showSkeleton: false,
            showLabels: false,
            showPatchLabels: false,
            showRemainingPatchLabels: false,
            boxFromPatches: {
              showTransformed: true,
              showTransformedBox: true,
              showBB: true,
            },
          },
        },
        numOfWorkers: 4,
        decoder: {
          readers: ['code_128_reader'],
          debug: {
            drawBoundingBox: true,
            showFrequency: true,
            drawScanline: true,
            showPattern: true,
          },
        },
        locate: true,
      },
      function (err) {
        if (err) {
          console.log(err);
          return;
        }
        console.log('Initialization finished. Ready to start');
        Quagga.start();
      },
    );
    Quagga.onDetected((data) => {
      console.log(data);
    });
  }, []);

  useEffect(() => {
    if (!activeStoreId) {
      history.push('/');
    }
  }, [activeStoreId]);
  return (
    <Wrapper>
      <img
        style={{ height: '100%', width: '100%' }}
        alt="store name"
        src={activeStoreData.profileUrl}
      ></img>
      <Heading>{activeStoreData.storeName}</Heading>
      <SubHeading>{activeStoreData.address}</SubHeading>
      <BarCodeScannerDiv>
        <span className="title">Barcode Reader</span>
        <div style={{ marginTop: '15px' }} id="barCodeReader" />
      </BarCodeScannerDiv>
    </Wrapper>
  );
};

export default StorePage;
