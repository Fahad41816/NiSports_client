import { useLoaderData } from "react-router";
import { useGetSingleFacilityQuery } from "../../Redux/Feature/Facility/FacilityApi";
import { Spin } from "antd";
import { NavLink } from "react-router-dom";

const FacilityDetails = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { id }: any = useLoaderData();

  const { data: Facility, isLoading } = useGetSingleFacilityQuery(id);

  if (isLoading) {
    return <Spin fullscreen />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Facility Image */}
        <div className="h-64 md:h-96">
          <img
            className="w-full h-full object-cover"
            src={Facility?.data?.image}
            alt={Facility?.data?.name}
          />
        </div>

        {/* Facility Details */}
        <div className="p-6">
          {/* Facility Name */}
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {Facility?.data?.name}
          </h1>

          {/* Location and Per-hour Charge */}
          <div className="flex justify-between items-center mt-2">
            <p className="text-gray-600">
              <strong>Location:</strong> {Facility?.data?.location}
            </p>
            <p className="text-gray-600">
              <strong>Per Hour Charge:</strong> ${Facility?.data?.pricePerHour}
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-700 mt-4">{Facility?.data?.description}</p>

          {/* Book Now Button */}
          <NavLink to={`/Booking?Facility=${Facility?.data?._id}`}>
          <div className="mt-6">
            <button
              className="bg-[#177C82] btn-lg text-white font-semibold py-2 px-4 rounded hover:bg-[#0e5b5c] transition-colors duration-300 w-full sm:w-auto" >
              Book Now
            </button>
          </div>
          </NavLink>
         
        </div>
      </div>
    </div>
  );
};

export default FacilityDetails;
