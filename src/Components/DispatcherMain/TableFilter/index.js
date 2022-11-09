import { useMemo, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

const TableFilter = (props) => {
  const [selectionData, setSelectionData] = useState([]);
  const inputRef = useRef();
  const customers = useMemo(
    () =>
      props.customers.map((row) => {
        return { key: row, text: row, value: row };
      }),
    [props.customers],
  );
  const handleFilter = (e, { value }) => {
    e.preventDefault();
    setSelectionData(value);
    props.handleFilter(value);
  };

  return (
    <Dropdown
      clearable
      fluid
      selection
      ref={inputRef}
      options={customers}
      value={selectionData}
      onChange={handleFilter}
      placeholder="Select Customer"
    />
  );
};

TableFilter.propTypes = {
  customers: PropTypes.arrayOf(PropTypes.string),
  handleFilter: PropTypes.func,
};

export default TableFilter;
