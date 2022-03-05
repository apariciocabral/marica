import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome, AiOutlineInfoCircle } from 'react-icons/ai';
import {
  FaUmbrellaBeach,
  FaBed,
  FaMotorcycle,
  FaRoute,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { MdOutlineRestaurant, MdLocalFlorist } from 'react-icons/md';
import { SiHomeassistantcommunitystore } from 'react-icons/si';
import { BsBookmarkStarFill } from 'react-icons/bs';
import { GiMicrophone } from 'react-icons/gi';
import { RiCalendar2Fill } from 'react-icons/ri';
import { VscThreeBars } from 'react-icons/vsc';
import logoImg from '../../assets/logo.png';
import { ContainerHeader, ContentHeader, MenuHeader, Overlay } from './styles';

const routesUrl = process.env.REACT_APP_ROUTES_URL ?? '';
const craftUrl = process.env.REACT_APP_CRAFT_URL ?? '';
const facebookUrl = process.env.REACT_APP_FACEBOOK_URL ?? '';
const instagramUrl = process.env.REACT_APP_INSTAGRAM_URL ?? '';
const twitterUrl = process.env.REACT_APP_TWITTER_URL ?? '';
const youtubeUrl = process.env.REACT_APP_YOUTUBE_URL ?? '';

interface IHeaderProps {
  fixed?: boolean;
}

export const Header: React.FC<IHeaderProps> = ({ fixed = false }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Overlay
        className={showMenu ? 'show' : ''}
        onClick={() => setShowMenu(false)}
      />
      <MenuHeader className={showMenu ? 'show' : ''}>
        <button
          type="button"
          className="btn-close btn-close-white"
          aria-label="Close"
          onClick={() => setShowMenu(false)}
        />
        <ul>
          <li>
            <Link to="/">
              <AiFillHome /> Inicial
            </Link>
          </li>
          <li>
            <Link to="/sobre">
              <AiOutlineInfoCircle /> Sobre a Cidade
            </Link>
          </li>
          <li>
            <Link to="/pontos">
              <FaUmbrellaBeach /> Pontos Turísticos
            </Link>
          </li>
          <li>
            <Link to="/hoteis-e-pousadas">
              <FaBed /> Hotéis e Pousadas
            </Link>
          </li>
          <li>
            <Link to="/restaurantes">
              <MdOutlineRestaurant /> Bares e Restaurantes
            </Link>
          </li>
          <li>
            <Link to="/delivery">
              <FaMotorcycle /> Delivery
            </Link>
          </li>
          <li>
            <Link to="/comercios">
              <SiHomeassistantcommunitystore /> Comércio Local
            </Link>
          </li>
          <li>
            <Link to="/descontos">
              <BsBookmarkStarFill /> Cupons de Desconto
            </Link>
          </li>
          <li>
            <Link to="/espacos-para-eventos">
              <GiMicrophone /> Espaços para Eventos
            </Link>
          </li>
          <li>
            <Link to="/eventos">
              <RiCalendar2Fill /> Eventos
            </Link>
          </li>
          {routesUrl && (
            <li>
              <a href={routesUrl} target="_blank" rel="noreferrer">
                <FaRoute /> Roteiros Turísticos
              </a>
            </li>
          )}
          {craftUrl && (
            <li>
              <a href={craftUrl} target="_blank" rel="noreferrer">
                <MdLocalFlorist /> Artesanato
              </a>
            </li>
          )}
        </ul>
      </MenuHeader>
      <ContainerHeader className={fixed ? 'fixed' : undefined}>
        <ContentHeader>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="d-flex justify-content-between align-items-center">
                  <button type="button" onClick={() => setShowMenu(!showMenu)}>
                    <VscThreeBars className="fs-4" />
                    <span className="text-white ms-2">Menu</span>
                  </button>
                  <Link to="/">
                    <img
                      src={logoImg}
                      alt="Maricá"
                      className="d-none d-md-block"
                    />
                  </Link>
                  <div className="d-flex">
                    {facebookUrl && (
                      <a
                        className="text-white fs-5"
                        href={facebookUrl}
                        title="Facebook"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaFacebook />
                      </a>
                    )}
                    {instagramUrl && (
                      <a
                        className="text-white fs-5 mx-2"
                        href={instagramUrl}
                        title="Instagram"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaInstagram />
                      </a>
                    )}
                    {twitterUrl && (
                      <a
                        className="text-white fs-5 me-2"
                        href={twitterUrl}
                        title="Twitter"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaTwitter />
                      </a>
                    )}
                    {youtubeUrl && (
                      <a
                        className="text-white fs-5 me-2"
                        href={youtubeUrl}
                        title="Youtube"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaYoutube />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContentHeader>
      </ContainerHeader>
    </>
  );
};
