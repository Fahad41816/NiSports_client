/* eslint-disable @typescript-eslint/no-explicit-any */
import { Spin } from "antd";
import FacilityCard from "../../components/FacilityCard/FacilityCard";
import PageImageTitle from "../../components/PageImageTitle/PageImageTitle";
import { useGetFacilityQuery } from "../../Redux/Feature/Facility/FacilityApi";
import TextTitle from "../../components/Ui/TextTitle";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
const Facility = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: any) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log(e);
    }
  };

  const { data: facilitys, isLoading } = useGetFacilityQuery({
    Search: searchTerm,
  });

  if (isLoading) {
    return <Spin fullscreen />;
  }

  return (
    <div className="">
      <PageImageTitle Location={"Facility"} />
      <section className="max-w-7xl mx-auto">
        <TextTitle Title={"All Facilitys"} />
        <div className="flex items-center justify-between">
          <form
            onSubmit={handleSearch}
            className="flex items-center border-2 border-gray-300 rounded-full p-2 shadow-sm focus-within:border-blue-400"
          >
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for facilities, locations..."
              className="outline-none flex-grow px-2 text-gray-700"
            />
            <button
              type="submit"
              className="text-white bg-[#177C82] p-2 rounded-full ml-2"
            >
              <SearchIcon />
            </button>
          </form>
        </div>
        {facilitys?.data?.length == 0 && (
          <div className="w-full h-[200px] p-10 text-center text-3xl font-semibold text-[#177C82]">
            No Data Found
          </div>
        )}
        <section className="w-full my-5 grid grid-cols-1 md:grid-cols-3 gap-4">
          {facilitys?.data?.map((Facility: any) => (
            <FacilityCard Facility={Facility} RedirectLink={Facility._id} />
          ))}
        </section>
      </section>
    </div>
  );
};

export default Facility;
