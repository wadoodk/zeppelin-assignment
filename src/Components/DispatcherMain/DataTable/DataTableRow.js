import React from 'react';
import PropTypes from 'prop-types';
import { Table, Pagination, Grid, Header, Button } from 'semantic-ui-react';

const DataTableRow = ({
  id,
  guid,
  customer,
  asset_type,
  serial_number,
  service_contract,
  warranty,
}) => {
  return (
    <Table.Row>
      <Table.Cell>{serial_number}</Table.Cell>
      <Table.Cell>{customer}</Table.Cell>
      <Table.Cell>{asset_type}</Table.Cell>
      <Table.Cell
        center
        positive={service_contract}
        negative={!service_contract}>
        {service_contract ? 'true' : 'false'}
      </Table.Cell>
      <Table.Cell
        center
        positive={warranty}
        negative={!warranty}>
        {warranty ? 'true' : 'false'}
      </Table.Cell>
    </Table.Row>
  );
};

DataTableRow.propTypes = {
  id: PropTypes.number.isRequired,
  guid: PropTypes.string.isRequired,
  customer: PropTypes.string.isRequired,
  asset_type: PropTypes.string.isRequired,
  serial_number: PropTypes.string.isRequired,
  service_contract: PropTypes.bool.isRequired,
  warranty: PropTypes.bool.isRequired,
};

export default DataTableRow;
