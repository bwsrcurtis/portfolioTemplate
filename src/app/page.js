import Form from './components/Form.js';
import Hero from './components/Hero.js';

export default function Home() {
  return (
    <main className=" min-h-[calc(100vh-112px)]">
      <Hero></Hero>
      <Form></Form>
    </main>
  );
}
