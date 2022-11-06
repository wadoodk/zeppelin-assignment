import React, { useState } from 'react';
import {
  Form
} from "semantic-ui-react";
import PropTypes from 'prop-types'

const SearchSerialForm = (props) => {
  const [serialNumber, setSerialNumber] = useState('');

  const handleChange = (e, { name, value }) => setSerialNumber(value);

  const handleSubmit = () => {
    props.handleSubmit({ serial_number: serialNumber });
    setSerialNumber('');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Input
          placeholder="Serial Number"
          name="serial_number"
          value={serialNumber}
          onChange={handleChange}
        />
        <Form.Button content="Submit" />
      </Form.Group>
    </Form>
  );
};

SearchSerialForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default SearchSerialForm;