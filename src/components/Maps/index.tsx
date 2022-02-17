import GoogleMapReact from 'google-map-react';
import { AddressType } from '../../@types/Address';

interface IframeMapsProps {
  address: AddressType[];
}

const IframeMaps: React.FC<IframeMapsProps> = ({ address }) => {
  return (
    <div>
      <div className="mt-3">
        <h4 className="ms-3 fs-5 fw-bold">Localização</h4>
        <div style={{ height: '35vh', width: '100%' }} className="px-3">
          <GoogleMapReact
            key={address[0].id}
            bootstrapURLKeys={{
              key: `${process.env.REACT_APP_GOOGLE_KEY}`,
            }}
            defaultCenter={{
              lat: address[0].lat,
              lng: address[0].lng,
            }}
            defaultZoom={13}
          />
        </div>
      </div>
    </div>
  );
};

export default IframeMaps;
