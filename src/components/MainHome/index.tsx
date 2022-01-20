import { BsBookmarkStarFill } from 'react-icons/bs';
import { FaBed, FaMotorcycle, FaRoute, FaUmbrellaBeach } from 'react-icons/fa';
import { GiGreekTemple, GiMicrophone } from 'react-icons/gi';
import { MdLocalFlorist, MdOutlineRestaurant } from 'react-icons/md';
import { RiCalendar2Fill } from 'react-icons/ri';
import { SiHomeassistantcommunitystore } from 'react-icons/si';
import { Card } from '../Card';
import { BeforeFooter, ContentMainHome } from './styles';
import AndroidImg from '../../assets/app-store.png';
import AppleImg from '../../assets/ios-store.png';
import PhoneImg from '../../assets/mock-phone.png';

export const MainHome: React.FC = () => {
  return (
    <>
      <ContentMainHome>
        <div className="container mb-4">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-2 justify-content-center">
            <div className="col">
              <Card
                title="Pontos Turísticos"
                description="Conheça nossas praias, lagoas, grutas e outros pontos
              turísticos"
                url="/pontos-turisticos"
                icon={FaUmbrellaBeach}
              />
            </div>
            <div className="col">
              <Card
                title="Hotéis e Pousadas"
                description="Saiba onde se hospedar em Maricá"
                url="/hoteis-e-pousadas"
                icon={FaBed}
              />
            </div>
            <div className="col">
              <Card
                title="Bares e Restaurantes"
                description="Aprecie a gastronomia de Maricá"
                url="/bares-e-restaurantes"
                icon={MdOutlineRestaurant}
              />
            </div>
            <div className="col">
              <Card
                title="Delivery"
                description="Receba o melhor de Maricá no conforto da sua casa"
                url="/delivery"
                icon={FaMotorcycle}
              />
            </div>
            <div className="col">
              <Card
                title="Comércio Local"
                description="Veja onde fazer as suas compras"
                url="/comércio-local"
                icon={SiHomeassistantcommunitystore}
              />
            </div>
            <div className="col">
              <Card
                title="Cupons de Desconto"
                description="As melhores promoções para curtir a cidade"
                url="/cupons-de-desconto"
                icon={BsBookmarkStarFill}
              />
            </div>
            <div className="col">
              <Card
                title="Espaços para Eventos"
                description="Locais para fazer suas festas ou reuniões"
                url="/espaços-para-eventos"
                icon={GiMicrophone}
              />
            </div>
            <div className="col">
              <Card
                title="Eventos"
                description="Confira o calendário de eventos da cidade"
                url="/eventos"
                icon={RiCalendar2Fill}
              />
            </div>
            <div className="col">
              <Card
                title="Roteiros turísticos"
                description="Conheça diversas trilhas ecológicas e de aventura, com
              variados níveis de dificuldade."
                url="/roteiros-turísticos"
                icon={FaRoute}
              />
            </div>
            <div className="col">
              <Card
                title="Artesanato"
                description="Conheça e compre as criações dos artesãos de Maricá/RJ"
                url="/artesanato"
                icon={MdLocalFlorist}
              />
            </div>
            <div className="col">
              <Card
                title="Sobre a cidade"
                description="Conheça mais sobre Maricá"
                url="/sobre-a-cidade"
                icon={GiGreekTemple}
              />
            </div>
          </div>
        </div>
      </ContentMainHome>
      <BeforeFooter>
        <div className="hRBsWH">
          <div className="CWQMf" />
          <div className="container text-white py-5">
            <div className="row">
              <div className="d-flex flex-column col-md-7 mb-4 mb-md-0">
                <h2 className="fQkkzS fw-bold mt-0 mb-4">
                  Conheça nosso aplicativo
                </h2>
                <p className="gJlwEu mt-0 mb-4">
                  Tenha o Guia Oficial de Turismo de Maricá a qualquer momento,
                  na palma das suas mãos!
                </p>
                <div className="form-row mt-auto text-center text-md-left d-flex">
                  <div className="p-1 col-6 col-md-5 mb-3">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.marica2030.app"
                      title="Google Play"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="img-fluid"
                        src={AndroidImg}
                        alt="Google Play"
                      />
                    </a>
                  </div>
                  <div className="p-1 col-6 col-md-5">
                    <a
                      href="https://apps.apple.com/br/app/maric%C3%A1-oficial/id1493299199"
                      title="App Store"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="img-fluid"
                        src={AppleImg}
                        alt="App Store"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-5 text-end text-md-right image">
                <img
                  className="img-fluid"
                  src={PhoneImg}
                  alt="Conheça nosso app"
                />
              </div>
            </div>
          </div>
        </div>
      </BeforeFooter>
    </>
  );
};
