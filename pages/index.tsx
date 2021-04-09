import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Connect } from '../components/Connect';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Connect />
    </Layout>
  );
}
