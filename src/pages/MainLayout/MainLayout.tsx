import { Outlet } from "react-router";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";

const MainLayout = () => {
  return (
    <section className="">
      <NavBar /> 
      <Outlet /> 
      <Footer />
    </section>
  );
};

export default MainLayout;
