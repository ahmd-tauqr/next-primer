import Hero from '@/components/hero';
import servicesImg from 'public/reliability.jpg';

export default function Services() {
  return <Hero imageData={servicesImg} imageAlt='welding' title='Services' />;
}
