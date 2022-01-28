import { useEffect } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { setTitle } from '../../utils/title';
import { PageTitle } from '../../components/PageTitle';
import Wrapper from '../../components/Wrapper';

export const Spots: React.FC = () => {
  useEffect(() => {
    setTitle();
  }, []);

  return (
    <Wrapper>
      <Header />
      <PageTitle title="Pontos Turísticos" />
      <Footer />
    </Wrapper>
  );
};
