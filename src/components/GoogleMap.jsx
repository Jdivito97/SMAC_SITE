import React from "react";
import { MapEmbed } from "./Components.styles";

const GoogleMap = () => {
  return (
    <div>
      {" "}
      <MapEmbed
        width="600"
        height="450"
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJFZ1SHWeoXIYRKiuFgqt67R0&key=AIzaSyCZ6-OgJhroI5xtC3M6zrf4jlfbrQmSRDI"
      ></MapEmbed>
    </div>
  );
};

export default GoogleMap;
