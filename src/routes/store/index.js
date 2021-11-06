import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { message } from 'antd';
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
  position: relative;

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
  const { activeStoreId, activeStoreData, cartItems, setCartItems } = context;
  const [results, setResult] = useState([]);

  useEffect(() => {
    Quagga.init(
      {
        inputStream: {
          type: 'LiveStream',
          target: document.querySelector('#barCodeReader'),
          constraints: {
            facingMode: 'environment', // or user
            width: 300,
            height: 300,
          },
        },
        numOfWorkers: navigator.hardwareConcurrency,
        locate: true,
        frequency: 1,
        debug: {
          drawBoundingBox: true,
          showFrequency: true,
          drawScanline: true,
          showPattern: true,
        },
        multiple: false,
        locator: {
          halfSample: false,
          patchSize: 'large', // x-small, small, medium, large, x-large
          debug: {
            showCanvas: false,
            showPatches: false,
            showFoundPatches: false,
            showSkeleton: false,
            showLabels: false,
            showPatchLabels: false,
            showRemainingPatchLabels: false,
            boxFromPatches: {
              showTransformed: false,
              showTransformedBox: false,
              showBB: false,
            },
          },
        },
        decoder: {
          readers: [
            'code_128_reader',
            'ean_reader',
            'ean_8_reader',
            'code_39_reader',
            'code_39_vin_reader',
            'codabar_reader',
            'upc_reader',
            'upc_e_reader',
            'i2of5_reader',
            'i2of5_reader',
            '2of5_reader',
            'code_93_reader',
          ],
        },
      },
      (err) => {
        if (err) {
          return console.log(err);
        }
        Quagga.start();
      },
    );
    Quagga.onDetected((data) => {
      setResult([].concat([data]));
      const filteredItem = activeStoreData.products.filter((product) => {
        return product.prodId === data.codeResult.code;
      });
      let modifiedCartItems = cartItems.map((l) => Object.assign({}, l));
      if (filteredItem.length > 0) {
        modifiedCartItems.push(filteredItem[0]);
      }
      setCartItems(modifiedCartItems);

      const audio = new Audio('../../assets/beep.mp3');
      audio.play();
      message.success('Item added to cart successfully');
    });
    Quagga.onProcessed((result) => {
      let drawingCtx = Quagga.canvas.ctx.overlay,
        drawingCanvas = Quagga.canvas.dom.overlay;

      if (result) {
        if (result.boxes) {
          drawingCtx.clearRect(
            0,
            0,
            parseInt(drawingCanvas.getAttribute('width')),
            parseInt(drawingCanvas.getAttribute('height')),
          );
          result.boxes
            .filter((box) => box !== result.box)
            .forEach((box) => {
              Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
                color: 'green',
                lineWidth: 2,
              });
            });
        }

        if (result.box) {
          Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
            color: '#00F',
            lineWidth: 2,
          });
        }

        if (result.codeResult && result.codeResult.code) {
          Quagga.ImageDebug.drawPath(
            result.line,
            { x: 'x', y: 'y' },
            drawingCtx,
            { color: 'red', lineWidth: 3 },
          );
        }
      }
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
      {results.length > 0 && (
        <SubHeading>{results[0].codeResult.code}</SubHeading>
      )}
    </Wrapper>
  );
};

export default StorePage;
