import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MainLayout from "./pages/MainLayout/MainLayout";
import Home from "./pages/Home/Home";
import AOS from "aos";
AOS.init({ duration: 1200 });
import "aos/dist/aos.css";
import About from "./pages/AboutPage/About";
import Contact from "./pages/ContactPage/Contact";
import Booking from "./pages/Booking/Booking";
import Facility from "./pages/Facilitypage/Facility";
import Login from "./pages/Login/Login";
import Registation from "./pages/Registation/Registation";
import { Provider } from "react-redux";
import Store, { Persistore } from "./Redux/Store";
import { PersistGate } from "redux-persist/integration/react";
import FacilityDetails from "./pages/FacilityDetails/FacilityDetails"; 
import PaymentProccess from "./pages/PaymentProccess/PaymentProccess";
import PaymentSuccess from "./pages/PaymentSuccess/PaymentSuccess";
import DashboardLayout from "./pages/Dashboard/DashboardLayout/DashboardLayout";
import DashboardHome from "./pages/Dashboard/DashboardHome/DashboardHome";
import MyBooking from "./pages/Dashboard/User/MyBooking";
import FacilityManagement from "./pages/Dashboard/admin/FacilityManagement";
import AllBooking from "./pages/Dashboard/admin/AllBooking";
import AddAdmin from "./pages/Dashboard/admin/AddAdmin";
import AdminPrivateRoute from "./PrivateRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import UserPrivateRoute from "./PrivateRoute/UserRoute";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Booking",
        element: <Booking />,
        loader: ({params}) => {return params}
      },
      {
        path: "/Facility",
        element: <Facility />,
      },
      {
        path: "/Facility/:id",
        element: <FacilityDetails />,
        loader: ({ params }) => {
          return params;
        },
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Registration",
        element: <Registation />,
      },
      {
        path: "/Payment",
        element: <PaymentProccess />,
      },
      {
        path: "/PaymentSuccess/:Tranid",
        element: <PaymentSuccess />,
        loader: ({params}) => { return params}
      },
      {
        path:"*",
        element: <ErrorPage/>
      }
    ],
  },
  {
    path: '/Dashboard',
    element: <PrivateRoute><DashboardLayout/></PrivateRoute> ,
    children: [
      { 
         index: true,
         element: <PrivateRoute><DashboardHome></DashboardHome></PrivateRoute> 
      },
      {  
        path: 'MyBooking',
        element: <UserPrivateRoute><MyBooking></MyBooking></UserPrivateRoute> 
      },
      {  
        path: 'Facilitys',
        element: <AdminPrivateRoute><FacilityManagement></FacilityManagement></AdminPrivateRoute>
      },
      {  
        path: 'Bookings',
        element: <AdminPrivateRoute><AllBooking></AllBooking></AdminPrivateRoute> 
      },
      {  
        path: 'AdminManage',
        element: <AdminPrivateRoute><AddAdmin></AddAdmin></AdminPrivateRoute> 
      }
    ]
  },
  
]);

function App() {
  return (
    <>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={Persistore}>
          <RouterProvider router={Router}></RouterProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
