/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink, useLoaderData } from "react-router-dom"

 

const PaymentSuccess = () => {
  
  const {Tranid} : any = useLoaderData()

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-[#177C82] mb-4">Payment Successful!</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 text-[#177C82] mx-auto mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-gray-600 mb-4">Thank you for your payment! Your transaction was completed successfully.</p>
        
        {/* Transaction Details */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6">
          <h2 className="font-semibold text-lg mb-2">Transaction Details:</h2>
          <p className="text-gray-700">Transaction ID: <span className="font-bold">{Tranid}</span></p> 
          <p className="text-gray-700">Date: <span className="font-bold">{new Date().toLocaleDateString()}</span></p>
        </div>

        {/* Return Button */}
        <NavLink to="/" className="block text-center text-white bg-[#177C82] hover:bg-[#0f5357] rounded-lg py-2 px-4 transition duration-200">
          Go to Home
        </NavLink>
      </div>
    </div>
  </div>
  )
}

export default PaymentSuccess