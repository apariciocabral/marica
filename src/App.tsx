import { BannersProvider } from './Hooks/BannersProvider';
import { SpotsProvider } from './Hooks/SpotsProvider';
import { Routes } from './Routes';
import { GlobalStyle } from './styles/global';

export const App: React.FC = () => (
  <>
    <BannersProvider>
      <SpotsProvider>
        <Routes />
      </SpotsProvider>
    </BannersProvider>
    <GlobalStyle />
  </>
);
