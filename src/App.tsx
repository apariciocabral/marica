import { BannersProvider } from './Hooks/BannersProvider';
import { HotelsProvider } from './Hooks/HotelsProvider';
import { RestaurantsProvider } from './Hooks/RestaurantsProvider';
import { SpotsProvider } from './Hooks/SpotsProvider';
import { Routes } from './Routes';
import { GlobalStyle } from './styles/global';

export const App: React.FC = () => (
  <>
    <BannersProvider>
      <SpotsProvider>
        <HotelsProvider>
          <RestaurantsProvider>
            <Routes />
          </RestaurantsProvider>
        </HotelsProvider>
      </SpotsProvider>
    </BannersProvider>
    <GlobalStyle />
  </>
);
