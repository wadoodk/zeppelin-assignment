import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

const DataTableHeader = ({ column, direction, handleSort }) => {
  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell
          width={1}
          sorted={column === 'serial_number' ? direction : undefined}
          onClick={() => handleSort('serial_number')}>
          Serial Number
        </Table.HeaderCell>
        <Table.HeaderCell
          width={3}
          sorted={column === 'customer' ? direction : undefined}
          onClick={() => handleSort('customer')}>
          Customer
        </Table.HeaderCell>
        <Table.HeaderCell
          width={3}
          sorted={column === 'asset_type' ? direction : undefined}
          onClick={() => handleSort('asset_type')}>
          Asset Type
        </Table.HeaderCell>
        <Table.HeaderCell
          width={1}
          sorted={column === 'service_contract' ? direction : undefined}
          onClick={() => handleSort('service_contract')}>
          Service Contract
        </Table.HeaderCell>
        <Table.HeaderCell
          width={1}
          sorted={column === 'warranty' ? direction : undefined}
          onClick={() => handleSort('warranty')}>
          Warranty
        </Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  );
};

DataTableHeader.propTypes = {
  column: PropTypes.string,
  direction: PropTypes.string,
  handleSort: PropTypes.func,
};

export default DataTableHeader;
