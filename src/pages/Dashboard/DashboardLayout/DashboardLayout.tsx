/* eslint-disable @typescript-eslint/no-explicit-any */
import { Layout, Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useFindUserQuery } from "../../../Redux/Feature/Auth/AuthApi";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { LogOutUser } from "../../../Redux/Feature/Auth/AuthSlice";
import LogoutIcon from "@mui/icons-material/Logout";
const { Header, Content, Sider } = Layout;

const UserSidebarOption = [
  {
    key: "Home",
    label: <NavLink to={"/"}>Home</NavLink>,
  },
  {
    key: "Dashboard",
    label: <NavLink to={"/Dashboard"}>Dashboard</NavLink>,
  },
  {
    key: "MyBooking",
    label: <NavLink to={"MyBooking"}>My Booking</NavLink>,
  },
];

const AdminSidebarOption = [
  {
    key: "Home",
    label: <NavLink to={"/"}>Home</NavLink>,
  },
  {
    key: "Dashboard",
    label: <NavLink to={"/Dashboard"}>Dashboard</NavLink>,
  },
  {
    key: "FacilityManagement",
    label: <NavLink to={"Facilitys"}>Facility Management</NavLink>,
  },
  {
    key: "All Bookings",
    label: <NavLink to={"Bookings"}>All Bookings</NavLink>,
  },
  {
    key: "AdminManage",
    label: <NavLink to={"AdminManage"}>Add Admin</NavLink>,
  },
];

const Useritems = UserSidebarOption.map((data) => ({
  key: data.key,
  label: data.label,
}));
const Adminitems = AdminSidebarOption.map((data) => ({
  key: data.key,
  label: data.label,
}));

const DashboardLayout = () => {
  const dispatch = useDispatch();

  const User = useSelector((state: any) => state.Auth);

  const UserId = User?.user?.userId;

  const { data } = useFindUserQuery(UserId);

  const SidebarOption = data?.data?.role == "admin" ? Adminitems : Useritems;

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{ paddingTop: "40px", position: "sticky", top: 0, bottom: 0 }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={SidebarOption}
        />
      </Sider>
      <Layout style={{ height: "100vh", overflowY: "scroll" }}>
        <Header
          style={{
            padding: 5,
            background: "#177C82",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "sticky",
            top: 0,
            zIndex: 2,
          }}
        >
          <h1 className="ml-5 text-xl font-semibold text-white">Dashboard</h1>
          <a
            onClick={() => dispatch(LogOutUser(undefined))}
            className="btn hover:bg-slate-300"
          >
            <LogoutIcon /> Log Out
          </a>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
