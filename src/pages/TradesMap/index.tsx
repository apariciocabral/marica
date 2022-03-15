import { useEffect } from 'react';
import { Header } from '../../components/Header';
import BigMap from '../../components/BigMap';
import Wrapper from '../../components/Wrapper';
import { useTrades } from '../../Hooks/TradesProvider';

export const TradesMap: React.FC = () => {
  const { trades, getTrades } = useTrades();

  useEffect(() => {
    getTrades();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Header fixed />
      {Array.isArray(trades) && trades.length > 0 && (
        <BigMap
          items={trades}
          backTo="/comercios"
          title="Comércio Local"
          type="trade"
        />
      )}
    </Wrapper>
  );
};
