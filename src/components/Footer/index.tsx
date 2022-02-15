import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ContentFooter } from './styles';
import ProtegeMaricaImg from '../../assets/protegemarica.png';
import TurismoImg from '../../assets/turismomarica.png';

const facebookUrl = process.env.REACT_APP_FACEBOOK_URL ?? '';
const instagramUrl = process.env.REACT_APP_INSTAGRAM_URL ?? '';
const twitterUrl = process.env.REACT_APP_TWITTER_URL ?? '';
const youtubeUrl = process.env.REACT_APP_YOUTUBE_URL ?? '';
const merchantUrl = process.env.REACT_APP_MERCHANT_URL ?? '';
const gastronomyUrl = process.env.REACT_APP_GASTRONOMY_URL ?? '';
const hostingUrl = process.env.REACT_APP_HOSTING_URL ?? '';

export const Footer: React.FC = () => {
  return (
    <ContentFooter className="mt-auto">
      <div className="hLgJkJ">
        <div className="container text-white py-5 py-md-3">
          <div className="row">
            <div className="d-flex flex-column col-xl-6 mb-4 mb-xl-0">
              <div className="d-flex align-items-center justify-content-center justify-content-xl-start mb-2 fs-5">
                {facebookUrl && (
                  <a
                    className="text-white text-decoration-none"
                    href={facebookUrl}
                    title="Facebook"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebook />
                    <span className="d-none d-md-inline ms-2">Facebook</span>
                  </a>
                )}
                {instagramUrl && (
                  <a
                    className="text-white mx-2 text-decoration-none"
                    href={instagramUrl}
                    title="Instagram"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram />
                    <span className="d-none d-md-inline ms-2">Instagram</span>
                  </a>
                )}
                {twitterUrl && (
                  <a
                    className="text-white me-2 text-decoration-none"
                    href={twitterUrl}
                    title="Twitter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitter />
                    <span className="d-none d-md-inline ms-2">Twitter</span>
                  </a>
                )}
                {youtubeUrl && (
                  <a
                    className="text-white me-2 text-decoration-none"
                    href={youtubeUrl}
                    title="Youtube"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube />
                    <span className="d-none d-md-inline ms-2">Youtube</span>
                  </a>
                )}
              </div>
              <div className="text-center text-xl-start fs-5">
                {merchantUrl && (
                  <a
                    className="text-white underline"
                    href={merchantUrl}
                    title="Área do comerciante"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Área do comerciante
                  </a>
                )}
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row col-xl-6 justify-content-center justify-content-xl-end text-center text-md-left">
              <div className="mb-3 mb-md-0">
                <img src={ProtegeMaricaImg} alt="Protege Maricá" height="60" />
              </div>
              <div className="mx-md-4 mb-3 mb-md-0 fs-5">
                <p className="mb-1">
                  {gastronomyUrl && (
                    <a
                      className="text-white underline"
                      href={gastronomyUrl}
                      title="Guia Gastronômico"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Manual Gastronomia
                    </a>
                  )}
                </p>
                <p className="m-0">
                  {hostingUrl && (
                    <a
                      className="text-white underline"
                      href={hostingUrl}
                      title="Guia de Hospedagens"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Manual Hospedagem
                    </a>
                  )}
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
