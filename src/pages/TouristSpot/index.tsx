import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { PageTitle } from '../../components/PageTitle';
import Wrapper from '../../components/Wrapper';
import { useSpots } from '../../Hooks/SpotsProvider';
import { Categories } from '../../components/Categories';
import LoadingGate from '../../components/LoadingGate';
import LoadingCards from '../../components/LoadingCards';
import Informations from '../../components/Informations';
import About from '../../components/About';

export const TouristSpot: React.FC = () => {
  const { spot, getSpot, setSpot, isLoading } = useSpots();
  const { id } = useParams();

  useEffect(() => {
    setSpot(null);
    getSpot(parseInt(id ?? '', 10));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Header />
      <LoadingGate
        waitFor={isLoading === false}
        meanwhile={<LoadingCards show numberOfCards={4} />}
      >
        <div className="container">
          <div className="row">
            <div className="d-flex col-md-6">
              <PageTitle title={spot?.nome ?? 'Carregando...'} />
            </div>
            ,
            {spot && (
              <>
                <Categories
                  categories={spot.categorias}
                  url="/pontos"
                  color="secondary"
                />
                <div className="mb-3">
                  <p>{spot.descricao_t}</p>
                </div>

                <About
                  title="Sobre"
                  addresses={spot.addresses}
                  phone={spot.phones}
                  email={spot?.email}
                  network={spot?.redes}
                  hourFunction={spot?.horario_funcionamento}
                />

                {Array.isArray(spot?.estruturas) &&
                  spot?.estruturas.length > 1 && (
                    <Informations
                      title="Estruturas"
                      estruturas={spot.estruturas}
                    />
                  )}
                <Informations title="Restrições" estruturas={spot.restricoes} />
              </>
            )}
          </div>
        </div>
      </LoadingGate>
      <Footer />
    </Wrapper>
  );
};
