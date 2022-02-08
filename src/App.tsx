import { BannersProvider } from './Hooks/BannersProvider';
import { DeliveriesProvider } from './Hooks/DeliveriesProvider';
import { HotelsProvider } from './Hooks/HotelsProvider';
import { RestaurantsProvider } from './Hooks/RestaurantsProvider';
import { SpotsProvider } from './Hooks/SpotsProvider';
import { TradesProvider } from './Hooks/TradesProvider';
import { Routes } from './Routes';
import { GlobalStyle } from './styles/global';

export const App: React.FC = () => (
  <>
    <BannersProvider>
      <SpotsProvider>
        <HotelsProvider>
          <RestaurantsProvider>
            <DeliveriesProvider>
              <TradesProvider>
                <Routes />
              </TradesProvider>
            </DeliveriesProvider>
          </RestaurantsProvider>
        </HotelsProvider>
      </SpotsProvider>
    </BannersProvider>
    <GlobalStyle />
  </>
);
