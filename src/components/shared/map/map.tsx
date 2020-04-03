/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import MapGL from 'react-map-gl';

const MAPBOX_TOKEN: string = 'pk.eyJ1Ijoic2FzaGEtZ3JhdmVzIiwiYSI6ImNrOGhxaTR6ZTAxMTMzZm43cDQ1czRnaTQifQ.Ia4g_2XrJFBDcZbbtF4D1Q';

export default () => {
  const [viewport, setViewport] = React.useState({
    latitude: 56.032,
    longitude: 93.116,
    zoom: 16,
    bearing: 0,
    pitch: 0,
  });
  
  return (
    <MapGL
      {...viewport}
      width="1430px"
      height="875px"
      mapStyle="mapbox://styles/sasha-graves/ck8j5p40t2sfo1iqdvy9fsktf"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    />
  );
};
