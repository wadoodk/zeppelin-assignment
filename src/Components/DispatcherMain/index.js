import React, { useState } from 'react';
import {
  Container,
  Grid,
  Header,
  Segment,
} from 'semantic-ui-react';
import _ from 'lodash';
import machineData from '../../Data/machine_data';
import TableFilter from './TableFilter';
import MachineDataTable from './DataTable/MachineDataTable';
import AssetTypeGraph from './Graphs/AssetTypeGraph';

const DispatcherMain = () => {
  const [column, setColumn] = useState(null);
  const [direction, setDirection] = useState('ascending');
  const [dataList, setDataList] = useState(machineData);
  const [customers] = useState([
    ...new Set(machineData.map((item) => item.customer)),
  ]);

  const handleSort = (value) => {
    console.log('handleSort', value, direction);
    const newDirection =
      direction && direction === 'ascending' ? 'descending' : 'ascending';

    setDirection(newDirection);
    setColumn(value);
    setDataList(
      _.orderBy(dataList, value, newDirection === 'ascending' ? 'asc' : 'desc'),
    );
  };

  const handleFilter = (value) => {
    setDataList(machineData.filter((data) => data.customer === value));
    setDirection('ascending');
    setColumn(null);
  };

  return (
    <Container>
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column>
              <Header as="h3" style={{ fontSize: '2em' }}>
                Dispatchers Page
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                We can give your company superpowers to do things that they
                never thought possible. Let us delight your customers and
                empower your needs... through pure data analytics.
              </p>
              {dataList && dataList.length > 0 && (
                <AssetTypeGraph data={dataList} />
              )}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column textAlign="center">
              <TableFilter
                customers={customers}
                handleFilter={handleFilter}
                column={column}
                direction={direction}
                setColumn={setColumn}
                setDirection={setDirection}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              {dataList && dataList.length > 0 && (
                <MachineDataTable
                  handleSort={handleSort}
                  customers={customers}
                  list={dataList}
                />
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  );
};

export default DispatcherMain;
