import matter from 'gray-matter';
import About from './components/About.js';
import CardCont from './components/CardCont.js';
import Form from './components/Form.js';
import Hero from './components/Hero.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

export default async function Home() {
  const data = await getHeaderData();
  return (
    <>
      <Header data={data} />
      <main className="min-h-[calc(100vh-112px)] ">
        <Hero></Hero>
        <CardCont></CardCont>
        <About></About>
        <Form></Form>
      </main>
      <Footer />
    </>
  );
}

async function getHeaderData() {
  const content = await import('../../content/pages/Header/Header.md');
  const local = matter(content.default);
  const data = local.data;
  return data;
}
