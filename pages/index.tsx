import Head from 'next/head';
import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Connect } from '../components/Connect';

export default function Home() {
  const scrollInto = (elementId: string) => {
    let element = document.getElementById(elementId);
    element && element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Layout>
      <Head>
        <title>Joemel Bituin</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Hero scrollInto={scrollInto} />
      <About scrollInto={scrollInto} />
      <Connect />
    </Layout>
  );
}
