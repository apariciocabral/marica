import { useEffect } from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { PageTitle } from '../../components/PageTitle';
import Wrapper from '../../components/Wrapper';
import { useCityEvents } from '../../Hooks/CityEventsProvider';
import { Categories } from '../../components/Categories';
import LoadingGate from '../../components/LoadingGate';
import LoadingCards from '../../components/LoadingCards';
import { SearchInput } from '../../components/SearchInput';
import CityEventsCard from '../../components/CityEventCard';
import LoadingPills from '../../components/LoadingPill';
import { setTitle } from '../../utils/title';

export const CityEvents: React.FC = () => {
  const { cityEvents, getCityEvents, categories, isLoading } = useCityEvents();

  useEffect(() => {
    getCityEvents();
    setTitle('Eventos');
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (searchText: string): void => {
    getCityEvents(searchText);
  };

  return (
    <Wrapper>
      <Header />
      <div className="container">
        <div className="row">
          <div className="d-flex col-md-6">
            <PageTitle title="Eventos" />
          </div>
          <div className="d-flex col-md-6 justify-content-end">
            <Link
              to="/eventos/mapa"
              className="btn btn-primary my-4 py-2 px-3 me-3 d-flex"
              title="Ver no mapa"
            >
              <FaMapMarkedAlt className="me-2 fs-4 text-white" />
              <span>Mapa</span>
            </Link>
            <div className="my-4 flex-grow-1">
              <SearchInput
                className="input"
                type="search"
                onSearch={handleSearch}
                placeholder="Buscar eventos"
                aria-label="Search"
              >
                <AiOutlineSearch className="fs-4" />
              </SearchInput>
            </div>
          </div>
        </div>
      </div>
      <LoadingGate
        waitFor={isLoading === false}
        meanwhile={
          <>
            <LoadingPills show amount={9} />
            <LoadingCards show amount={3} />
          </>
        }
      >
        <div className="container">
          <div className="row">
            <Categories
              categories={categories}
              url="eventos"
              color="secondary"
            />
          </div>
        </div>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {cityEvents.map(cityEvent => {
              return (
                <div
                  key={cityEvent.id}
                  className="col d-flex align-items-stretch"
                >
                  <CityEventsCard cityEvent={cityEvent} />
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
