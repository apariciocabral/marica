import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import { BannersProvider } from './Hooks/BannersProvider';
import { Home } from './pages/Home';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <BannersProvider>
          <Route path="/" element={<Home />} />
        </BannersProvider>
      </Switch>
    </BrowserRouter>
  );
};
