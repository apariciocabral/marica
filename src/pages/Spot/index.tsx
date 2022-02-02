import { useEffect } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { PageTitle } from '../../components/PageTitle';
import Wrapper from '../../components/Wrapper';
import { useSpots } from '../../Hooks/SpotsProvider';
import LoadingGate from '../../components/LoadingGate';
import LoadingCards from '../../components/LoadingCards';
import { Categories } from '../../components/Categories';

export const Spots: React.FC = () => {
  const { spot, getSpot, categories, isLoading } = useSpots();

  useEffect(() => {
    getSpot();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spot]);

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
              <PageTitle title="Pontos Turísticos" />
            </div>
          </div>
          <div className="container">
            <div className="row">
              <Categories
                categories={categories}
                url="/pontos"
                color="secondary"
              />
            </div>
          </div>
          <div className="col-8">
            <h5 className="text-primary fw-bold card-title">Description:</h5>
            <p className="text-primary my-3 text-justify">
              {spot?.nome ? spot.capa : 'Unknown'}
            </p>
            <h5 className="text-primary fw-bold">Modified Data:</h5>
            <h5 className="text-primary fw-bold">ID number:</h5>
            <p className="text-primary">{spot?.id}</p>
          </div>
        </div>
      </LoadingGate>
      <Footer />
    </Wrapper>
  );
};
