import { AboutCityProvider } from './Hooks/AboutCity';
import { BannersProvider } from './Hooks/BannersProvider';
import { CityEventsProvider } from './Hooks/CityEventsProvider';
import { DeliveriesProvider } from './Hooks/DeliveriesProvider';
import { DiscountsProvider } from './Hooks/DiscountsProvider';
import { EventSpacesProvider } from './Hooks/EventSpacesProvider';
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
                <DiscountsProvider>
                  <EventSpacesProvider>
                    <CityEventsProvider>
                      <AboutCityProvider>
                        <Routes />
                      </AboutCityProvider>
                    </CityEventsProvider>
                  </EventSpacesProvider>
                </DiscountsProvider>
              </TradesProvider>
            </DeliveriesProvider>
          </RestaurantsProvider>
        </HotelsProvider>
      </SpotsProvider>
    </BannersProvider>
    <GlobalStyle />
  </>
);
