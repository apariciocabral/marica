import { BsBookmarkStarFill } from 'react-icons/bs';
import { FaBed, FaMotorcycle, FaRoute, FaUmbrellaBeach } from 'react-icons/fa';
import { GiGreekTemple, GiMicrophone } from 'react-icons/gi';
import { MdLocalFlorist, MdOutlineRestaurant } from 'react-icons/md';
import { RiCalendar2Fill } from 'react-icons/ri';
import { SiHomeassistantcommunitystore } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { ContentCardHome } from './styles';

export const CardHome: React.FC = () => {
  return (
    <ContentCardHome>
      <div className="container mb-4">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-2">
          <div className="col">
            <div className="h-100 w-100 text-center d-flex flex-column hXQgjp pt-3">
              <Link to="/">
                <FaUmbrellaBeach className="text-dark icon" />
              </Link>
              <div className="text-center text-decoration-none">
                <div className="card-body">
                  <Link className="text-decoration-none text-dark" to="/">
                    <h2 className="fs-sm mt-0 mb-1">Pontos Turísticos</h2>
                  </Link>
                  <p className="text-muted fs-xs d-none d-sm-block mt-0 mb-3">
                    Conheça nossas praias, lagoas, grutas e outros pontos
                    turísticos
                  </p>
                  <div className="mt-auto w-100">
                    <Link to="/" className="button" title="Pontos Turísticos">
                      Acessar
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="h-100 w-100 text-center d-flex flex-column hXQgjp pt-3">
              <Link to="/">
                <FaBed className="text-dark icon" />
              </Link>
              <div className="text-center text-decoration-none">
                <div className="card-body">
                  <Link className="text-decoration-none text-dark" to="/">
                    <h2 className="fs-sm mt-0 mb-2">Hotéis e Pousadas</h2>
                  </Link>
                  <p className="text-muted fs-xs d-none d-sm-block mt-0 mb-3">
                    Saiba onde se hospedar em Maricá
                  </p>
                  <div className="mt-auto w-100">
                    <Link to="/" className="button" title="Hotéis e Pousadas">
                      Acessar
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="h-100 w-100 text-center d-flex flex-column hXQgjp pt-3">
              <Link to="/">
                <MdOutlineRestaurant className="text-dark icon" />
              </Link>
              <div className="text-center text-decoration-none">
                <div className="card-body">
                  <Link className="text-decoration-none text-dark" to="/">
                    <h2 className="fs-sm mt-0 mb-2">Bares e Restaurantes</h2>
                  </Link>
                  <p className="text-muted fs-xs d-none d-sm-block mt-0 mb-3">
                    Aprecie a gastronomia de Maricá
                  </p>
                  <div className="mt-auto w-100">
                    <a href="/" className="button" title="Pontos Turísticos">
                      Acessar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="h-100 w-100 text-center d-flex flex-column hXQgjp pt-3">
              <Link to="/">
                <FaMotorcycle className="text-dark icon" />
              </Link>
              <div className="text-center text-decoration-none">
                <div className="card-body">
                  <Link className="text-decoration-none text-dark" to="/">
                    <h2 className="fs-sm mt-0 mb-2">Delivery</h2>
                  </Link>
                  <p className="text-muted fs-xs d-none d-sm-block mt-0 mb-3">
                    Receba o melhor de Maricá no conforto da sua casa
                  </p>
                  <div className="mt-auto w-100">
                    <a href="/" className="button" title="Pontos Turísticos">
                      Acessar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="h-100 w-100 text-center d-flex flex-column hXQgjp pt-3">
              <Link to="/">
                <SiHomeassistantcommunitystore className="text-dark fs-1" />
              </Link>
              <div className="text-center text-decoration-none">
                <div className="card-body">
                  <Link className="text-decoration-none text-dark" to="/">
                    <h2 className="fs-sm mt-0 mb-2">Comércio Local</h2>
                  </Link>
                  <p className="text-muted fs-xs d-none d-sm-block mt-0 mb-3">
                    Veja onde fazer as suas compras
                  </p>
                  <div className="mt-auto w-100">
                    <a href="/" className="button" title="Pontos Turísticos">
                      Acessar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="h-100 w-100 text-center d-flex flex-column hXQgjp pt-3">
              <Link to="/">
                <BsBookmarkStarFill className="text-dark icon" />
              </Link>
              <div className="text-center text-decoration-none">
                <div className="card-body">
                  <Link className="text-decoration-none text-dark" to="/">
                    <h2 className="fs-sm mt-0 mb-2">Cupons de Desconto</h2>
                  </Link>
                  <p className="text-muted fs-xs d-none d-sm-block mt-0 mb-3">
                    As melhores promoções para curtir a cidade
                  </p>
                  <div className="mt-auto w-100">
                    <a href="/" className="button" title="Pontos Turísticos">
                      Acessar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="h-100 w-100 text-center d-flex flex-column hXQgjp pt-3">
              <Link to="/">
                <GiMicrophone className="text-dark icon" />
              </Link>
              <div className="text-center text-decoration-none">
                <div className="card-body">
                  <Link className="text-decoration-none text-dark" to="/">
                    <h2 className="fs-sm mt-0 mb-2">Espaços para Eventos</h2>
                  </Link>
                  <p className="text-muted fs-xs d-none d-sm-block mt-0 mb-3">
                    Locais para fazer suas festas ou reuniões
                  </p>
                  <div className="mt-auto w-100">
                    <a href="/" className="button" title="Pontos Turísticos">
                      Acessar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="h-100 w-100 text-center d-flex flex-column hXQgjp pt-3">
              <Link to="/">
                <RiCalendar2Fill className="text-dark icon" />
              </Link>
              <div className="text-center text-decoration-none">
                <div className="card-body">
                  <Link className="text-decoration-none text-dark" to="/">
                    <h2 className="fs-sm mt-0 mb-2">Eventos</h2>
                  </Link>
                  <p className="text-muted fs-xs d-none d-sm-block mt-0 mb-3">
                    Confira o calendário de eventos da cidade
                  </p>
                  <div className="mt-auto w-100">
                    <a href="/" className="button" title="Pontos Turísticos">
                      Acessar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="h-100 w-100 text-center d-flex flex-column hXQgjp pt-3">
              <Link to="/">
                <FaRoute className="text-dark icon" />
              </Link>
              <div className="text-center text-decoration-none">
                <div className="card-body">
                  <Link className="text-decoration-none text-dark" to="/">
                    <h2 className="fs-sm mt-0 mb-2">Roteiros turísticos</h2>
                  </Link>
                  <p className="text-muted fs-xs d-none d-sm-block mt-0 mb-3">
                    Conheça diversas trilhas ecológicas e de aventura, com
                    variados níveis de dificuldade.
                  </p>
                  <div className="mt-auto w-100">
                    <a href="/" className="button" title="Pontos Turísticos">
                      Acessar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="h-100 w-100 text-center d-flex flex-column hXQgjp pt-3">
              <Link to="/">
                <MdLocalFlorist className="text-dark icon" />
              </Link>
              <div className="text-center text-decoration-none">
                <div className="card-body">
                  <Link className="text-decoration-none text-dark" to="/">
                    <h2 className="fs-sm mt-0 mb-2">Artesanato</h2>
                  </Link>
                  <p className="text-muted fs-xs d-none d-sm-block mt-0 mb-3">
                    Conheça e compre as criações dos artesãos de Maricá/RJ
                  </p>
                  <div className="mt-auto w-100">
                    <a href="/" className="button" title="Pontos Turísticos">
                      Acessar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="h-100 w-100 text-center d-flex flex-column hXQgjp pt-3">
              <Link to="/">
                <GiGreekTemple className="text-dark icon" />
              </Link>
              <div className="text-center text-decoration-none">
                <div className="card-body">
                  <Link className="text-decoration-none text-dark" to="/">
                    <h2 className="fs-sm mt-0 mb-2">Sobre a cidade</h2>
                  </Link>
                  <p className="text-muted fs-xs d-none d-sm-block mt-0 mb-3">
                    Conheça mais sobre Maricá
                  </p>
                  <div className="mt-auto w-100">
                    <a href="/" className="button" title="Pontos Turísticos">
                      Acessar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentCardHome>
  );
};
