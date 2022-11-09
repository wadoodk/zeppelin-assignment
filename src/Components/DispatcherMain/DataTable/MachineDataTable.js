import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table, Pagination } from 'semantic-ui-react';
import DataTableHeader from './DataTableHeader';
import DataTableRow from './DataTableRow';

const MachineDataTable = (props) => {
  const perPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = useMemo(
    () => Math.ceil(props.list.length / perPage),
    [props.list],
  );
  const totalCount = useMemo(() => props.list.length, [props.list]);
  const [limitList, setLimitList] = useState(
    props.list.slice((currentPage - 1) * perPage, currentPage * perPage),
  );

  const handleSort = (value) => {
    props.handleSort(value);
  };

  const handleChangePage = (event, { activePage }) => {
    const set = event.target.outerText;
    setCurrentPage(set);
  };

  useEffect(() => {
    setLimitList(
      props.list.slice((currentPage - 1) * perPage, currentPage * perPage),
    );
  }, [currentPage, props.list, setLimitList]);

  return (
    <div>
      Total count: {totalCount}.
      <Table celled selectable sortable>
        <DataTableHeader
          column={props.column}
          direction={props.direction}
          handleSort={handleSort}
        />

        <Table.Body>
          {limitList?.length > 0 &&
            limitList.map((row) => <DataTableRow {...row} key={row.id} />)}
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
