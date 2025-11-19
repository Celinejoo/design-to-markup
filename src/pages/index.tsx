import { useInView } from 'react-intersection-observer';
import Gnb from './components/Gnb';
import Hero from './components/Hero';
import ImageSlider from './components/ImageSlider';
import ImageTab from './components/ImageTab';
import Video from './components/Video';

export default function Home() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <>
      <Gnb isScrolled={!inView} />
      <div ref={ref} style={{ height: '1px' }}></div>
      <Hero />
      <Video />
      <ImageTab />
      <ImageSlider />
    </>
  );
}
