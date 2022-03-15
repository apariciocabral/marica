import { useEffect } from 'react';
import { Header } from '../../components/Header';
import BigMap from '../../components/BigMap';
import Wrapper from '../../components/Wrapper';
import { useCityEvents } from '../../Hooks/CityEventsProvider';

export const CityEventsMap: React.FC = () => {
  const { cityEvents, getCityEvents } = useCityEvents();

  useEffect(() => {
    getCityEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Header fixed />
      {Array.isArray(cityEvents) && cityEvents.length > 0 && (
        <BigMap
          items={cityEvents}
          backTo="/eventos"
          title="Eventos"
          type="cityEvent"
        />
      )}
    </Wrapper>
  );
};
