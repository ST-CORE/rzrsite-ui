/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import MapGL, { NavigationControl } from 'react-map-gl';
import './map.scss';

const MAPBOX_TOKEN: string = 'pk.eyJ1Ijoic2FzaGEtZ3JhdmVzIiwiYSI6ImNrOGhxaTR6ZTAxMTMzZm43cDQ1czRnaTQifQ.Ia4g_2XrJFBDcZbbtF4D1Q';

export default () => {
  const [viewport, setViewport] = React.useState({
    latitude: 56.031,
    longitude: 93.112,
    zoom: 16,
    bearing: 0,
    pitch: 0,
  });
  
  return (
    <MapGL
      {...viewport}
      width="100%"
      height="875px"
      mapStyle="mapbox://styles/sasha-graves/ck8j5p40t2sfo1iqdvy9fsktf"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
      <div className="map-navigation">
        <NavigationControl />
      </div>
      
    </MapGL>
  );
};
