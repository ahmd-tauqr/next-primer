import Hero from '@/components/hero';
import aboutImg from 'public/scale.jpg';

export default function About() {
  return <Hero imageData={aboutImg} imageAlt='welding' title='About Us' />;
}
