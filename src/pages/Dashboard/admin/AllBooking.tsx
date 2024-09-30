/* eslint-disable @typescript-eslint/no-explicit-any */
import { Spin } from "antd";
import { useGetAllBookingsQuery } from "../../../Redux/Feature/Booking/BookingApi";

const AllBooking = () => {
  const { data, isLoading } = useGetAllBookingsQuery(undefined);

  if(isLoading){
    return <Spin fullscreen/>
  }

  return (
    <section className="grid grid-cols-2">
      {data?.data?.map((booking : any) => (
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          {/* Facility Image */}
          <div className="h-48 w-full bg-gray-200">
            <img
              className="w-full h-full object-cover"
              src={booking.facility.image}
              alt={booking.facility.name}
            />
          </div>

          {/* Booking Details */}
          <div className="p-4">
            {/* Facility Name */}
            <h2 className="text-xl font-bold text-gray-800">
              {booking.facility.name}
            </h2>

            {/* Booking Date and Time */}
            <div className="mt-2 flex justify-between items-center">
              <div className="text-gray-600">
                <strong>Date:</strong> {booking.date}
              </div>
              <div className="text-gray-600">
                <strong>Time:</strong> {booking.startTime} - {booking.endTime}
              </div>
            </div>

            {/* Price and Status */}
            <div className="mt-2 flex justify-between items-center">
              <div className="text-gray-600">
                <strong>Total Price:</strong> ${booking.payableAmount}
              </div>
              <div
                className={`font-semibold ${
                  booking.isBooked === "confirmed"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {booking.isBooked}
              </div>
            </div>

            {/* User Details */}
            <div className="mt-4 border-t pt-4">
              <h3 className="text-lg font-bold text-gray-800">
                User Information
              </h3>
              <p className="text-gray-600">
                <strong>Name:</strong> {booking.user.name}
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> {booking.user.email}
              </p>
              <p className="text-gray-600">
                <strong>Phone:</strong> {booking.user.phone}
              </p>
              <p className="text-gray-600">
                <strong>Address:</strong> {booking.user.address}
              </p>
            </div>

            {/* Facility Location */}
            <div className="mt-4">
              <h4 className="text-lg font-bold text-gray-800">Location</h4>
              <p className="text-gray-600">{booking.facility.location}</p>
            </div>

            {/* Facility Description */}
            <div className="mt-4">
              <h4 className="text-lg font-bold text-gray-800">
                Facility Description
              </h4>
              <p className="text-gray-600">{booking.facility.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AllBooking;
