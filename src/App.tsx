import { BannersProvider } from './Hooks/BannersProvider';
import { Routes } from './Routes';
import { GlobalStyle } from './styles/global';

export const App: React.FC = () => (
  <>
    <BannersProvider>
      <Routes />
    </BannersProvider>
    <GlobalStyle />
  </>
);
