import GoogleMapReact from 'google-map-react';
import { useMemo, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdArrowBack } from 'react-icons/md';
import { TradesType } from '../../@types/Trades';
import { CityEventsType } from '../../@types/CityEvents';
import { EventSpacesType } from '../../@types/EventSpaces';
import { HotelsType } from '../../@types/Hotels';
import { RestaurantsType } from '../../@types/Restaurants';
import { SpotsType } from '../../@types/Spots';
import TradesCard from '../TradeCard';
import EventSpacesCard from '../EventSpaceCard';
import HotelsCard from '../HotelCard';
import RestaurantsCard from '../RestaurantCard';
import SpotsCard from '../SpotCard';
import CityEventsCard from '../CityEventCard';
import { CardMarker, LocationPoint, MapTitle, Wrapper } from './styles';

interface IBigMapProps {
  items:
    | SpotsType[]
    | HotelsType[]
    | RestaurantsType[]
    | TradesType[]
    | EventSpacesType[]
    | CityEventsType[];
  title: string;
  backTo: string;
  type: 'spot' | 'hotel' | 'cityEvent' | 'restaurant' | 'trade' | 'eventSpace';
}

interface IMapMarkerProps {
  lat: number;
  lng: number;
  item:
    | SpotsType
    | HotelsType
    | RestaurantsType
    | TradesType
    | EventSpacesType
    | CityEventsType;
  showCard: boolean;
  onPinClick: () => void;
  type: 'spot' | 'hotel' | 'cityEvent' | 'restaurant' | 'trade' | 'eventSpace';
}

const MapMarker: React.FC<IMapMarkerProps> = ({
  item,
  type,
  showCard,
  onPinClick,
}) => {
  const card = useMemo(() => {
    switch (type) {
      case 'spot':
        return <SpotsCard spot={item as SpotsType} />;
        break;
      case 'hotel':
        return <HotelsCard hotel={item as HotelsType} />;
        break;
      case 'cityEvent':
        return <CityEventsCard cityEvent={item as CityEventsType} />;
        break;
      case 'restaurant':
        return <RestaurantsCard restaurant={item as RestaurantsType} />;
        break;
      case 'trade':
        return <TradesCard trade={item as TradesType} />;
        break;
      case 'eventSpace':
        return <EventSpacesCard eventSpace={item as EventSpacesType} />;
        break;
      default:
        return null;
    }
  }, [item, type]);

  return (
    <Wrapper>
      {showCard && item && <CardMarker>{card}</CardMarker>}
      <LocationPoint type="button" onClick={onPinClick}>
        <FaMapMarkerAlt color="red" className="fs-2" />
      </LocationPoint>
    </Wrapper>
  );
};

const BigGoogleMap: React.FC<IBigMapProps> = ({
  items,
  title,
  type,
  backTo,
}) => {
  const [activeAddress, setActiveAddress] = useState<number | null>(null);
  return (
    <div>
      <MapTitle
        className="d-flex text-decoration-none align-items-center"
        to={backTo}
      >
        <MdArrowBack className="fs-6 text-dark" />
        <div>
          <h6 className="ms-2 m-0 text-dark">{title}</h6>
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
          onClick={() => setActiveAddress(null)}
        >
          {items?.map(item =>
            item?.enderecos?.map(address => {
              return (
                <MapMarker
                  lat={address.lat}
                  lng={address.lng}
                  key={address.id}
                  item={item}
                  type={type}
                  showCard={address.id === activeAddress}
                  onPinClick={() =>
                    setActiveAddress(
                      address.id === activeAddress ? null : address.id
                    )
                  }
                />
              );
            })
          )}
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default BigGoogleMap;
