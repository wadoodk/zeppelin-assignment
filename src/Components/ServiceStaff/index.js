import {useState}from 'react'
import {
  // Button,
  Container,
  Divider,
  Grid,
  Header,
  List,
  Segment,
} from 'semantic-ui-react';
import machineData from '../../Data/machine_data';
import QRCodeScanner from './QRCodeScanner';
import SearchSerialForm from './SearchSerialForm';

const ServiceStaff = () => {
  const [answer, setAnswer] = useState(null);
  const handleSearchSubmit = (input) => {};
  const onQrReaderCapture= (data) => {
    console.log("onQrReaderCapture", typeof data, data);
    if (data?.serial_number) {
      setAnswer(machineData.find(x => x.serial_number === data?.serial_number))
    }
  }
  return (
    <Container>
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                Compare product using QR code scanner or by entering serial
                number
              </Header>
              <SearchSerialForm />
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Grid.Row>
                <QRCodeScanner  onQrReaderCapture={onQrReaderCapture}/>
              </Grid.Row>
              {/* <Grid.Row>
                <Button size="huge">Check Them Out</Button>
              </Grid.Row> */}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row></Grid.Row>
        </Grid>
      </Segment>
    </Container>
  );
};

export default ServiceStaff;
