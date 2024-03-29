import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaMotorcycle } from 'react-icons/fa';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { PageTitle } from '../../components/PageTitle';
import Wrapper from '../../components/Wrapper';
import LoadingGate from '../../components/LoadingGate';
import LoadingCards from '../../components/LoadingCards';
import Informations from '../../components/Informations';
import About from '../../components/About';
import { DownloadApp } from '../../components/DownloadApp';
import IframeMaps from '../../components/Maps';
import CarouselSlider from '../../components/Slider';
import { Categories } from '../../components/Categories';
import { useRestaurants } from '../../Hooks/RestaurantsProvider';
import { PriceRange } from '../../components/PriceRange';
import { PillDelivery } from './styles';
import { setTitle } from '../../utils/title';

export const Restaurant: React.FC = () => {
  const { restaurant, getRestaurant, setRestaurant, isLoading } =
    useRestaurants();
  const { id } = useParams();

  useEffect(() => {
    setRestaurant(null);
    getRestaurant(parseInt(id ?? '', 10));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTitle(`${restaurant?.nome ?? 'Loading...'} | Bares e Restaurantes`);
  }, [restaurant]);

  return (
    <Wrapper>
      <Header />
      <LoadingGate
        waitFor={isLoading === false}
        meanwhile={<LoadingCards show numberOfCards={4} />}
      >
        <CarouselSlider images={restaurant?.images} />
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {restaurant && (
                <>
                  <div className="d-flex mt-5 mb-3">
                    <PageTitle
                      title={restaurant.nome}
                      subtitle="Bares e Restaurantes"
                      url="/restaurantes"
                    />
                  </div>
                  <Categories
                    categories={restaurant.categorias}
                    url="restaurantes"
                    color="secondary"
                  >
                    <Link to={`/restaurantes/categorias/${id}`} />
                  </Categories>
                  {!!restaurant.is_delivery && (
                    <div className="mb-4">
                      <PillDelivery className="px-4 py-2">
                        <FaMotorcycle className="me-2 fs-4" />
                        Delivery
                      </PillDelivery>
                    </div>
                  )}
                  <div className="mb-3">
                    <p>{restaurant.descricao_t}</p>
                  </div>
                  <About
                    title="Sobre"
                    addresses={restaurant.addresses}
                    phone={restaurant.phones}
                    email={restaurant?.email}
                    site={restaurant.site}
                    network={restaurant?.redes}
                    hourFunction={restaurant?.horario_funcionamento}
                  />

                  {restaurant.faixa_preco && (
                    <PriceRange
                      title="Faixa de Preço"
                      amount={restaurant.faixa_preco}
                    />
                  )}

                  {Array.isArray(restaurant?.refeicoes) &&
                    restaurant.refeicoes.length > 0 && (
                      <Informations
                        title="Refeições"
                        contents={restaurant.refeicoes}
                      />
                    )}

                  {Array.isArray(restaurant?.cozinhas) &&
                    restaurant.cozinhas.length > 0 && (
                      <Informations
                        title="Cozinhas"
                        contents={restaurant.cozinhas}
                      />
                    )}

                  {Array.isArray(restaurant?.estruturas) &&
                    restaurant.estruturas.length > 0 && (
                      <Informations
                        title="Estruturas"
                        contents={restaurant.estruturas}
                      />
                    )}

                  {Array.isArray(restaurant?.restricoes) &&
                    restaurant?.restricoes.length >= 1 && (
                      <Informations
                        title="Restrições"
                        contents={restaurant.restricoes}
                      />
                    )}

                  {Array.isArray(restaurant?.formas_pagamento) &&
                    restaurant?.formas_pagamento.length >= 1 && (
                      <Informations
                        title="Restrições"
                        contents={restaurant.formas_pagamento}
                      />
                    )}
                </>
              )}
            </div>
            <div className="col-lg-4">
              {restaurant && <IframeMaps address={restaurant?.addresses} />}
              <div className="mt-4">
                <DownloadApp />
              </div>
            </div>
          </div>
        </div>
      </LoadingGate>
      <Footer />
    </Wrapper>
  );
};
