import { useEffect } from 'react';
import { Header } from '../../components/Header';
import BigMap from '../../components/BigMap';
import Wrapper from '../../components/Wrapper';
import { useSpots } from '../../Hooks/SpotsProvider';

export const SpotsMap: React.FC = () => {
  const { spots, getSpots } = useSpots();

  useEffect(() => {
    getSpots();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Header fixed />
      {Array.isArray(spots) && spots.length > 0 && (
        <BigMap
          items={spots}
          backTo="/pontos"
          title="Pontos Turísticos"
          type="spot"
        />
      )}
    </Wrapper>
  );
};
