import React, { useState } from 'react';
import MapGL, { GeolocateControl } from 'react-map-gl';
// import config from '../config';
import 'mapbox-gl/dist/mapbox-gl.css';

const TOKEN = 'pk.eyJ1Ijoic2FzaGEtZ3JhdmVzIiwiYSI6ImNrOGhxaTR6ZTAxMTMzZm43cDQ1czRnaTQifQ.Ia4g_2XrJFBDcZbbtF4D1Q';

const geolocateStyle = {
  float: 'left',
  margin: '50px',
  padding: '10px',
};

const Map = () => {
  const [viewport, setViewPort] = useState({
    width: '100%',
    height: 900,
    latitude: 0,
    longitude: 0,
    zoom: 2,
  });

  const onViewportChange = () => setViewPort({ ...viewport /* , transitionDuration: 3000 */ });
  
  return (
    <div style={{ margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', fontSize: '25px', fontWeight: 'bolder' }}>
        GeoLocator: Click To Find Your Location or click
        <a href="/search">here</a>
        {' '}
        to search for a location
      </h1>
      <MapGL
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v8"
        onViewportChange={onViewportChange}
      >
        <GeolocateControl
          css-style={geolocateStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation
        />
      </MapGL>
    </div>
  );
};

export default Map;
