import Layout from '../components/Layout/Layout';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import { Web3Context } from '../context/Web3Context';
import Web3 from 'web3';

const web3Instance = new Web3(Web3.givenProvider || 'http://localhost:7545');

function MyApp({ Component, pageProps }) {
  return (
    <Web3Context.Provider value={web3Instance}>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </Web3Context.Provider>
  );
}

export default MyApp;
