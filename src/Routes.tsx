import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import { Deliveries } from './pages/Deliveries';
import { Home } from './pages/Home';
import { Hotels } from './pages/Hotels';
import { Restaurants } from './pages/Restaurants';
// import { Restaurants } from './pages/Restaurants';
import { Spots } from './pages/Spots';
import { Trades } from './pages/Trades';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/pontos" element={<Spots />} />
        {/* <Route path="/pontos/:id" element={<Spot />} /> */}
        <Route path="/hoteis-e-pousadas" element={<Hotels />} />
        {/* <Route path="/hoteis-e-pousadas/:id" element={<Hotel />} /> */}
        <Route path="/bares-e-restaurantes" element={<Restaurants />} />
        {/* <Route path="/bares-e-restaurantes/:id" element={<Restaurant />} /> */}
        <Route path="/delivery" element={<Deliveries />} />
        {/* <Route path="/delivery/:id" element={<Delivery />} /> */}
        <Route path="/comercios" element={<Trades />} />
        {/* <Route path="/comercios/:id" element={<Trade />} /> */}
      </Switch>
    </BrowserRouter>
  );
};
