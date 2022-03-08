import GoogleMapReact from 'google-map-react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdArrowBack } from 'react-icons/md';
import { CityEventsType } from '../../@types/CityEvents';
import { HotelsType } from '../../@types/Hotels';
import { RestaurantsType } from '../../@types/Restaurants';
import { SpotsType } from '../../@types/Spots';
import { TradesType } from '../../@types/Trades';
import { MapTitle, MarkerStyles } from './styles';

interface IBigMapProps {
  items:
    | SpotsType[]
    | RestaurantsType[]
    | HotelsType[]
    | TradesType[]
    | CityEventsType[];
  url: string;
  backTo: string;
}

interface IMapMarkerProps {
  lat: number;
  lng: number;
}

const MapMarker: React.FC<IMapMarkerProps> = () => (
  <MarkerStyles>
    <div>aqui</div>
    <FaMapMarkerAlt color="red" className="fs-3" />
  </MarkerStyles>
);

const BigMap: React.FC<IBigMapProps> = ({ items, url, backTo }) => {
  return (
    <>
      <MapTitle
        className="d-flex text-decoration-none align-items-center"
        to={url}
      >
        <MdArrowBack className="fs-6 text-dark" />
        <div>
          <h6 className="ms-2 m-0 text-dark">{backTo}</h6>
        </div>
      </MapTitle>

      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: `${process.env.REACT_APP_GOOGLE_KEY}`,
          }}
          yesIWantToUseGoogleMapApiInternals
          defaultZoom={13}
          defaultCenter={{
            lat: -22.9180269,
            lng: -42.8207682,
          }}
        >
          {items?.map(item =>
            item?.enderecos?.map(address => (
              <MapMarker lat={address.lat} lng={address.lng} key={address.id} />
            ))
          )}
        </GoogleMapReact>
      </div>
    </>
  );
};

export default BigMap;
