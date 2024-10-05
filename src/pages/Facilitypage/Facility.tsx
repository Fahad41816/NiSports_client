/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pagination, Spin } from "antd";
import FacilityCard from "../../components/FacilityCard/FacilityCard";
import PageImageTitle from "../../components/PageImageTitle/PageImageTitle";
import { useGetFacilityQuery } from "../../Redux/Feature/Facility/FacilityApi";
import TextTitle from "../../components/Ui/TextTitle";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
const Facility = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handlePriceChange = (event : any) => {
    const { name, value } = event.target;

    // Update the price range based on which slider is changed
    setPriceRange((prevRange) => {
      return name === "min"
        ? [parseInt(value), prevRange[1]]
        : [prevRange[0], parseInt(value)];
    });
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: any) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log(e);
    }
  };

  const [Page, setPage] = useState(1);

  const { data: facilitys, isLoading } = useGetFacilityQuery({
    Search: searchTerm,
    page: Page,
    limit: 9,
    filter: undefined,
  });

  const filteredFacilities = facilitys?.data?.data.filter(
    (facility : any) => facility.pricePerHour >= priceRange[0] && facility.pricePerHour <= priceRange[1]
  );

  if (isLoading) {
    return <Spin fullscreen />;
  }

  return (
    <div className="overflow-hidden">
      <PageImageTitle Location={"Facility"} />
      <section className="max-w-7xl mx-auto">
        <TextTitle Title={"All Facilitys"} />
        <div className="w-full flex items-center justify-between">
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
          <div className=" p-6 bg-base-100 shadow-xl rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-[#177C82]">
              Filter by Price
            </h3>

            <div className="flex justify-between items-center mb-2">
              <span className="  text-slate-500">Min: ${priceRange[0]}</span>
              <span className="text-slate-500">Max: ${priceRange[1]}</span>
            </div>

            <div className="flex space-x-4 items-center">
              {/* Min price range */}
              <input
                type="range"
                name="min"
                min="0"
                max={priceRange[1]} // Min slider cannot exceed max price
                value={priceRange[0]}
                onChange={handlePriceChange}
                className="range range-sm range-success"
              />

              {/* Max price range */}
              <input
                type="range"
                name="max"
                min={priceRange[0]} // Max slider cannot go below min price
                max="500"
                value={priceRange[1]}
                onChange={handlePriceChange}
                className="range range-sm range-success"
              />
            </div>
          </div>
        </div>
        {filteredFacilities?.length == 0 && (
          <div className="w-full h-[200px] p-10 text-center text-3xl font-semibold text-[#177C82]">
            No Data Found
          </div>
        )}
        <section className="w-full my-5 grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredFacilities?.map((Facility: any) => (
            <FacilityCard Facility={Facility} RedirectLink={Facility._id} />
          ))}
        </section>
      </section>
      <div className="w-full flex items-center justify-center m-5">
        <Pagination
          onChange={(e: number) => setPage(e)}
          current={Page}
          pageSize={9}
          total={facilitys?.data?.Total}
        />
      </div>
    </div>
  );
};

export default Facility;
