import { BrowserRouter, Route as Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
      </Switch>
    </BrowserRouter>
  );
};
