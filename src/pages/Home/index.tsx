import { Header } from '../../components/Header';
import { Carousel } from '../../components/Carousel';
import { Footer } from '../../components/Footer';
import { MainHome } from '../../components/MainHome';

export const Home: React.FC = () => (
  <>
    <Header />
    <Carousel />
    <MainHome />
    <Footer />
  </>
);
