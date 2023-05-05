import Hero from './components/Hero';
import Examples from './components/Examples';
import Offerings from './components/Offerings';
import GetStarted from './components/GetStarted';

export default function Home() {
  return (
    <main className="bg-secondary min-h-[calc(100vh-112px)]">
      <Hero></Hero>
      <Offerings></Offerings>
      <Examples></Examples>
      <GetStarted></GetStarted>
    </main>
  );
}
