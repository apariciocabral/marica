import { useEffect } from 'react';
import { Header } from '../../components/Header';
import BigMap from '../../components/BigMap';
import Wrapper from '../../components/Wrapper';
import { useHotels } from '../../Hooks/HotelsProvider';

export const HotelsMap: React.FC = () => {
  const { hotels, getHotels } = useHotels();

  useEffect(() => {
    getHotels();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Header fixed />
      {Array.isArray(hotels) && hotels.length > 0 && (
        <BigMap
          items={hotels}
          backTo="/hoteis-e-pousadas"
          title="Hotéis e Pousadas"
          type="hotel"
        />
      )}
    </Wrapper>
  );
};
