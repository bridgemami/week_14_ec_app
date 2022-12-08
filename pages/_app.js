//bring in head component 
import Head from 'next/head';
//bring in bs css with responsive css media queries
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Module 14</title>
      </Head>
  <Component {...pageProps} />
    </>
  );
}

export default MyApp
