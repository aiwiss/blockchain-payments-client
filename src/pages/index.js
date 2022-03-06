import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useContext, useEffect, useState } from 'react';
import { Web3Context } from '../context/Web3Context';

export default function Home() {
  const [account, setAccount] = useState();
  const web3 = useContext(Web3Context);

  useEffect(() => {
    async function load() {
      const accounts = await web3.eth.requestAccounts();
      setAccount(accounts[0]);
    }

    load();
  }, [web3]);

  return (
    <>
      <Row className='justify-content-start gx-0'>
        <Col>
          <h3 className='m-4'>
            Welcome to DApp for depositing ETH with approval
          </h3>
        </Col>
      </Row>
      <Row className='justify-content-start gx-0'>
        <Col>
          <h5 className='m-4'>Your account: {account}</h5>
        </Col>
      </Row>
      <Row className='justify-content-start gx-0'>
        <Col md={6} s={12}>
          <Form className='m-5'>
            <Form.Group className='mb-3' controlId='transfer.sender'>
              <Form.Label>Sender ETH address</Form.Label>
              <Form.Control placeholder='Please enter your address' />
            </Form.Group>
            <Form.Group className='mb-5' controlId='transfer.recipient'>
              <Form.Label>Recipient ETH address</Form.Label>
              <Form.Control placeholder='Please enter recipient address' />
            </Form.Group>
            <Button variant='outline-primary' className='w-100'>
              Send money
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
}
