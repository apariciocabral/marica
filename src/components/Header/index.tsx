import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.png';
import { ContainerHeader, ContentHeader, MenuHeader } from './styles';
import { AiFillHome, AiOutlineInfoCircle } from "react-icons/ai";
import { FaUmbrellaBeach, FaBed, FaBars, FaMotorcycle, FaRoute } from "react-icons/fa";
import { MdOutlineRestaurant, MdLocalFlorist } from "react-icons/md";
import { SiHomeassistantcommunitystore  } from "react-icons/si";
import { BsBookmarkStarFill  } from "react-icons/bs";
import { GiMicrophone  } from "react-icons/gi";
import { RiCalendar2Fill  } from "react-icons/ri";

export const Header:React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <MenuHeader className={showMenu ? 'show' : ''}>
        <ul>
          <li>
            <Link to="/">
              <AiFillHome /> Inicial
            </Link>
          </li>
          <li>
            <Link to="/">
              <AiOutlineInfoCircle /> Sobre a cidade
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
              <FaRoute /> Roteiros turísticos
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
          <button type="button" onClick={() => setShowMenu(!showMenu)}>
            <FaBars className='fs-4' />
          </button>
          <img src={logoImg} alt="marvel"></img>
        </ContentHeader>
      </ContainerHeader>
    </>
  );
}
