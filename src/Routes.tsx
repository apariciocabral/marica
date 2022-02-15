import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import { AboutCity } from './pages/AboutCity';
import { CityEvents } from './pages/CityEvents';
import { Deliveries } from './pages/Deliveries';
import { Discounts } from './pages/Discounts';
import { EventSpaces } from './pages/EventSpaces';
import { Home } from './pages/Home';
import { Hotels } from './pages/Hotels';
import { Restaurants } from './pages/Restaurants';
import { Spots } from './pages/Spots';
import { TouristSpot } from './pages/TouristSpot';
import { Trades } from './pages/Trades';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/pontos" element={<Spots />} />
        <Route path="/pontos/:id" element={<TouristSpot />} />
        {/* <Route path="/pontos/categorias/:id/:label" element={<Spots />} /> */}
        <Route path="/hoteis-e-pousadas" element={<Hotels />} />
        {/* <Route path="/hoteis-e-pousadas/:id" element={<Hotel />} /> */}
        <Route path="/bares-e-restaurantes" element={<Restaurants />} />
        {/* <Route path="/bares-e-restaurantes/:id" element={<Restaurant />} /> */}
        <Route path="/delivery" element={<Deliveries />} />
        {/* <Route path="/delivery/:id" element={<Delivery />} /> */}
        <Route path="/comercios" element={<Trades />} />
        {/* <Route path="/comercios/:id" element={<Trade />} /> */}
        <Route path="/descontos" element={<Discounts />} />
        {/* <Route path="/descontos/:id" element={<Discount />} /> */}
        <Route path="/espacos-para-eventos" element={<EventSpaces />} />
        {/* <Route path="/espacos-para-eventos/:id" element={<EventSpace />} /> */}
        <Route path="/eventos" element={<CityEvents />} />
        {/* <Route path="/eventos/:id" element={<CityEvent />} /> */}
        <Route path="/sobre" element={<AboutCity />} />
      </Switch>
    </BrowserRouter>
  );
};
