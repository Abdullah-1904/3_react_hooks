// if i dont want to put default names in card parameters like Olivia, i can define a 'variable' = Olivia and use || 'variable' in the place where i need this
// const Card = ({
//   name = "Olivia",
//   position = "unknown",
//   country = "fetching",
// }) => {

import React from "react";

const Card = ({ alpha_two_code, country, name, state_province }) => {
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src="https://images.pexels.com/photos/27241173/pexels-photo-27241173.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <p className="mt-2 text-sm text-gray-300">
          {alpha_two_code && `Alpha_two_code: ${alpha_two_code}`}
        </p>
        <p className="mt-2 text-sm text-gray-300">{name && `Name: ${name}`}</p>
        <p className="mt-2 text-sm text-gray-300">
          {country && `Country: ${country}`}
        </p>

        <p className="mt-2 text-sm text-gray-300">
          {/* {{ state_province } ? `State Province: ${state_province}` : ""} */}
          {state_province && `State Province: ${state_province}`}
          {/* using && operator to display value only if value exists  */}
        </p>
      </div>
    </div>
  );
};

export default Card;
