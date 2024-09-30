/* eslint-disable @typescript-eslint/no-explicit-any */
 

const Testimonial = ({testtimonial} : any) => {
  return (
    <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg p-4 bg-white">
    <img
      className="w-16 h-16 rounded-full mx-auto"
      src={testtimonial.image}
      alt="Client Image"
    />
    <div className="text-center mt-4">
      <p className="text-gray-700 italic">
      {testtimonial.testimonial}
      </p>
      <h3 className="font-bold text-lg mt-2">{testtimonial.name}</h3>
      <p className="text-gray-500">{testtimonial.position}</p>
    </div>
  </div>
  )
}

export default Testimonial