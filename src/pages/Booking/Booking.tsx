/* eslint-disable prefer-const */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import PageImageTitle from "../../components/PageImageTitle/PageImageTitle";
import {
  useGetFacilityQuery,
  useGetSingleFacilityQuery,
} from "../../Redux/Feature/Facility/FacilityApi";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useCheckAvailabilityQuery } from "../../Redux/Feature/Booking/BookingApi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddBookingData } from "../../Redux/Feature/Booking/BookingSlice";
import { toast, Toaster } from "sonner";
import { Select } from "antd";

const Booking = () => {
  const query = new URLSearchParams(useLocation().search);

  const [SelectedDate, setSelectedDate] = useState();
  const [shouldFetchAvailability, setShouldFetchAvailability] = useState(false);
  const [SelectedSlot, setSelectedSlot] : any = useState();

  const handleSelectSlot = (slot: any) => {
    console.log(`Selected time slot: ${slot}`);
    console.log(slot);
    setSelectedSlot(slot);
    // Add logic to handle the selected slot
  };

  const [SelectedFacility, setSelectedFacility] = useState()

  let facilityId = query.get("Facility");

  const id : any = SelectedFacility ? SelectedFacility : facilityId || null 

  const { data } = useGetSingleFacilityQuery(id, {
    skip: id ? false : true,
  });

  const { data: Facilitys } = useGetFacilityQuery({});

  const AllFacility = Facilitys?.data?.map((Facility : any) => ({
    label: Facility.name,
    value: Facility._id
  }))

  console.log(AllFacility)

  const { data: AvailableSlot } = useCheckAvailabilityQuery(
    { date: SelectedDate, facility: id },
    { skip: !shouldFetchAvailability }
  );

  const handleCheckAvailability = () => {
    if (SelectedDate) {
      setShouldFetchAvailability(true); // Trigger the query 
    } else {
      toast.info("Please select a date first.");
    }
  };

  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const HandleProccessPay = () => {
    if (SelectedSlot && SelectedDate) {
      const BookingData = {
        date: SelectedDate,
        startTime: SelectedSlot.startTime,
        endTime: SelectedSlot.endTime,
        facility: data.data._id,
        pricePerHour: data.data.pricePerHour,
      };

      dispatch(AddBookingData(BookingData));

      Navigate("/Payment");
    } else {
      toast.info("Please select a time Slot first.");
    }
  };


  const HandleFacility = (event : any) => {

    setSelectedFacility(event)

  }

  return (
    <div>
      <Toaster richColors position="top-center" />
      <PageImageTitle Location={"Booking"} />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
          {/* Header */}
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Check Facility Availability
          </h1>

          <div> 
            <h1 className="font-semibold mb-1">Select Facility : </h1>
            <Select
              onChange={HandleFacility}
              defaultValue="Choice"
              style={{ width: "100%" }}
              options={AllFacility}
            />
          </div>
          {data?.data && (
            <div className="border-dashed border mt-2 mb-2 p-2">
              <h1 className="text-xl font-semibold">
                <span className="text-[#177C82]">{data?.data?.name}</span>
              </h1>
              <NavLink to={`/Facility/${data?.data?._id}`}>
                <span className="cursor-pointer text-blue-400 hover:text-blue-500 hover:underline">
                  Facility Details
                </span>
              </NavLink>
            </div>
          )}
          {/* Date Selection */}
          <div className="mb-4">
            <label className="font-semibold mb-1 block text-gray-600 mb-1 mt-5" htmlFor="date">
              Select Date:
            </label>
            <input
              type="date"
              id="date"
              onChange={(e : any) => setSelectedDate(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
            />
          </div>

          {/* Check Availability Button */}
          <div className="mt-2">
            <button
              className="bg-[#177C82] text-white font-semibold py-2 px-4 rounded hover:bg-[#0e5b5c] transition-colors duration-300 w-full"
              onClick={handleCheckAvailability}
            >
              Check Availability
            </button>
          </div>

          {/* Time Slots */}
          <div className="mb-6">
            {AvailableSlot?.data && (
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Available Time Slots:
              </h2>
            )}

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* Example Time Slot Buttons */}
              {AvailableSlot?.data?.map((slot : any, index : number) => (
                <button
                  key={index}
                  className={`border rounded-lg py-2 px-4 text-center font-semibold transition-colors duration-200 ${
                    SelectedSlot?.startTime === slot?.startTime &&
                    SelectedSlot?.endTime === slot?.endTime
                      ? "bg-[#0e5b5c] ring-2"
                      : "bg-[#177C82]"
                  } text-white hover:bg-[#0e5b5c]`}
                  onClick={() => handleSelectSlot(slot)}
                >
                  {slot.startTime} - {slot.endTime}
                </button>
              ))}
            </div>
          </div>
          {AvailableSlot?.data ? (
            <button
              onClick={HandleProccessPay}
              className="bg-[#177C82] text-white font-semibold py-2 px-4 rounded hover:bg-[#0e5b5c] transition-colors duration-300 w-full"
            >
              Proccess To Pay
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;
