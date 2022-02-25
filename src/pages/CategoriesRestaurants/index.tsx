import { useEffect } from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { PageTitle } from '../../components/PageTitle';
import Wrapper from '../../components/Wrapper';
import LoadingGate from '../../components/LoadingGate';
import LoadingCards from '../../components/LoadingCards';
import { SearchInput } from '../../components/SearchInput';
import { useRestaurants } from '../../Hooks/RestaurantsProvider';
import RestaurantsCard from '../../components/RestaurantCard';

export const RestaurantsByCategory: React.FC = () => {
  const {
    restaurants,
    isLoading,
    category,
    getRestaurants,
    getRestaurantsByCategory,
    setCategories,
  } = useRestaurants();
  const { id } = useParams();

  useEffect(() => {
    getRestaurantsByCategory(parseInt(id ?? '', 10));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (searchText: string): void => {
    getRestaurants(searchText);
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
                    subtitle="Bares e Restaurantes"
                    url="/restaurantes"
                    title={category?.label ?? 'Carregando...'}
                  />
                </div>
                <div className="btn btn-primary my-4 me-3" title="Ver no mapa">
                  <FaMapMarkedAlt className="me-2 fs-4" />
                  Mapa
                </div>
                <div className="my-4">
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
        </div>
        <div className="container">
          <div className="row row-cols-3">
            {restaurants.map(restaurant => {
              return (
                <div
                  key={restaurant.id}
                  className="col d-flex align-items-stretch"
                >
                  <RestaurantsCard
                    restaurant={restaurant}
                    addresses={restaurant.enderecos}
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
