import { useEffect } from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { PageTitle } from '../../components/PageTitle';
import Wrapper from '../../components/Wrapper';
import { useRestaurants } from '../../Hooks/RestaurantsProvider';
import RestaurantsCard from '../../components/RestaurantCard';
import { Search } from './styles';
import { Categories } from '../../components/Categories';
import LoadingGate from '../../components/LoadingGate';
import LoadingCards from '../../components/LoadingCards';

export const Restaurants: React.FC = () => {
  const { restaurants, getRestaurants, categories, isLoading, setCategories } =
    useRestaurants();

  useEffect(() => {
    getRestaurants();
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
              <PageTitle title="Bares e Restaurantes" />
            </div>
            <form className="d-flex col-md-6 justify-content-end">
              <div className="btn btn-primary my-4 me-3" title="Ver no mapa">
                <FaMapMarkedAlt className="me-2 fs-4" />
                Mapa
              </div>
              <Search className="my-4 d-flex">
                <input
                  className="input form-control"
                  type="search"
                  placeholder="Buscar Bares e Restaurantes"
                  aria-label="Search"
                />
                <AiOutlineSearch className="fs-4" />
              </Search>
            </form>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <Categories
              categories={categories}
              url={`/restaurantes/${categories}`}
              color="secondary"
              setCategories={setCategories}
            />
          </div>
        </div>
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
            {restaurants.map(restaurant => {
              return (
                <div key={restaurant.id} className="col d-flex flex-column">
                  <RestaurantsCard
                    restaurant={restaurant}
                    setCategories={setCategories}
                  />
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
