import { useEffect } from 'react';
import { Header } from '../../components/Header';
import BigMap from '../../components/BigMap';
import Wrapper from '../../components/Wrapper';
import { useEventSpaces } from '../../Hooks/EventSpacesProvider';

export const EventSpacesMap: React.FC = () => {
  const { eventSpaces, getEventSpaces } = useEventSpaces();

  useEffect(() => {
    getEventSpaces();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Header fixed />
      {Array.isArray(eventSpaces) && eventSpaces.length > 0 && (
        <BigMap
          items={eventSpaces}
          backTo="/espacos"
          title="Espaços para eventos"
          type="eventSpace"
        />
      )}
    </Wrapper>
  );
};
