import { NavLink } from "react-router-dom";
import Banner from "../../assets/images/FootballBanner.webp";
import FootBallMan from "../../assets/images/FootBallMan.png";

const HomeBanner = () => {
  return (
    <section className="h-[400px] md:h-[600px]  max-w-[1400px] overflow-hidden relative items-center justify-center bg-[#1aa0aa] grid grid-cols-2">
      <div className="absolute  w-full h-full p-4 md:h-[600px] bg-slate-700 bg-opacity-30 z-20 flex items-start md:p-28 justify-center">
        <div className="w-full">
          <div data-aos="fade-up">
            <p className="md:w-full md:text-lg text-[rgb(170,244,12)] font-semibold mt-10 md:mt-0">
              World-Class Sports Facilities & Premium Courts
            </p>
            <h1 className="md:text-6xl w-full  md:w-[600px] font-bold text-white">
              Reserve Your{" "}
              <span className="text-[rgb(170,244,12)]">Sports Facility</span>{" "}
              and Elevate Your Game
            </h1>
            <p className="text-white font-semibold mt-2">
              Book Premium Courts and Fields with Ease. Access State-of-the-Art
              Facilities, Flexible Scheduling, <br /> and Competitive Rates for
              All Your Sporting Needs.
            </p>
            <NavLink to={'/Booking'}>
              <button className="btn mt-5 md:btn-lg">Book Now</button>
            </NavLink>
          </div>
        </div>
      </div>

      <img className="z-10  w-[400px] " src={FootBallMan} alt="" />
      <img
        className="w-[400px] z-10   h-[500px] rounded-badge"
        src={Banner}
        alt="Banner"
      />
      <div className="w-[300px] h-[400px] bg-[#2ecc71] bg-opacity-40 rounded-full -right-36  absolute top-1"></div>
      <div className="w-[300px] h-[400px] bg-[#2ecc71] bg-opacity-30 rounded-full   absolute top-1"></div>
      <div className="w-[100px] h-[100px] bg-[#1ad6e4] bg-opacity-30 rounded-full   absolute bottom-1"></div>
      <div className="w-[100px] h-[100px] bg-[#1ad6e4] bg-opacity-30 rounded-full shadow-lg shadow-[#1ad6e4]  absolute top-[300px] left-[500px]"></div>
    </section>
  );
};

export default HomeBanner;
