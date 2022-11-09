import { Container, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          Zeppelin Assignment
        </Menu.Item>
        <Menu.Item as="">
          <Link to="/">Dispatchers</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/service-staff">Service Staff</Link>
        </Menu.Item>
      </Container>
    </Menu>
  );
}

export default Navigation;
