import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { PageTitle } from '../../components/PageTitle';
import Wrapper from '../../components/Wrapper';
import { useSpots } from '../../Hooks/SpotsProvider';
import { Categories } from '../../components/Categories';
import LoadingGate from '../../components/LoadingGate';
import LoadingCards from '../../components/LoadingCards';
import Informations from '../../components/Informations';
import About from '../../components/About';
import Tips from '../../components/Tips';
import InputValue from '../../components/InputValue';
import Travellers from '../../components/Travellers';
import Payments from '../../components/Payments';
import SpotSlider from '../../components/Slider';
import { DownloadApp } from '../../components/DownloadApp';
import IframeMaps from '../../components/Maps';

export const TouristSpot: React.FC = () => {
  const { spot, getSpot, setSpot, isLoading, setCategories } = useSpots();
  const { id } = useParams();

  useEffect(() => {
    setSpot(null);
    getSpot(parseInt(id ?? '', 10));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Header />
      <LoadingGate
        waitFor={isLoading === false}
        meanwhile={<LoadingCards show numberOfCards={4} />}
      >
        <SpotSlider images={spot?.images} />
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {spot && (
                <>
                  <div className="d-flex mt-5 mb-3">
                    <PageTitle
                      title={spot?.nome}
                      subtitle="Pontos Turísticos"
                      url="/pontos"
                    />
                  </div>

                  <Categories
                    categories={spot.categorias}
                    url="/pontos"
                    color="secondary"
                    setCategories={setCategories}
                  />

                  <div className="mb-3">
                    <p>{spot.descricao_t}</p>
                  </div>

                  <About
                    title="Sobre"
                    addresses={spot.addresses}
                    phone={spot.phones}
                    email={spot?.email}
                    network={spot?.redes}
                    hourFunction={spot?.horario_funcionamento}
                  />

                  {spot.dicas_t && (
                    <Tips title="Dicas" dicas_t={spot.dicas_t} />
                  )}

                  {spot.preco_t && (
                    <InputValue
                      title="Valor da Entrada"
                      preco_t={spot.preco_t}
                    />
                  )}

                  {Array.isArray(spot?.viajantes) &&
                    spot?.viajantes.length >= 1 && (
                      <Travellers
                        title="Viajantes"
                        label={spot.label}
                        viajantes={spot.viajantes}
                      />
                    )}

                  {Array.isArray(spot?.estruturas) &&
                    spot?.estruturas.length >= 1 && (
                      <Informations
                        title="Estruturas"
                        estruturas={spot.estruturas}
                      />
                    )}
                  {Array.isArray(spot?.restricoes) &&
                    spot?.restricoes.length >= 1 && (
                      <Informations
                        title="Restrições"
                        estruturas={spot.restricoes}
                      />
                    )}
                  {Array.isArray(spot?.formas_pagamento) &&
                    spot?.formas_pagamento.length >= 1 && (
                      <Payments
                        title="Formas de Pagamento"
                        icone={spot.icone}
                        label={spot.label}
                        formas_pagamento={spot.formas_pagamento}
                      />
                    )}
                </>
              )}
            </div>
            <div className="col-lg-4">
              {spot && <IframeMaps address={spot?.addresses} />}
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
