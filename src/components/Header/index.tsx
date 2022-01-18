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
import { ContainerHeader, ContentHeader, MenuHeader } from './styles';

export const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <MenuHeader className={showMenu ? 'show' : ''}>
        <ul>
          <button
            type="button"
            className="btn-close btn-close-white"
            aria-label="Close"
            onClick={() => setShowMenu(false)}
          />
          <li>
            <Link to="/">
              <AiFillHome /> Inicial
            </Link>
          </li>
          <li>
            <Link to="/">
              <AiOutlineInfoCircle /> Sobre a Cidade
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaUmbrellaBeach /> Pontos Turísticos
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaBed /> Hotéis e Pousadas
            </Link>
          </li>
          <li>
            <Link to="/">
              <MdOutlineRestaurant /> Bares e Restaurantes
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaMotorcycle /> Delivery
            </Link>
          </li>
          <li>
            <Link to="/">
              <SiHomeassistantcommunitystore /> Comércio Local
            </Link>
          </li>
          <li>
            <Link to="/">
              <BsBookmarkStarFill /> Cupons de Desconto
            </Link>
          </li>
          <li>
            <Link to="/">
              <GiMicrophone /> Espaços para Eventos
            </Link>
          </li>
          <li>
            <Link to="/">
              <RiCalendar2Fill /> Eventos
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaRoute /> Roteiros Turísticos
            </Link>
          </li>
          <li>
            <Link to="/">
              <MdLocalFlorist /> Artesanato
            </Link>
          </li>
        </ul>
      </MenuHeader>
      <ContainerHeader>
        <ContentHeader>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="d-flex justify-content-between align-items-center">
                  <button type="button" onClick={() => setShowMenu(!showMenu)}>
                    <VscThreeBars className="fs-4" />
                    <span className="text-white ms-2">Menu</span>
                  </button>
                  <img src={logoImg} alt="Maricá" />
                  <div className="d-flex">
                    <a
                      className="text-white fs-5"
                      href="https://web.facebook.com/prefeiturademarica"
                      title="Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      className="text-white fs-5 mx-2"
                      href="https://www.instagram.com/prefeiturademarica/"
                      title="Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      className="text-white fs-5 me-2"
                      href="https://twitter.com/MaricaPref"
                      title="Twitter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      className="text-white fs-5 me-2"
                      href="https://www.youtube.com/user/prefeiturademarica1"
                      title="Youtube"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaYoutube />
                    </a>
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
