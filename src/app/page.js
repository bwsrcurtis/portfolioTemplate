import About from './components/About.js';
import CardCont from './components/CardCont.js';
import Form from './components/Form.js';
import Hero from './components/Hero.js';
import matter from 'gray-matter';

export default async function Home() {
  const content = await import('../../content/pages/home.md');
  const local = matter(content.default);
  const data = local.data;


  return (
    <main className=" min-h-[calc(100vh-112px)]">
      <Hero heroTitle={data.hero_title}></Hero>
      <CardCont></CardCont>
      <About></About>
      <Form></Form>
    </main>
  );
}
