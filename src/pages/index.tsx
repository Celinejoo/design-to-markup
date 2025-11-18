import Gnb from './components/Gnb';
import Hero from './components/Hero';
import ImageSlider from './components/ImageSlider';
import ImageTab from './components/ImageTab';
import Video from './components/Video';
export default function Home() {
  return (
    <>
      <Gnb />
      <Hero />
      <Video />
      <ImageTab />
      <ImageSlider />
    </>
  );
}
