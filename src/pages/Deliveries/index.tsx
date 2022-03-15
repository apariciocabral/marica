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
import { setTitle } from '../../utils/title';

export const Deliveries: React.FC = () => {
  const { getDeliveries, categories, isLoading } = useDeliveries();

  useEffect(() => {
    getDeliveries();
    setTitle('Delivery');
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Header />
      <LoadingGate
        waitFor={isLoading === false}
        meanwhile={<LoadingCards show amount={4} />}
      >
        <div className="container">
          <div className="row">
            <div className="d-flex col-md-6 my-4">
              <PageTitle title="Delivery" />
            </div>
            <p className="mb-4">Selecione o tipo de estabelecimento:</p>
            <Select>
              <div className="d-flex align-items-center p-3">
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
            </Select>
            <Select>
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
