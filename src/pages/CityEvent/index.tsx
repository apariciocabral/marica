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
import LoadingPills from '../../components/LoadingPill';
import LoadingOnlyCards from '../../components/LoadingOnlyCard';
import { setTitle } from '../../utils/title';

export const getDate = (isoDate: string): string => {
  const isInvalid = new Date(isoDate).toString() === 'Invalid Date';
  if (isInvalid) return 'Invalid Date';

  return new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(isoDate));
};

export const CityEvent: React.FC = () => {
  const { cityEvent, getCityEvent, setCityEvent, isLoading } = useCityEvents();
  const { id } = useParams();

  useEffect(() => {
    setCityEvent(null);
    getCityEvent(parseInt(id ?? '', 10));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTitle(`${cityEvent?.nome ?? 'Loading...'} | Eventos`);
  }, [cityEvent]);

  return (
    <Wrapper>
      <Header />
      <LoadingGate
        waitFor={isLoading === false}
        meanwhile={
          <>
            <LoadingOnlyCards show amount={4} />
            <LoadingPills show amount={4} />
            <LoadingCards show amount={4} />
          </>
        }
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
                  >
                    <Link to={`/eventos/categorias/${id}`} />
                  </Categories>

                  <div className="fs-5">
                    De: {getDate(cityEvent?.datahora_inicio_f ?? '')}h
                  </div>
                  <div className="fs-5">
                    Até: {getDate(cityEvent?.datahora_fim_f ?? '')}h
                  </div>
                  {cityEvent.descricao_t && (
                    <div className="my-3 fs-5 flex-column">
                      <p>{cityEvent.descricao_t}</p>
                    </div>
                  )}
                  <About title="Sobre" addresses={cityEvent.addresses} />

                  {cityEvent.gratuito && (
                    <InputValue
                      title="Valor da Entrada"
                      preco_t={cityEvent.preco_t ?? ''}
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
                  {Array.isArray(cityEvent?.formas_pagamento) &&
                    cityEvent?.formas_pagamento.length >= 1 && (
                      <Informations
                        title="Formas de Pagamento"
                        contents={cityEvent.formas_pagamento}
                      />
                    )}
                </>
              )}
            </div>
            <div className="col-lg-4">
              {cityEvent && <IframeMaps address={cityEvent?.addresses} />}
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
