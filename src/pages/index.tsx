import Image from 'next/image';
import Hero from './components/Hero';
export default function Home() {
  return (
    <>
      <Hero />
      <Image src='/images/icon/logo.svg' alt='Logo' width={100} height={100} />
    </>
  );
}
