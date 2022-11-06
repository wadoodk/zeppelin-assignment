import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { QrReader } from 'react-qr-reader';

const QRCodeScanner = (props) => {
  const delay = 500;

  const previewStyle = {
    height: 240,
    width: 320,
  };

  const [data, setData] = useState('No result');
  const [selected, setSelected] = useState('environment');

  const handleScan = (res, err) => {
    if (res) {
      // console.log(res);
      setData(res?.text);
      props.onQrReaderCapture(JSON.parse(res?.text))
    }
  };

  const handleError = (error) => {
    // console.log(error);
  };
  useEffect(() => {}, []);

  return (
    <>
      <QrReader
        delay={100}
        // onError={handleError}
        onResult={handleScan}
        style={{ height: 240, width: 320 }}
      />
      <p>{data}</p>
    </>
  );
};

QRCodeScanner.propTypes = {
  onQrReaderCapture: PropTypes.func,
};

export default QRCodeScanner;
