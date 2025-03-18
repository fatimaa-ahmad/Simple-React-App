import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet's default icon issues with Webpack
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Location = () => {
  // Sample locations with coordinates (update with real values)
  const locations = [
    {
      name: 'Mall of Kuwait',
      position: [29.372, 47.985],
      description: 'Mall of Kuwait'
    },
    {
      name: 'City Hospital',
      position: [29.375, 47.987],
      description: 'City Hospital'
    },
    {
      name: 'International Airport',
      position: [29.227, 47.968],
      description: 'International Airport'
    }
  ];

  // State to hold the user's current location, if available
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Try to get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    }
  }, []);

  return (
    <div>
      <h2 className="section-title">Our Locations</h2>
      <p>Find our vending machines at these locations:</p>
      <ul>
        {locations.map((loc, index) => (
          <li key={index}>{loc.name}</li>
        ))}
      </ul>
      
      {/* Map Container */}
      <div style={{ height: '500px', width: '100%', marginTop: '20px' }}>
        <MapContainer 
          center={userLocation || [29.372, 47.985]} 
          zoom={13} 
          scrollWheelZoom={true} 
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          
          {/* Markers for each vending machine location */}
          {locations.map((loc, index) => (
            <Marker position={loc.position} key={index}>
              <Popup>
                {loc.name} <br /> {loc.description}
              </Popup>
            </Marker>
          ))}
          
          {/* Marker for user's current location (if available) */}
          {userLocation && (
            <Marker position={userLocation}>
              <Popup>Your current location</Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default Location;
