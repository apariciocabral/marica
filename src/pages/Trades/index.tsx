import { useEffect } from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { PageTitle } from '../../components/PageTitle';
import Wrapper from '../../components/Wrapper';
import { useTrades } from '../../Hooks/TradesProvider';
import TradesCard from '../../components/TradeCard';
import { Categories } from '../../components/Categories';
import LoadingGate from '../../components/LoadingGate';
import LoadingCards from '../../components/LoadingCards';
import { SearchInput } from '../../components/SearchInput';
import LoadingPills from '../../components/LoadingPill';

export const Trades: React.FC = () => {
  const { trades, getTrades, categories, isLoading, setCategories } =
    useTrades();

  useEffect(() => {
    getTrades();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (searchText: string): void => {
    getTrades(searchText);
  };

  return (
    <Wrapper>
      <Header />
      <LoadingGate
        waitFor={isLoading === false}
        meanwhile={
          <>
            <LoadingPills show numberOfCards={3} />
            <LoadingPills show numberOfCards={12} />
            <LoadingCards show numberOfCards={4} />
          </>
        }
      >
        <div className="container">
          <div className="row">
            <div className="d-flex col-md-6">
              <PageTitle title="Comércio Local" />
            </div>
            <div className="d-flex col-md-6 justify-content-end">
              <Link to="/comercios/mapa">
                <div className="btn btn-primary my-4 me-3" title="Ver no mapa">
                  <FaMapMarkedAlt className="me-2 fs-4 text-white" />
                  Mapa
                </div>
              </Link>
              <div className="my-4">
                <SearchInput
                  className="input"
                  type="search"
                  onSearch={handleSearch}
                  placeholder="Buscar comércio local"
                  aria-label="Search"
                >
                  <AiOutlineSearch className="fs-4" />
                </SearchInput>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <Categories
              categories={categories}
              url="comercios"
              color="secondary"
              setCategories={setCategories}
            />
          </div>
        </div>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {trades.map(trade => {
              return (
                <div key={trade.id} className="col d-flex align-items-stretch">
                  <TradesCard
                    trade={trade}
                    enderecos={trade.enderecos}
                    setCategories={setCategories}
                  />
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
