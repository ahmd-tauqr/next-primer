import Hero from '@/components/hero';
import homeImg from 'public/home.jpg';

export default function Home() {
  return (
    <Hero imageData={homeImg} imageAlt='car factory' title='Next Primer' />
  );
}
