import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { PageTitle } from '../../components/PageTitle';
import Wrapper from '../../components/Wrapper';
import { useTrades } from '../../Hooks/TradesProvider';
import { Categories } from '../../components/Categories';
import LoadingGate from '../../components/LoadingGate';
import LoadingCards from '../../components/LoadingCards';
import Informations from '../../components/Informations';
import About from '../../components/About';
import { DownloadApp } from '../../components/DownloadApp';
import IframeMaps from '../../components/Maps';
import CarouselSlider from '../../components/Slider';

export const Trade: React.FC = () => {
  const { trade, getTrade, setTrade, isLoading, setCategories } = useTrades();
  const { id } = useParams();

  useEffect(() => {
    setTrade(null);
    getTrade(parseInt(id ?? '', 10));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Header />
      <LoadingGate
        waitFor={isLoading === false}
        meanwhile={<LoadingCards show numberOfCards={4} />}
      >
        <CarouselSlider images={trade?.images} />
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {trade && (
                <>
                  <div className="d-flex mt-5 mb-3">
                    <PageTitle
                      title={trade?.nome}
                      subtitle="Comércio Local"
                      url="/comercios"
                    />
                  </div>

                  <Categories
                    categories={trade.categorias}
                    url="comercios"
                    color="secondary"
                    setCategories={setCategories}
                  >
                    <Link to={`/comercios/categorias/${id}`} />
                  </Categories>

                  <div className="mb-3">
                    <p>{trade.descricao_t}</p>
                  </div>

                  <About
                    title="Sobre"
                    addresses={trade.addresses}
                    phone={trade.phones}
                    email={trade?.email}
                    network={trade?.redes}
                    hourFunction={trade?.horario_funcionamento}
                    site={trade?.site}
                  />

                  {Array.isArray(trade?.estruturas) &&
                    trade?.estruturas.length >= 1 && (
                      <Informations
                        title="Estruturas"
                        contents={trade.estruturas}
                      />
                    )}
                  {Array.isArray(trade?.restricoes) &&
                    trade?.restricoes.length >= 1 && (
                      <Informations
                        title="Restrições"
                        contents={trade.restricoes}
                      />
                    )}

                  {Array.isArray(trade?.formas_pagamento) &&
                    trade?.formas_pagamento.length >= 1 && (
                      <Informations
                        title="Formas de Pagamento"
                        contents={trade.formas_pagamento}
                      />
                    )}
                </>
              )}
            </div>
            <div className="col-lg-4">
              {trade && <IframeMaps address={trade?.addresses} />}
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
