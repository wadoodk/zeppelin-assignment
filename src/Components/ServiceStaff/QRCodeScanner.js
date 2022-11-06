import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { QrReader } from 'react-qr-reader';

const QRCodeScanner = (props) => {
  const delay = 500;

  const previewStyle = {
    height: 240,
    width: 320,
  };

  const [result, setResult] = useState('No result');

  const handleScan = (result) => {
    if (result) {
      setResult(result);
    }
  };

  const handleError = (error) => {
    console.log(error);
  };

  return (
    <>
      <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
        constraints={{facingMode: 'environment'}}
      />
      <p>{result}</p>
    </>
  );
};

QRCodeScanner.propTypes = {};

export default QRCodeScanner;
