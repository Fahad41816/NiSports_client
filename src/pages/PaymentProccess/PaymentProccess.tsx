/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {  useLocation, useNavigate } from "react-router";
import { Toaster } from "sonner";
import Swal from "sweetalert2";

const PaymentProccess = () => {
  const Navigate = useNavigate();

  const User = useSelector((state: any) => state.Auth);

  const booking = useSelector((state: any) => state.Booking);
 

  useEffect(()=>{
    if(!booking.date){
      Navigate('/')
    }
  },[booking, Navigate])

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    address: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 

  const location = useLocation()

 

  const handleSubmit = async (e: any) => {
    e.preventDefault(); // Prevent default form submission behavior

    

    Swal.fire({
      title: "Payment Proccessing...",
      html: "please weiting for payment proccessing.", 
      background:'#177C82',
      color:"#fff", 
    }) 

    

    if(!User.user){
      Swal.fire({
        icon: "error",
        iconColor:"#177C82",
        title: "Oops...",
        text: "You Need To Login First!", 
      }).then(data => {
        if(data.isConfirmed){ 
          Navigate('/Login', {state:location.pathname})
        }
        Swal.close()
      });
      return
    }

    const startTime = booking.startTime.slice(0, 2);
    const EndTime = booking.endTime.slice(0, 2);

    const payableAmount =
      (Number(EndTime) - Number(startTime)) * booking.pricePerHour;

    const OrderDetails = {
      UserName: formData.name,
      UserPhone: formData.number,
      UserAddress: formData.address,
      User_Id: User.user.userId,
      BookingData: {
        date: booking.date,
        startTime: booking.startTime,
        endTime: booking.endTime,
        facility: booking.facility,
        payableAmount: payableAmount,
      },
    };

    // Handle form data (log to console, or send it to the backend)
    await fetch("https://nisports.vercel.app/Payment", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(OrderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location = data.GatewayPageURL;
      })
      .catch((err) => console.log(err));

    // Add payment processing logic here (e.g., call your API for SSL Commerz or AmarPay)
  };

  return (
    <form
      className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg m-10"
      onSubmit={handleSubmit}
    >
      <Toaster />
      {/* Name */}
      <div className="mb-4">
        <label
          className="block text-gray-700 font-semibold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#177C82]"
          placeholder="Enter your name"
          required
        />
      </div>

      {/* Number */}
      <div className="mb-4">
        <label
          className="block text-gray-700 font-semibold mb-2"
          htmlFor="number"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="number"
          name="number"
          value={formData.number}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#177C82]"
          placeholder="Enter your phone number"
          required
        />
      </div>

      {/* Address */}
      <div className="mb-4">
        <label
          className="block text-gray-700 font-semibold mb-2"
          htmlFor="address"
        >
          Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#177C82]"
          placeholder="Enter your address"
          required
        />
      </div>

      {/* Submit Button */}
      <div className="mt-6">
        <button
          type="submit"
          className="w-full bg-[#177C82] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#0e5b5c] transition-colors duration-200"
        >
          Proceed to Payment
        </button>
      </div>
    </form>
  );
};

export default PaymentProccess;
