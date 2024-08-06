import React, { useContext } from "react";
import { value1 } from "../use_context";

const Card2 = () => {
  const from_deletejs = useContext(value1);
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src="https://images.pexels.com/photos/27241173/pexels-photo-27241173.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <p className="mt-2 text-sm text-gray-300">{from_deletejs} </p>
        <p className="mt-2 text-sm text-gray-300"></p>
      </div>
    </div>
  );
};

export default Card2;
