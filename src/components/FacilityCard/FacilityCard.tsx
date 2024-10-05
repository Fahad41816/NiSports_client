/* eslint-disable @typescript-eslint/no-explicit-any */
 
import { NavLink } from "react-router-dom";

const FacilityCard = ({ Facility, RedirectLink } : any) => {
  return (
    <div className="md:w-[350px]  mx-auto rounded-lg overflow-hidden h-auto shadow-lg flex flex-col justify-between">
      <img
        className="w-full h-48 object-cover"
        src={Facility.image}
        alt="Facility Image"
      />
      <div className="p-4 flex-grow">
        <div className="font-bold text-xl mb-2">{Facility.name}</div>
        <p className="text-gray-700 text-sm line-clamp-4">
          {Facility.description}
        </p>
        <p className="text-[#177C82] font-semibold mt-2 text-sm line-clamp-4">
          Price Per Hour: {Facility.pricePerHour}
        </p>
      </div>
      <NavLink className="btn  bg-[#177C82] text-white  " to={`${RedirectLink}`}>
        <button >View</button>
      </NavLink>
    </div>
  );
};

export default FacilityCard;
