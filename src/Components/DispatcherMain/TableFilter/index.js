import  { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

const TableFilter = (props) => {
  const [selection, setSelection] = useState(null);
  const customers = useMemo(
    () =>
      props.customers.map((row) => {
        return { key: row, text: row, value: row };
      }),
    [props.customers],
  );
//   console.log(customers);
  const handleFilter = (e, { value }) => {
    console.log('handleFilter', value);
    setSelection(value);
    props.handleFilter(value);
  };

  return (
    <Dropdown
      clearable
      fluid
      //   multiple
      search
      selection
      options={customers}
      value={selection}
      onChange={handleFilter}
      placeholder="Select Customers"
    />
  );
};

TableFilter.propTypes = {
  customers: PropTypes.arrayOf(PropTypes.string),
  handleFilter: PropTypes.func,
};

export default TableFilter;
