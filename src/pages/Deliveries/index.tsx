import { useEffect } from 'react';
import { FaMotorcycle } from 'react-icons/fa';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { PageTitle } from '../../components/PageTitle';
import Wrapper from '../../components/Wrapper';
import { useDeliveries } from '../../Hooks/DeliveriesProvider';
import LoadingGate from '../../components/LoadingGate';
import LoadingCards from '../../components/LoadingCards';
import { Categories } from '../../components/Categories';
import { Select } from './styles';

export const Deliveries: React.FC = () => {
  const { getDeliveries, categories, isLoading } = useDeliveries();

  useEffect(() => {
    getDeliveries();
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
              <PageTitle title="Delivery" />
            </div>
            <p className="ms-0">Selecione o tipo de estabelecimento:</p>
            <Select>
              <div className="row">
                <div className="col">
                  <div className="d-flex align-items-center p-3 g-3">
                    <a
                      className=""
                      title="Bares e Restaurantes"
                      href="/bares-e-restaurantes?delivery=1"
                    >
                      <FaMotorcycle className="ms-0 me-3 fs-4 color" />
                    </a>
                    <span className="m-0">
                      <a
                        className="text-dark text-decoration-none"
                        title="Bares e Restaurantes"
                        href="/bares-e-restaurantes?delivery=1"
                      >
                        Bares e Restaurantes
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center p-3">
                <a
                  className=""
                  title="Comercio Local"
                  href="/comercio-local?delivery=1"
                >
                  <FaMotorcycle className="ms-0 me-3 fs-4 color" />
                </a>
                <span className="m-0">
                  <a
                    className="text-dark text-decoration-none"
                    title="Comercio Local"
                    href="/comercio-local?delivery=1"
                  >
                    Comércio Local
                  </a>
                </span>
              </div>
            </Select>

            <div className="container">
              <div className="row">
                <Categories
                  categories={categories}
                  url="/delivery"
                  color="secondary"
                />
              </div>
            </div>
          </div>
        </div>
      </LoadingGate>
      <Footer />
    </Wrapper>
  );
};
