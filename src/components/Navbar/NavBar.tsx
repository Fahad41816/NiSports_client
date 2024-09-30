/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/Logo/Black and White Soccer Logo/white.png";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { LogOutUser } from "../../Redux/Feature/Auth/AuthSlice";

const NavBar = () => {
  const User = useSelector((state: any) => state.Auth);

  const dispatch = useDispatch();

  return (
    <section className="bg-[#177C82] ">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[100] mt-3 w-52 p-2 shadow"
            >
              <NavLink to={"/"}>
                <li className="text-base font-semibold   hover:border-b-2">
                  <a>Home</a>
                </li>
              </NavLink>
              <NavLink to={"/Facility"}>
                <li className="text-base font-semibold   hover:border-b-2">
                  <a>Facility</a>
                </li>
              </NavLink>
              <NavLink to={"/Booking"}>
                <li className="text-base font-semibold    hover:border-b-2">
                  <a>Booking</a>
                </li>
              </NavLink>

              {User.user && (
                <NavLink to={"/Dashboard"}>
                  <li className="text-base font-semibold   hover:border-b-2">
                    <a>Dashboard</a>
                  </li>
                </NavLink>
              )}
              <NavLink to={'/About'}>
                <li className="text-base font-semibold   hover:border-b-2">
                  <a>About Us</a>
                </li>
              </NavLink>
              <NavLink to={'/Contact'}>
              <li className="text-base font-semibold   hover:border-b-2">
                <a>Contact Us</a>
              </li>
              </NavLink> 
            </ul>
          </div>
          <a className="h-20">
            <img
              className="w-full h-20 md:h-24 md:p-2 object-fill scale-125 ml-3 md:ml-0"
              src={Logo}
              alt=""
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal ">
            <li className="text-base  font-semibold text-white hover:border-b-2">
              <NavLink to={"/"}>
                <a>Home</a>
              </NavLink>
            </li>
            <li className="text-base font-semibold text-white hover:border-b-2">
              <NavLink to={"/Facility"}>
                <a>Facility</a>
              </NavLink>
            </li>
            <li className="text-base font-semibold text-white hover:border-b-2">
              <NavLink to={"/Booking"}>
                <a>Booking</a>
              </NavLink>
            </li>
            {User.user && (
              <li className="text-base font-semibold text-white hover:border-b-2">
                <NavLink to={"/Dashboard"}>
                  <a>Dashboard</a>
                </NavLink>
              </li>
            )}

            <li className="text-base font-semibold text-white hover:border-b-2">
              <NavLink to={"/About"}>
                <a>About Us</a>
              </NavLink>
            </li>
            <li className="text-base font-semibold text-white hover:border-b-2">
              <NavLink to={"/Contact"}>
                <a>Contact Us</a>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {User.user ? (
            <a
              onClick={() => dispatch(LogOutUser(undefined))}
              className="btn btn-sm md:btn-md hover:bg-slate-300"
            >
              <LogoutIcon /> Log Out
            </a>
          ) : (
            <NavLink to={"Login"}>
              <a className="btn btn-sm md:btn-md hover:bg-slate-300">
                <PeopleAltOutlinedIcon /> Login/Register
              </a>
            </NavLink>
          )}
        </div>
      </div>
    </section>
  );
};

export default NavBar;
