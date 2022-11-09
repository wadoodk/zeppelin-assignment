import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { QrReader } from 'react-qr-reader';

const QRCodeScanner = (props) => {

  const [data, setData] = useState('No result');

  const handleScan = (res, err) => {
    if (res) {
      setData(res?.text);
      props.onQrReaderCapture(JSON.parse(res?.text))
    }
  };

  const handleError = (error) => {
    console.log(error);
  };

  return (
    <>
      <QrReader
        delay={100}
        onError={handleError}
        onResult={handleScan}
        style={{ height: 320, width: 320 }}
      />
      <p>{data}</p>
    </>
  );
};

QRCodeScanner.propTypes = {
  onQrReaderCapture: PropTypes.func,
};

export default QRCodeScanner;
