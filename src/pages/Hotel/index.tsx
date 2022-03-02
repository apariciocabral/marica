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
import { useHotels } from '../../Hooks/HotelsProvider';
import CarouselSlider from '../../components/Slider';
import Accommodation from '../../components/Accommodations';
import { Categories } from '../../components/Categories';

export const Hotel: React.FC = () => {
  const { hotel, getHotel, setHotel, isLoading, setCategories } = useHotels();
  const { id } = useParams();

  useEffect(() => {
    setHotel(null);
    getHotel(parseInt(id ?? '', 10));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Header />
      <LoadingGate
        waitFor={isLoading === false}
        meanwhile={<LoadingCards show numberOfCards={4} />}
      >
        <CarouselSlider images={hotel?.images} />
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {hotel && (
                <>
                  <div className="d-flex mt-5 mb-3">
                    <PageTitle
                      title={hotel.nome}
                      subtitle="Hotéis e Pousadas"
                      url="/hoteis-e-pousadas"
                    />
                  </div>

                  <Categories
                    categories={hotel.categorias}
                    url="/hoteis-e-pousadas"
                    color="secondary"
                    setCategories={setCategories}
                  >
                    <Link to={`/bares-e-restaurantes/categorias/${id}`} />
                  </Categories>

                  <div className="mb-3">
                    <p>{hotel.descricao_t}</p>
                  </div>

                  <About
                    title="Sobre"
                    addresses={hotel.addresses}
                    phone={hotel.phones}
                    email={hotel?.email}
                    site={hotel?.site}
                    network={hotel?.redes}
                    hourFunction={hotel?.horario_funcionamento}
                  />

                  <Accommodation
                    title="Comodidades"
                    quartos={hotel.quartos}
                    cafe_manha={hotel.cafe_manha}
                    cafe_hospedes={hotel.cafe_hospedes}
                    leitos={hotel.leitos}
                    almoco={hotel.almoco}
                    almoco_hospedes={hotel.almoco_hospedes}
                    jantar={hotel.jantar}
                    jantar_hospedes={hotel.jantar_hospedes}
                  />

                  {Array.isArray(hotel?.estruturas) &&
                    hotel?.estruturas.length >= 1 && (
                      <Informations
                        title="Estruturas"
                        contents={hotel.estruturas}
                      />
                    )}
                  {Array.isArray(hotel?.restricoes) &&
                    hotel?.restricoes.length >= 1 && (
                      <Informations
                        title="Restrições"
                        contents={hotel.restricoes}
                      />
                    )}

                  {Array.isArray(hotel?.formas_pagamento) &&
                    hotel?.formas_pagamento.length >= 1 && (
                      <Informations
                        title="Restrições"
                        contents={hotel.formas_pagamento}
                      />
                    )}
                </>
              )}
            </div>
            <div className="col-lg-4">
              {hotel && <IframeMaps address={hotel?.addresses} />}
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
