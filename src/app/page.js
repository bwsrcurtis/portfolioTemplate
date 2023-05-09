'use client';

import matter from 'gray-matter';
import About from './components/About.js';
import CardCont from './components/CardCont.js';
import Form from './components/Form.js';
import Hero from './components/Hero.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

export default async function Home() {

  const content = await import('../../content/pages/home.md');
  const local = matter(content.default);
  const data = local.data;

  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-112px)]">
        <Hero heroTitle={data.hero_title}></Hero>
        <CardCont></CardCont>
        <About image={data.about_img}
          aboutText1={data.about_text1}
          aboutText2={data.about_text2}></About>
        <Form></Form>
      </main>
      <Footer />
    </>
  );
}
