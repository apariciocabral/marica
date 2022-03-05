import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
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
import { useEventSpaces } from '../../Hooks/EventSpacesProvider';

export const EventSpace: React.FC = () => {
  const { eventSpace, getEventSpace, setEventSpace, isLoading, setCategories } =
    useEventSpaces();
  const { id } = useParams();

  useEffect(() => {
    setEventSpace(null);
    getEventSpace(parseInt(id ?? '', 10));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Header />
      <LoadingGate
        waitFor={isLoading === false}
        meanwhile={<LoadingCards show numberOfCards={4} />}
      >
        <CarouselSlider images={eventSpace?.images} />
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {eventSpace && (
                <>
                  <div className="d-flex mt-5 mb-3">
                    <PageTitle
                      title={eventSpace.nome}
                      subtitle="Espaços para eventos"
                      url="/espacos"
                    />
                  </div>
                  <Categories
                    categories={eventSpace.categorias}
                    url="espacos"
                    color="secondary"
                    setCategories={setCategories}
                  >
                    <Link to={`/espacos/categorias/${id}`} />
                  </Categories>
                  <div className="mb-3">
                    <p>{eventSpace.descricao_t}</p>
                  </div>

                  <About
                    title="Sobre"
                    addresses={eventSpace.addresses}
                    phone={eventSpace.phones}
                    email={eventSpace?.email}
                    site={eventSpace.site}
                    network={eventSpace?.redes}
                    hourFunction={eventSpace?.horario_funcionamento}
                  />

                  {Array.isArray(eventSpace?.estruturas) &&
                    eventSpace.estruturas.length > 0 && (
                      <Informations
                        title="Estruturas"
                        contents={eventSpace.estruturas}
                      />
                    )}

                  {Array.isArray(eventSpace?.formas_pagamento) &&
                    eventSpace?.formas_pagamento.length >= 1 && (
                      <Informations
                        title="Formas de Pagamento"
                        contents={eventSpace.formas_pagamento}
                      />
                    )}
                </>
              )}
            </div>
            <div className="col-lg-4">
              {eventSpace && <IframeMaps address={eventSpace?.addresses} />}
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
