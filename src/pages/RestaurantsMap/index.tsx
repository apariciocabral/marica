import { useEffect } from 'react';
import { Header } from '../../components/Header';
import BigMap from '../../components/BigMap';
import Wrapper from '../../components/Wrapper';
import { useRestaurants } from '../../Hooks/RestaurantsProvider';

export const RestaurantsMap: React.FC = () => {
  const { restaurants, getRestaurants } = useRestaurants();

  useEffect(() => {
    getRestaurants();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Header fixed />
      {Array.isArray(restaurants) && restaurants.length > 0 && (
        <BigMap
          items={restaurants}
          backTo="/restaurantes"
          title="Bares e Restaurantes"
          type="restaurant"
        />
      )}
    </Wrapper>
  );
};
