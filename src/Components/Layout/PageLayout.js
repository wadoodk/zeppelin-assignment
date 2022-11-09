import { Container } from 'semantic-ui-react';
import Navigation from './Navigation';
const PageLayout = ({ children }) => {
  return (
    <Container>
      <Navigation />
      <main style={{ marginTop: '7em' }}>
        {children}
      </main>
    </Container>
  );
};

export default PageLayout;
