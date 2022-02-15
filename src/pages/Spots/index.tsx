import { useEffect } from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { PageTitle } from '../../components/PageTitle';
import Wrapper from '../../components/Wrapper';
import { useSpots } from '../../Hooks/SpotsProvider';
import SpotsCard from '../../components/SpotCard';
import { Search } from './styles';
import { Categories } from '../../components/Categories';
import LoadingGate from '../../components/LoadingGate';
import LoadingCards from '../../components/LoadingCards';

export const Spots: React.FC = () => {
  const { spots, getSpots, categories, isLoading } = useSpots();

  useEffect(() => {
    getSpots();
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
              <PageTitle title="Pontos Turísticos" />
            </div>
            <div className="d-flex col-md-6 justify-content-end">
              <div className="btn btn-primary my-4 me-3" title="Ver no mapa">
                <FaMapMarkedAlt className="me-2 fs-4" />
                Mapa
              </div>
              <Search className="my-4 d-flex pe-2">
                <input
                  className="input form-control"
                  type="search"
                  placeholder="Buscar Pontos Turísticos"
                  aria-label="Search"
                />
                <AiOutlineSearch className="fs-4" />
              </Search>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <Categories
              categories={categories}
              url="pontos"
              color="secondary"
            />
          </div>
        </div>
        <div className="container">
          <div className="row row-cols-3">
            {spots.map(spot => {
              return (
                <div key={spot.id} className="col d-flex align-items-stretch">
                  <SpotsCard spot={spot} addresses={spot.enderecos} />
                </div>
              );
            })}
          </div>
        </div>
      </LoadingGate>
      <Footer />
    </Wrapper>
  );
};
