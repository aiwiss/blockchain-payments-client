import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
  return (
    <>
      <Row className='justify-content-start'>
        <Col>
          <h3 className='m-4'>
            Welcome to DApp for depositing ETH with approval
          </h3>
        </Col>
      </Row>
    </>
  );
}
