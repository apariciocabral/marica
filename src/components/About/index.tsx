import { AiOutlineMail } from 'react-icons/ai';
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from 'react-icons/fa';
import { FiMapPin, FiPhone } from 'react-icons/fi';
import { MdOutlineWatchLater } from 'react-icons/md';
import { AddressType } from '../../@types/Address';
import { HourFunctionType } from '../../@types/HourFunction';
import { NetworkType } from '../../@types/Network';
import { PhoneType } from '../../@types/Phone';
import { Icons } from './styles';

interface IAboutProps {
  title: string;
  addresses: AddressType[];
  phone: PhoneType[];
  email: string;
  network: NetworkType[];
  hourFunction: HourFunctionType[];
}

const icons = {
  Facebook: FaFacebook,
  Instagram: FaInstagram,
  Twitter: FaTwitter,
  Youtube: FaYoutube,
  LinkedIn: FaLinkedinIn,
};

const About: React.FC<IAboutProps> = ({
  title,
  addresses,
  phone,
  email,
  network,
  hourFunction,
}) => (
  <div className="mt-5">
    <h1 className="">{title}</h1>
    <ul className="align-items-center p-0">
      {addresses.map(info => (
        <li className="d-flex align-items-center list-unstyled col pb-4">
          <div className="px-2">
            <Icons className="fs-5">
              <FiMapPin />
            </Icons>
          </div>
          <div className="px-2 m-0">{info.label}</div>
        </li>
      ))}
      {phone.map(info => (
        <li className="d-flex align-items-center list-unstyled pb-4">
          {info.whatsapp ? (
            <Icons className="fs-5 px-2">
              <FaWhatsapp />
            </Icons>
          ) : (
            <Icons className="fs-5 px-2">
              <FiPhone />
            </Icons>
          )}
          <div className="flex-column">
            <div className="px-2 m-0">{info.nome}</div>
            <div className="px-2 m-0">{info.number}</div>
          </div>
        </li>
      ))}
      {email && (
        <li className="d-flex align-items-center list-unstyled col pb-4">
          <div className="px-2">
            <Icons className="fs-5">
              <AiOutlineMail />
            </Icons>
          </div>
          <div className="px-2 m-0">{email}</div>
        </li>
      )}
      {network && (
        <li className="d-flex align-items-center list-unstyled pb-4">
          {network.map(info => {
            const Icon = icons[info.nome];
            return (
              <>
                <Icons className="fs-5 px-2">
                  <Icon />
                </Icons>
                <a
                  href={info.url}
                  target="_blank"
                  className="px-2 m-0 text-decoration-none fs-5"
                  rel="noreferrer"
                >
                  {info.user}
                </a>
              </>
            );
          })}
        </li>
      )}
      {hourFunction && (
        <li className="d-flex align-items-center list-unstyled col pb-4">
          <div className="px-2">
            <Icons className="fs-5">
              <MdOutlineWatchLater />
            </Icons>
          </div>
          <div className="px-2 m-0">{hourFunction}</div>
        </li>
      )}
    </ul>
  </div>
);

export default About;
