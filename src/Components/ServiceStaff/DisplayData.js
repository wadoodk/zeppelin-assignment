import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import { QRCodeCanvas } from 'qrcode.react';

const DisplayData = (props) => {
  const qrRef = useRef();

  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={{ serial_number: props.data.serial_number }}
      level={'H'}
      size={290}
      includeMargin={true}
      imageSettings={{
        width: '100%',
        height: '100%',
      }}
    />
  );
  return (
    <Card style={{ margin: '1em 0em' }}  data-testid="display-data-card">
      <div ref={qrRef}>{qrcode}</div>
      <Card.Content>
        <Card.Header>
          Sr. #: <code data-testid="data-serial">{props.data.serial_number}</code>
        </Card.Header>
        <Card.Meta></Card.Meta>
        <Card.Description>
          <p>
            Customer: {props.data.customer} <br />
            Asset Type: {props.data.asset_type} <br />
            Service Contract: {props.data.service_contract
              ? 'true'
              : 'false'}{' '}
            <br />
            Warranty: {props.data.warranty ? 'true' : 'false'}
          </p>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

DisplayData.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    guid: PropTypes.string.isRequired,
    customer: PropTypes.string.isRequired,
    asset_type: PropTypes.string.isRequired,
    serial_number: PropTypes.string.isRequired,
    service_contract: PropTypes.bool.isRequired,
    warranty: PropTypes.bool.isRequired,
  }),
};

export default DisplayData;
