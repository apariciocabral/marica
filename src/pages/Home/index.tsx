import { Header } from '../../components/Header';
import { Carousel } from '../../components/Carousel';
import { Footer } from '../../components/Footer';
import { CardHome } from '../../components/CardHome';

export const Home: React.FC = () => (
  <>
    <Header />
    <Carousel />
    <CardHome />
    <Footer />
  </>
);
