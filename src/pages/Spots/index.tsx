import { useEffect } from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { PageTitle } from '../../components/PageTitle';
import Wrapper from '../../components/Wrapper';
import { useSpots } from '../../Hooks/SpotsProvider';
import SpotsCard from '../../components/SpotCard';
import { Pill, Search } from './styles';

export const Spots: React.FC = () => {
  const { spots, getSpots } = useSpots();

  useEffect(() => {
    getSpots();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Header />
      <div className="container">
        <div className="row">
          <div className="d-flex col-md-6">
            <PageTitle title="Pontos Turísticos" />
          </div>
          <div className="d-flex col-md-6">
            <Pill className="button my-4 me-3" title="Ver no mapa">
              <FaMapMarkedAlt className="me-2 fs-4" />
              Mapa
            </Pill>
            <Search className="my-4">
              <form className="d-flex">
                <input
                  className="form-control input"
                  type="search"
                  placeholder="Buscar Pontos Turísticos"
                  aria-label="Search"
                />
              </form>
              <AiOutlineSearch className="fs-4 ms-5" />
            </Search>
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
      <Footer />
    </Wrapper>
  );
};
