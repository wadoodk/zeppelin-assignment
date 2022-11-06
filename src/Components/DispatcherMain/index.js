import React, { useState } from 'react';
import {
  Container,
  Grid,
  Header,
  Segment,
  // Sidebar,
} from 'semantic-ui-react';
import _ from 'lodash';
import machineData from '../../Data/machine_data';
import TableFilter from './TableFilter';
import MachineDataTable from './DataTable/MachineDataTable';

const DispatcherMain = () => {
  const [dataList, setDataList] = useState(machineData);
  const [customers] = useState([...new Set(machineData.map((item) => item.customer))]);

  const handleSort = (column, direction) => {
    console.log('handleSort', column, direction);
    setDataList(
      _.orderBy(dataList, column, direction === 'ascending' ? 'asc' : 'desc'),
    );
  };

  const handleFilter = (value) => {
    console.log('handleFilter', value);
    const list = machineData.filter((data) => data.customer === value);
    setDataList(list);
  };

  return (
    <Container>
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                We Help Companies and Companions
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                We can give your company superpowers to do things that they
                never thought possible. Let us delight your customers and
                empower your needs... through pure data analytics.
              </p>
              <Header as="h3" style={{ fontSize: '2em' }}>
                We Make Bananas That Can Dance
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Yes that's right, you thought it was the stuff of dreams, but
                even bananas can be bioengineered.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              {/* <Image
                bordered
                rounded
                size="large"
                src="/images/wireframe/white-image.png"
              /> */}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column textAlign="center">
              <TableFilter customers={customers} handleFilter={handleFilter} />
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
