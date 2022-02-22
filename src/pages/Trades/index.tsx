import { useEffect } from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { PageTitle } from '../../components/PageTitle';
import Wrapper from '../../components/Wrapper';
import { useTrades } from '../../Hooks/TradesProvider';
import TradesCard from '../../components/TradeCard';
import { Search } from './styles';
import { Categories } from '../../components/Categories';
import LoadingGate from '../../components/LoadingGate';
import LoadingCards from '../../components/LoadingCards';

export const Trades: React.FC = () => {
  const { trades, getTrades, categories, isLoading, setCategories } =
    useTrades();

  useEffect(() => {
    getTrades();
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
              <PageTitle title="Comércio Local" />
            </div>
            <form className="d-flex col-md-6 justify-content-end">
              <div className="btn btn-primary my-4 me-3" title="Ver no mapa">
                <FaMapMarkedAlt className="me-2 fs-4" />
                Mapa
              </div>
              <Search className="my-4 d-flex">
                <input
                  className="input form-control"
                  type="search"
                  placeholder="Buscar Comércio Local"
                  aria-label="Search"
                />
                <AiOutlineSearch className="fs-4" />
              </Search>
            </form>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <Categories
              categories={categories}
              url="/comercios"
              color="secondary"
              setCategories={setCategories}
            />
          </div>
        </div>
        <div className="container">
          <div className="row row-cols-3">
            {trades.map(trade => {
              return (
                <div key={trade.id} className="col d-flex flex-column">
                  <TradesCard trade={trade} setCategories={setCategories} />
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
