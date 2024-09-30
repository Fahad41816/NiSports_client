/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { useFindUserQuery } from "../../../Redux/Feature/Auth/AuthApi";

const DashboardHome = () => {
  const User = useSelector((state: any) => state.Auth);

  const UserId = User?.user?.userId;

  const { data } = useFindUserQuery(UserId);

  return (
    <section>
      <div className="w-full rounded-lg bg-[#e0dede] p-5 h-[200px] text-2xl font-bold ">
        <p className="w-[250px] font-serif ">Wellcome, {data?.data?.role == "admin" && "admin"} <span className="text-[#177C82]">{data?.data?.name}</span> </p>
      </div>
    </section>
  );
};

export default DashboardHome;
