import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Spots } from './pages/Spots';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/pontos" element={<Spots />} />
      </Switch>
    </BrowserRouter>
  );
};
