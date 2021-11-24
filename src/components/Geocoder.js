import { useEffect } from "react";
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from "!mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGVjdG9yZzIyMTEiLCJhIjoiY2t0eWtxbmhtMDhwMTJwcG1jZXd0b3VhMSJ9.8XhBErdMP3PqsR-xN-NkMA";

const Geocoder = () => {
  useEffect(() => {
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
    });

    geocoder.addTo(`#geocoder`);
    geocoder.on("result", (e) => {
      console.log(e);
    });
  }, []);

  return <div className="geocoder" id={`geocoder`}></div>;
};

export default Geocoder;
