import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { PageTitle } from '../../components/PageTitle';
import Wrapper from '../../components/Wrapper';
import { useCityEvents } from '../../Hooks/CityEventsProvider';
import { Categories } from '../../components/Categories';
import LoadingGate from '../../components/LoadingGate';
import LoadingCards from '../../components/LoadingCards';
import Informations from '../../components/Informations';
import About from '../../components/About';
import InputValue from '../../components/InputValue';
import { DownloadApp } from '../../components/DownloadApp';
import IframeMaps from '../../components/Maps';
import CarouselSlider from '../../components/Slider';

export const CityEvent: React.FC = () => {
  const { cityEvent, getCityEvent, setCityEvent, isLoading, setCategories } =
    useCityEvents();
  const { id } = useParams();

  useEffect(() => {
    setCityEvent(null);
    getCityEvent(parseInt(id ?? '', 10));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Header />
      <LoadingGate
        waitFor={isLoading === false}
        meanwhile={<LoadingCards show numberOfCards={4} />}
      >
        <CarouselSlider images={cityEvent?.images} />
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {cityEvent && (
                <>
                  <div className="d-flex mt-5 mb-3">
                    <PageTitle
                      title={cityEvent?.nome}
                      subtitle="Eventos"
                      url="/eventos"
                    />
                  </div>

                  <Categories
                    categories={cityEvent.categorias}
                    url="eventos"
                    color="secondary"
                    setCategories={setCategories}
                  >
                    <Link to={`/eventos/categorias/${id}`} />
                  </Categories>

                  <div className="mb-3">
                    <p>{cityEvent.descricao_t}</p>
                  </div>

                  <About
                    title="Sobre"
                    addresses={cityEvent.enderecos}
                    phone={cityEvent.phones}
                    email={cityEvent?.email}
                    network={cityEvent?.redes}
                    hourFunction={cityEvent?.horario_funcionamento}
                    site={cityEvent?.site}
                  />

                  {cityEvent.preco_t && (
                    <InputValue
                      title="Valor da Entrada"
                      preco_t={cityEvent.preco_t}
                      isFree={!!cityEvent.gratuito}
                    />
                  )}
                  {Array.isArray(cityEvent?.estruturas) &&
                    cityEvent?.estruturas.length >= 1 && (
                      <Informations
                        title="Estruturas"
                        contents={cityEvent.estruturas}
                      />
                    )}
                  {Array.isArray(cityEvent?.restricoes) &&
                    cityEvent?.restricoes.length >= 1 && (
                      <Informations
                        title="Restrições"
                        contents={cityEvent.restricoes}
                      />
                    )}
                </>
              )}
            </div>
            <div className="col-lg-4">
              {cityEvent && <IframeMaps address={cityEvent?.enderecos} />}
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
