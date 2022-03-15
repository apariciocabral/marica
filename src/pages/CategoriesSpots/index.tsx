import { useEffect } from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { PageTitle } from '../../components/PageTitle';
import Wrapper from '../../components/Wrapper';
import { useSpots } from '../../Hooks/SpotsProvider';
import SpotsCard from '../../components/SpotCard';
import LoadingGate from '../../components/LoadingGate';
import LoadingCards from '../../components/LoadingCards';
import { SearchInput } from '../../components/SearchInput';
import { setTitle } from '../../utils/title';

export const SpotsByCategory: React.FC = () => {
  const { spots, isLoading, category, getSpots, getSpotsByCategory } =
    useSpots();
  const { id } = useParams();

  useEffect(() => {
    getSpotsByCategory(parseInt(id ?? '', 10));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTitle(`${category?.label ?? 'Loading...'} | Pontos Turísticos`);
  }, [category]);

  const handleSearch = (searchText: string): void => {
    getSpots(searchText);
  };

  return (
    <Wrapper>
      <Header />
      <LoadingGate
        waitFor={isLoading === false}
        meanwhile={<LoadingCards show numberOfCards={4} />}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="d-flex mt-5 mb-3">
                <div className="flex-grow-1">
                  <PageTitle
                    subtitle="Pontos Turísticos"
                    url="/pontos"
                    title={category?.label ?? 'Carregando...'}
                  />
                </div>
                <Link
                  to="/pontos/mapa"
                  className="btn btn-primary my-4 py-2 px-3 me-3 d-flex"
                  title="Ver no mapa"
                >
                  <FaMapMarkedAlt className="me-2 fs-4 text-white" />
                  <span>Mapa</span>
                </Link>
                <div className="my-4">
                  <SearchInput
                    className="input"
                    type="search"
                    onSearch={handleSearch}
                    placeholder="Buscar pontos turísticos"
                    aria-label="Search"
                  >
                    <AiOutlineSearch className="fs-4" />
                  </SearchInput>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row row-cols-3">
            {spots.map(spot => {
              return (
                <div key={spot.id} className="col d-flex align-items-stretch">
                  <SpotsCard spot={spot} />
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
