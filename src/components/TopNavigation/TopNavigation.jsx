import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default function TopNavigation() {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container className='justify-content-start'>
        <Navbar.Brand href='/'>DApp</Navbar.Brand>
        <Nav>
          <Nav.Link href='/'>Transfer</Nav.Link>
          <Nav.Link href='/balance'>Balance</Nav.Link>
          <Nav.Link href='/approver'>Approver</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
