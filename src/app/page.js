'use client';

import About from './components/About.js';
import CardCont from './components/CardCont.js';
import Form from './components/Form.js';
import Hero from './components/Hero.js';
import { useAppContext } from './layout.js';

export default function Home() {
  const data = useAppContext();

  return (
    <main className="min-h-[calc(100vh-112px)]">
      <Hero heroTitle={data.hero_title}></Hero>
      <CardCont></CardCont>
      <About image={data.about_img}
        aboutText1={data.about_text1}
        aboutText2={data.about_text2}></About>
      <Form></Form>
    </main>
  );
}
