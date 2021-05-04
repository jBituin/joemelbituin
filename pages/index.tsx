import Head from 'next/head';
import { Layout } from '../components';
import { Hero } from '../components';
import { About } from '../components';
import { Connect } from '../components';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Joemel Bituin - Full Stack JS Developer</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Hero />
      <About />
      <Connect />
    </Layout>
  );
}
