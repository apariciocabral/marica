/* eslint-disable react/no-danger */
import { useEffect } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import Wrapper from '../../components/Wrapper';
import { PageTitle } from '../../components/PageTitle';
import { MaricaBackground } from './styles';
import { useAboutCity } from '../../Hooks/AboutCity';

export const AboutCity: React.FC = () => {
  const { aboutCity, getAboutCity } = useAboutCity();

  useEffect(() => {
    getAboutCity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Header />
      <MaricaBackground>
        <div className="picture" />
        <div className="container">
          <div className="main">
            <div className="mainText p-5">
              <div className="d-flex align-items-center fs-3">
                <PageTitle title="Conheça Maricá" />
              </div>
              <div dangerouslySetInnerHTML={{ __html: aboutCity }} />
            </div>
          </div>
        </div>
      </MaricaBackground>
      <Footer />
    </Wrapper>
  );
};
