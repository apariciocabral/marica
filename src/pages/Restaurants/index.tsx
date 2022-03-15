import { useEffect } from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { PageTitle } from '../../components/PageTitle';
import Wrapper from '../../components/Wrapper';
import { useRestaurants } from '../../Hooks/RestaurantsProvider';
import RestaurantsCard from '../../components/RestaurantCard';
import { Categories } from '../../components/Categories';
import LoadingGate from '../../components/LoadingGate';
import LoadingCards from '../../components/LoadingCards';
import { SearchInput } from '../../components/SearchInput';
import LoadingPills from '../../components/LoadingPill';
import { setTitle } from '../../utils/title';

export const Restaurants: React.FC = () => {
  const { restaurants, getRestaurants, categories, isLoading } =
    useRestaurants();

  useEffect(() => {
    getRestaurants();
    setTitle('Bares e Restaurantes');
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (searchText: string): void => {
    getRestaurants(searchText);
  };

  return (
    <Wrapper>
      <Header />
      <div className="container">
        <div className="row">
          <div className="d-flex col-md-6">
            <PageTitle title="Bares e Restaurantes" />
          </div>
          <div className="d-flex col-md-6 justify-content-center">
            <Link
              to="/restaurants/mapa"
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
                placeholder="Buscar bares e restaurantes"
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
            <LoadingCards show numberOfCards={6} />
          </>
        }
      >
        <div className="container">
          <div className="row">
            <Categories
              categories={categories}
              url="restaurantes"
              color="secondary"
            />
          </div>
        </div>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {restaurants.map(restaurant => {
              return (
                <div key={restaurant.id} className="d-flex align-items-stretch">
                  <RestaurantsCard restaurant={restaurant} />
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
