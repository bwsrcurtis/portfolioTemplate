import About from './components/About.js';
import CardCont from './components/CardCont.js';
import Form from './components/Form.js';
import Hero from './components/Hero.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

export default function Home() {

  return (
    <>
      <Header />
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
