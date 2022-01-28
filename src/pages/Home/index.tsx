import { useEffect } from 'react';
import { Header } from '../../components/Header';
import { Carousel } from '../../components/Carousel';
import { Footer } from '../../components/Footer';
import { MainHome } from '../../components/MainHome';
import { setTitle } from '../../utils/title';

export const Home: React.FC = () => {
  useEffect(() => {
    setTitle();
  }, []);

  return (
    <>
      <Header />
      <Carousel />
      <MainHome />
      <Footer />
    </>
  );
};
