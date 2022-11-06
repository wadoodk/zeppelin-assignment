import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table, Pagination } from 'semantic-ui-react';
import DataTableHeader from './DataTableHeader';
import DataTableRow from './DataTableRow';

const MachineDataTable = (props) => {
  const perPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [column, setColumn] = useState(null);
  const [direction, setDirection] = useState('ascending');
  const [tablelength, setTablelength] = useState(
    Math.ceil(props.list.length / perPage),
  );
  const totalPages = useMemo(() => props.list.length / perPage, [props.list]);
  const totalCount = useMemo(() => props.list.length, [props.list]);
  const [limitList, setLimitList] = useState(
    props.list.slice((currentPage - 1) * perPage, currentPage * perPage),
  );

  const handleSort = (value) => {
    console.log(
      'sortableFunction',
      value,
      direction && direction === 'ascending' ? 'descending' : 'ascending',
    );
    setDirection(
      direction && direction === 'ascending' ? 'descending' : 'ascending',
    );
    setColumn(value);

    props.handleSort(value, direction);
  };

  const handleChangePage = (event, { activePage }) => {
    const set = event.target.outerText;
    setCurrentPage(set);
  };

  useEffect(() => {
    setLimitList(
      props.list.slice((currentPage - 1) * perPage, currentPage * perPage),
    );
    setTablelength(Math.ceil(props.list.length / perPage));
  }, [currentPage, props.list, setLimitList, setTablelength]);

  return (
    <div>
      Total count: {totalCount}.
      <Table celled selectable sortable>
        <DataTableHeader
          column={column}
          direction={direction}
          handleSort={handleSort}
        />

        <Table.Body>
          {limitList?.length > 0 &&
            limitList.map((row) => <DataTableRow {...row} />)}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="8">
              <Pagination
                totalPages={totalPages}
                activePage={currentPage}
                firstItem={null}
                lastItem={null}
                siblingRange={1}
                onPageChange={handleChangePage}
                totalPages={tablelength}
                boundaryRange={1}
              />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
};

MachineDataTable.propTypes = {
  handleSort: PropTypes.func,
  currentPage: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      guid: PropTypes.string.isRequired,
      customer: PropTypes.string.isRequired,
      asset_type: PropTypes.string.isRequired,
      serial_number: PropTypes.string.isRequired,
      service_contract: PropTypes.bool.isRequired,
      warranty: PropTypes.bool.isRequired,
    }),
  ),
};

export default MachineDataTable;
