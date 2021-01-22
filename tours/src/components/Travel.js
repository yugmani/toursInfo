import React from "react";
import Tourism from "./Tourism";

const Travel = ({ tours, removeTour }) => {
  return (
    <div className="tours">
      <div className="title">
        <h1>Tour Destinations</h1>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tourism key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </div>
  );
};

export default Travel;
