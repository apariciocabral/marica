import { Fragment } from 'react';
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
import { Icons, WrapTip } from './styles';

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
  <WrapTip className="mt-5">
    <h3 className="border-bottom border-2 mb-3">{title}</h3>
    <ul className="align-items-center p-0">
      {addresses.map(info => (
        <li
          key={info.id}
          className="d-flex align-items-center list-unstyled col pb-4"
        >
          <div className="px-2">
            <Icons className="fs-5">
              <FiMapPin />
            </Icons>
          </div>
          <div className="px-2 m-0">{info.label}</div>
        </li>
      ))}
      {phone.map(info => (
        <li
          key="info.id"
          className="d-flex align-items-center list-unstyled pb-4"
        >
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
              <Fragment key="info.id">
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
              </Fragment>
            );
          })}
        </li>
      )}

      {Array.isArray(hourFunction) && hourFunction.length > 0 && (
        <li className="d-flex pb-4">
          <div className="px-2">
            <Icons className="fs-5">
              <MdOutlineWatchLater />
            </Icons>
          </div>
          <div>
            {hourFunction.map(info => (
              <Fragment key={info.label}>
                <div className="px-2 m-0 fw-bold">{info.label}</div>
                <div className="flex-column px-2 m-0">
                  {info.horario.abre} às {info.horario.fecha}
                </div>
              </Fragment>
            ))}
          </div>
        </li>
      )}
    </ul>
  </WrapTip>
);

export default About;
