import Container from 'react-bootstrap/Container';
import TopNavigation from '../TopNavigation/TopNavigation';

export default function Layout({ children }) {
  return (
    <Container className='p-0' fluid>
      <TopNavigation />
      <main>{children}</main>
    </Container>
  );
}
