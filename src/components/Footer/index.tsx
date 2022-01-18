import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ContentFooter } from './styles';
import AndroidImg from '../../assets/app-store.png';
import AppleImg from '../../assets/ios-store.png';
import PhoneImg from '../../assets/mock-phone.png';
import ProtegeMaricaImg from '../../assets/protegemarica.png';
import TurismoImg from '../../assets/turismomarica.png';

export const Footer: React.FC = () => {
  return (
    <ContentFooter>
      <div className="hRBsWH">
        <div className="CWQMf" />
        <div className="container text-white py-5">
          <div className="row">
            <div className="d-flex flex-column col-md-7 mb-4 mb-md-0">
              <h2 className="fQkkzS fw-bold mt-0 mb-4">
                Conheça nosso aplicativo
              </h2>
              <p className="sc-fznZeY gJlwEu mt-0 mb-4">
                Tenha o Guia Oficial de Turismo de Maricá a qualquer momento, na
                palma das suas mãos!
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
                    <img className="img-fluid" src={AppleImg} alt="App Store" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-5 text-end text-md-right">
              <img
                className="img-fluid"
                src={PhoneImg}
                alt="Conheça nosso app"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hLgJkJ">
        <div className="container text-white py-5 py-md-3">
          <div className="row">
            <div className="d-flex flex-column col-xl-6 mb-4 mb-xl-0">
              <div className="d-flex align-items-center justify-content-center justify-content-xl-start mb-2 fs-5">
                <a
                  className="text-white text-decoration-none"
                  href="https://web.facebook.com/prefeiturademarica"
                  title="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                  <span className="d-none d-md-inline ms-2">Facebook</span>
                </a>
                <a
                  className="text-white mx-2 text-decoration-none"
                  href="https://www.instagram.com/prefeiturademarica/"
                  title="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                  <span className="d-none d-md-inline ms-2">Instagram</span>
                </a>
                <a
                  className="text-white me-2 text-decoration-none"
                  href="https://twitter.com/MaricaPref"
                  title="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                  <span className="d-none d-md-inline ms-2">Twitter</span>
                </a>
                <a
                  className="text-white me-2 text-decoration-none"
                  href="https://www.youtube.com/user/prefeiturademarica1"
                  title="Youtube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                  <span className="d-none d-md-inline ms-2">Youtube</span>
                </a>
              </div>
              <div className="text-center text-xl-start fs-5">
                <a
                  className="text-white underline"
                  href="https://app.marica2030.com.br"
                  title="Área do comerciante"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Área do comerciante
                </a>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row col-xl-6 justify-content-center justify-content-xl-end text-center text-md-left">
              <div className="mb-3 mb-md-0">
                <img src={ProtegeMaricaImg} alt="Protege Maricá" height="60" />
              </div>
              <div className="mx-md-4 mb-3 mb-md-0 fs-5">
                <p className="mb-1">
                  <a
                    className="text-white underline"
                    href="/static/media/guia-gastronomico.f9556598.pdf"
                    title="Guia Gastronômico"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Manual Gastronomia
                  </a>
                </p>
                <p className="m-0">
                  <a
                    className="text-white underline"
                    href="/static/media/guia-hospedagem.2046547a.pdf"
                    title="Guia de Hospedagens"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Manual Hospedagem
                  </a>
                </p>
              </div>
              <div>
                <img src={TurismoImg} alt="Maricá Turismo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentFooter>
  );
};
