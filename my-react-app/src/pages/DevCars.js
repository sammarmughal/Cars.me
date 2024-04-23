import React, { useEffect, useState } from "react";
import Nav from "../component/nav";
import Footer from "../component/footer";
import banner from "../images/CarsDetailPageAssets/BANNER.png";
import { LoginPopup } from "../component/nav";
import CustomerReviews from "../component/CustomerReviews";
import Register from "../component/register";
import ReactPaginate from "react-paginate";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ContentLoader from "react-content-loader";
import { Link } from "react-router-dom";
import calendar from "../images/HomepageAssets/calender-svgrepo-com.png";
import meter from "../images/HomepageAssets/meter-free-2-svgrepo-com.png";
import group from "../images/HomepageAssets/Group99.png";
import engine from "../images/HomepageAssets/engine-motor-svgrepo-com.png";
import gearLiver from "../images/HomepageAssets/GearLiver-1.png";
import fireSvgrepo from "../images/HomepageAssets/fire-svgrepo-com.png";
import { IoIosArrowDown } from "react-icons/io";
import Select from "react-select";

const DevCars = () => {
  const [isDropdownVariantOpen, setIsDropdownVariantOpen] = useState(false);
  const [isDropdownMileageOpen, setIsDropdownMileageOpen] = useState(false);
  const [isDropdownPriceOpen, setIsDropdownPriceOpen] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [paginationMeta, setPaginationMeta] = useState({
    totalPages: 0,
    currentPage: 0,
    totalRecords: 0,
    recordsOnCurrentPage: 0,
    recordFrom: 0,
    recordTo: 0,
  });
  const [isFilled, setIsFilled] = useState(false);
  const [carsData, setCarsdata] = useState([]);
  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageTo, setMileageTo] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const BASEURL = "https://sandbox.cars.me";
  const fetchData = async (
    currentPage = 1,
    mileagefrom = "",
    mileageto = "",
    pricefrom = "",
    priceto = ""
  ) => {
    console.log(currentPage, mileagefrom, mileageto,pricefrom,priceto);
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("page", currentPage);
    urlParams.set("mileagefrom", mileagefrom);
    urlParams.set("mileageto", mileageto);
    urlParams.set("pricefrom", pricefrom);
    urlParams.set("priceto", priceto);
    window.history.pushState(
      {},
      "",
      `${window.location.pathname}?${urlParams.toString()}`
    );
    const response = await fetch(
      `${BASEURL}/api/used-cars?page=${currentPage}&mileagefrom=${mileagefrom}&mileageto=${mileageto}&pricefrom=${pricefrom}&priceto=${priceto}`
    );
    const data = await response.json();
    console.log(data);
    setCarsdata(data.data.postAds);
    setPaginationMeta(data.data.meta);
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = parseInt(urlParams.get("page")) || 1;
    const mileagefrom = parseInt(urlParams.get("mileagefrom")) || "";
    const mileageto = parseInt(urlParams.get("mileageto")) || "";
    const pricefrom = parseInt(urlParams.get("pricefrom")) || "";
    const priceto = parseInt(urlParams.get("priceto")) || "";
    setMileageFrom(mileagefrom);
    setMileageTo(mileageto);
    setPriceFrom(pricefrom);
    setPriceTo(priceto);
    fetchData(page, mileagefrom, mileageto, pricefrom, priceto);
  }, []);
  const handlePagePaginationChange = (selectedPage) => {
    let page = selectedPage.selected + 1;
    const urlParams = new URLSearchParams(window.location.search);
    const mileagefrom = parseInt(urlParams.get("mileagefrom")) || "";
    const mileageto = parseInt(urlParams.get("mileageto")) || "";
    const pricefrom = parseInt(urlParams.get("pricefrom")) || "";
    const priceto = parseInt(urlParams.get("priceto")) || "";
    fetchData(page, mileagefrom, mileageto, pricefrom, priceto);
  };
  const handleMileageFromChange = (event) => {
    setMileageFrom(event.target.value);
    const urlParams = new URLSearchParams(window.location.search);
    const page = parseInt(urlParams.get("page")) || 1;
    const mileagefrom = event.target.value;
    const mileageto = parseInt(urlParams.get("mileageto")) || "";
    const pricefrom = parseInt(urlParams.get("pricefrom")) || "";
    const priceto = parseInt(urlParams.get("priceto")) || "";
    fetchData(page, mileagefrom, mileageto, pricefrom, priceto);
  };
  const handleMileageToChange = (event) => {
    setMileageTo(event.target.value);
    const urlParams = new URLSearchParams(window.location.search);
    const page = parseInt(urlParams.get("page")) || 1;
    const mileagefrom = parseInt(urlParams.get("mileagefrom")) || "";
    const mileageto = event.target.value;
    const pricefrom = parseInt(urlParams.get("pricefrom")) || "";
    const priceto = parseInt(urlParams.get("priceto")) || "";
    fetchData(page, mileagefrom, mileageto, pricefrom, priceto);
  };
  const handlePriceFromChange = (event) => {
    setPriceFrom(event.target.value);
    const urlParams = new URLSearchParams(window.location.search);
    const page = parseInt(urlParams.get("page")) || 1;
    const mileagefrom = parseInt(urlParams.get("mileagefrom")) || "";
    const mileageto = parseInt(urlParams.get("mileageto")) || "";
    const pricefrom = event.target.value;
    const priceto = parseInt(urlParams.get("priceto")) || "";
    fetchData(page, mileagefrom, mileageto, pricefrom, priceto);
  };

  const handlePriceToChange = (event) => {
    setPriceTo(event.target.value);
    const urlParams = new URLSearchParams(window.location.search);
    const page = parseInt(urlParams.get("page")) || 1;
    const mileagefrom = parseInt(urlParams.get("mileagefrom")) || "";
    const mileageto = parseInt(urlParams.get("mileageto")) || "";
    const pricefrom = parseInt(urlParams.get("pricefrom")) || "";
    const priceto = event.target.value;
    fetchData(page, mileagefrom, mileageto, pricefrom, priceto);
  };
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      padding: "4px",
      borderRadius: "0.375rem",
      backgroundColor: state.isSelected ? "rgb(186 230 253)" : "white",
      borderWidth: "1px",
      borderColor: state.isSelected ? "rgb(186 230 253)" : "",
      color: "black",
      "&:hover": {
        borderColor: "rgb(186 230 253)",
        color: "black",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "rgb(186 230 253)"
        : state.isFocused
        ? "rgb(186 230 253)"
        : null,
      color: "rgb(30 64 175)",
    }),
  };
  return (
    <>
      <Nav />
      <a
        href="https://spareparts.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center mx-auto sm:w-2/3 w-11/12 py-5 my-5"
      >
        <img src={banner} />
      </a>
      <div className="flex lg:w-[90%] w-[95%] max-w-[1800px] mx-auto">
        <div
          className="top-0 lg:block hidden rounded-2xl mb-7 text-blue-800 justify-center mx-3 shadow-xl  bg-sky-100 2xl:w-full xl:w-[334px]"
          style={{ maxHeight: "2500px", maxWidth: "320px" }}
        >
          <div className="bg-white border-b border-sky-200 p-4 flex items-center ">
            <p className="font-semibold text-sm">Search by Filters</p>
          </div>
          <div>
            {/* <div className="bg-white sm:w-auto w-full">
              <div className="p-4 flex  sm:w-auto w-full border-b border-sky-200 items-center justify-between">
                <p className="font-semibold text-sm">State</p>
                <IoIosArrowDown
                  onClick={handleToggleCountry}
                  className={`dropdownBtn cursor-pointer w-6 h-6 transition-transform duration-400 ${
                    isDropdownCountryOpen ? "transform rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`flex bg-white transition-all duration-300 ease-in-out delay-100 ${
                  isDropdownCountryOpen
                    ? "opacity-100 max-h-full p-4"
                    : "opacity-0 max-h-0"
                }`}
              >
                <div className="w-[90%]">
                  <Select
                    onChange={handleStateChange} // Assuming this function is defined somewhere
                    options={stateOptions} // Assuming this is your options list
                    styles={customStyles} // Assuming customStyles is defined somewhere
                    isSearchable
                    // value={state}
                    isMulti
                    // value={stateOptions.filter(option => selectedStateId.includes(option.value))}
                    value={selectedState}
                    // value={stateOptions.filter(option => selectedStateId.includes(searchObject.states))}
                  />
                </div>
              </div>
            </div> */}

            {/* <div className="bg-white sm:w-auto w-full">
              <div className="p-4 flex sm:w-auto w-full border-b border-sky-200 items-center justify-between">
                <p className="font-semibold text-sm">Select Your City</p>
                <IoIosArrowDown
                  onClick={handleToggleCity}
                  className={`w-6 h-6 cursor-pointer transition-transform duration-400 ${
                    isDropdownCityOpen ? "transform rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`flex bg-white transition-all duration-300 ease-in-out delay-100 ${
                  isDropdownCityOpen
                    ? "opacity-100 max-h-full p-4"
                    : "opacity-0 max-h-0"
                }`}
              >
                <div className="bg-white w-[90%]">
                  <Select
                    onChange={handleCityChange}
                    onInputChange={setSearchTerm}
                    options={cityOptions}
                    styles={customStyles}
                    isMulti
                    className="js-example-responsive"
                    isSearchable
                    value={cityOptions.filter((option) =>
                      selectedCityId.includes(option.value)
                    )}
                  />
                </div>
              </div>
            </div> */}
            {/* <div className="bg-white sm:w-auto w-full">
              <div className="p-4 flex sm:w-auto w-full border-b border-sky-200 items-center justify-between">
                <p className="font-semibold text-sm">Make</p>
                <IoIosArrowDown
                  onClick={handleToggleMake}
                  className={`w-6 h-6 cursor-pointer transition-transform duration-400 ${
                    isDropdownMakeOpen ? "transform rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`flex bg-white transition-all duration-300 ease-in-out delay-100 ${
                  isDropdownMakeOpen
                    ? "opacity-100 max-h-full p-4"
                    : "opacity-0 max-h-0"
                }`}
              >
                {" "}
                <div className="bg-white w-[90%]">
                  <Select
                    onChange={handleMakeChange}
                    options={makeOptions}
                    styles={customStyles}
                    isSearchable
                    value={makeOptions.find(
                      (option) => option.value === selectedMakeId
                    )}
                  />
                </div>
              </div>
            </div> */}
            {/* <div className="bg-white sm:w-auto w-full">
              <div className="p-4 flex sm:w-auto w-full border-b border-sky-200 items-center justify-between">
                <p className="font-semibold text-sm">Transmissions</p>
                <IoIosArrowDown
                  onClick={handleToggleTransmission}
                  className={`w-6 h-6 cursor-pointer transition-transform duration-400 ${
                    isDropdownTransmissionOpen ? "transform rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`flex bg-white transition-all duration-300 ease-in-out delay-100 ${
                  isDropdownTransmissionOpen
                    ? "opacity-100 max-h-full"
                    : "opacity-0 max-h-0"
                }`}
              >
                <div className="bg-white p-4">
                  {transmissionsOptions.map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center space-x-2 gap-4"
                    >
                      <input
                        type="checkbox"
                        value={option.value}
                        checked={selectedTransmission?.includes(option.value)}
                        onChange={() => handleTransmissionChange(option)}
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              </div>
            </div> */}
            {/* <div className="bg-white sm:w-auto w-full">
              <div className="p-4 flex sm:w-auto w-full border-b border-sky-200 items-center justify-between">
                <p className="font-semibold text-sm">Engine Types</p>
                <IoIosArrowDown
                  onClick={handleToggleEngineType}
                  className={`w-6 h-6 cursor-pointer transition-transform duration-400 ${
                    isDropdownEngineTypeOpen ? "transform rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`flex bg-white transition-all duration-300 ease-in-out delay-100 ${
                  isDropdownEngineTypeOpen
                    ? "opacity-100 max-h-full"
                    : "opacity-0 max-h-0"
                }`}
              >
                <div className="bg-white p-4">
                  {engineTypeOptions.map((option) => (
                    <div key={option.value} className="flex flex-col gap-4">
                      <label className="flex items-center space-x-2 gap-4">
                        <input
                          type="checkbox"
                          value={option.value}
                          checked={selectedEngine_type?.includes(option.value)}
                          onChange={() => handleEngineTypeChange(option)}
                        />
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div> */}
            {/* <div className="bg-white sm:w-auto w-full">
              <div className="p-4 flex sm:w-auto w-full border-b border-sky-200 items-center justify-between">
                <p className="font-semibold text-sm">Assembly</p>
                <IoIosArrowDown
                  onClick={handleToggleAssembly}
                  className={`w-6 h-6 cursor-pointer transition-transform duration-400 ${
                    isDropdownAssemblyOpen ? "transform rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`flex bg-white transition-all duration-300 ease-in-out delay-100 ${
                  isDropdownAssemblyOpen
                    ? "opacity-100 max-h-full"
                    : "opacity-0 max-h-0"
                }`}
              >
                {" "}
                <div className="bg-white p-4">
                  {assemblyOptions.map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center space-x-2 gap-4"
                    >
                      <input
                        type="checkbox"
                        value={option.value}
                        checked={selectedAssembly.includes(option.value)}
                        onChange={() => handleAssemblyChange(option)}
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              </div>
            </div> */}
            {/* <div className="bg-white sm:w-auto w-full">
              <div className="p-4 flex sm:w-auto w-full border-b border-sky-200 items-center justify-between">
                <p className="font-semibold text-sm">Year</p>
                <IoIosArrowDown
                  onClick={handleToggleYear}
                  className={`w-6 h-6 cursor-pointer transition-transform duration-400 ${
                    isDropdownYearOpen ? "transform rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`flex justify-start bg-white transition-all duration-300 ease-in-out delay-100 ${
                  isDropdownYearOpen
                    ? "opacity-100 max-h-full p-4"
                    : "opacity-0 max-h-0"
                }`}
              >
                {" "}
                <div className="flex w-[85%] justify-start bg-white">
                  <div className="css-dc7k1j-control formInput">
                    <input
                      placeholder="From"
                      styles={customStyles}
                      value={yearFrom}
                      onChange={handleYearFromChange}
                      className="w-full focus:outline-none px-2 py-1.5  placeholder:text-[hsl(0, 0%, 50%)]"
                    />
                  </div>
                  <div className="css-dc7k1j-control formInput">
                    <input
                      placeholder="To"
                      styles={customStyles}
                      value={yearTo}
                      onChange={handleYearToChange}
                      className="w-full focus:outline-none px-2 py-1.5  placeholder:text-[hsl(0, 0%, 50%)]"
                    />
                  </div>
                </div>
              </div>
            </div> */}
            <div className="bg-white sm:w-auto w-full">
              <div className="p-4 flex sm:w-auto w-full z-20 border-b border-sky-200 items-center justify-between">
                <p className="font-semibold text-sm">Price</p>
                <IoIosArrowDown
                  onClick={() => setIsDropdownPriceOpen(!isDropdownPriceOpen)}
                  className={`w-6 h-6 cursor-pointer transition-transform duration-400 ${
                    isDropdownPriceOpen ? "transform rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`flex justify-start bg-white transition-all duration-300 ease-in-out delay-100 ${
                  isDropdownPriceOpen
                    ? "opacity-100 max-h-full p-4"
                    : "opacity-0 max-h-0"
                }`}
              >
                <div className="justify-start bg-white w-[85%] flex">
                  <div className="css-dc7k1j-control formInput">
                    <input
                      placeholder="From"
                      onChange={handlePriceFromChange}
                      styles={customStyles}
                      value={priceFrom}
                      className="w-full focus:outline-none px-2 py-1.5  placeholder:text-[hsl(0, 0%, 50%)]"
                    />
                  </div>
                  <div className="css-dc7k1j-control formInput">
                    <input
                      onChange={handlePriceToChange}
                      placeholder="To"
                      styles={customStyles}
                      value={priceTo}
                      className="w-full focus:outline-none px-2 py-1.5  placeholder:text-[hsl(0, 0%, 50%)]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white sm:w-auto w-full z-20">
              <div className="p-4 flex sm:w-auto w-full border-b border-sky-200 items-center justify-between">
                <p className="font-semibold text-sm">Mileage</p>
                <IoIosArrowDown
                  onClick={() =>
                    setIsDropdownMileageOpen(!isDropdownMileageOpen)
                  }
                  className={`w-6 h-6 cursor-pointer transition-transform duration-300 ${
                    isDropdownMileageOpen ? "transform rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`flex bg-white transition-all duration-300 ease-in-out delay-100 ${
                  isDropdownMileageOpen
                    ? "opacity-100 max-h-full p-4"
                    : "opacity-0 max-h-0"
                }`}
              >
                <div className="w-[85%] flex">
                  <div className="css-dc7k1j-control formInput">
                    <input
                      placeholder="From"
                      onChange={handleMileageFromChange}
                      styles={customStyles}
                      value={mileageFrom}
                      className="w-full focus:outline-none px-2 py-1.5  placeholder:text-[hsl(0, 0%, 50%)]"
                    />
                  </div>
                  <div className="css-dc7k1j-control formInput">
                    <input
                      onChange={handleMileageToChange}
                      placeholder="To"
                      styles={customStyles}
                      value={mileageTo}
                      className="w-full focus:outline-none px-2 py-1.5  placeholder:text-[hsl(0, 0%, 50%)]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white sm:w-auto w-full border-b border-sky-200 z-20">
              <div className="p-4 flex sm:w-auto w-full items-center justify-between">
                <p className="font-semibold text-sm">Variant</p>
                <IoIosArrowDown
                  onClick={() =>
                    setIsDropdownVariantOpen(!isDropdownVariantOpen)
                  }
                  className={`w-6 h-6 cursor-pointer transition-transform duration-400 ${
                    isDropdownVariantOpen ? "transform rotate-180" : ""
                  }`}
                />
              </div>
            </div>
            {isDropdownVariantOpen && (
              <div className="bg-white p-4">
                <Select styles={customStyles} isSearchable />
              </div>
            )}
          </div>
        </div>
        <div className="w-full lg:ml-3">
          <div className="flex text-blue-800 w-full  justify-between  rounded-xl items-center shadow-xl  bg-sky-100 p-2">
            <div className="flex items-center">
              <p className="px-3 text-xs lg:text-base">Sort by:</p>
              <div className="bg-white p-1 rounded-xl">
                {" "}
                <label className="text-left whitespace-nowrap p-2  text-justify text-xs lg:text-base">
                  Recently added
                </label>
                <select
                  id="selectInput"
                  className="bg-transparent focus:outline-none h-7 w-7"
                  type="hidden"
                  name="date"
                ></select>
              </div>
            </div>
            <div>
              <p className="text-blue-800">
                {" "}
                {paginationMeta.currentPage} - {paginationMeta.totalPages} 0f{" "}
                {paginationMeta.totalRecords}
              </p>
            </div>
          </div>
          {carsData && carsData.length > 0 ? (
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 py-6 gap-6">
              {carsData.map((car, index) => (
                <div
                  key={index}
                  className="bg-white hover:shadow-inner car-card max-w-[350px] sm:rounded-3xl rounded-xl shadow-xl"
                >
                  <Link to={`/carDetail/${car.slug}`}>
                    <img
                      className="rounded-2xl w-full h-60 object-fit"
                      src={car.thumbnail}
                      alt={car.make_model}
                    ></img>
                  </Link>
                  <div className="p-3">
                    <div className="flex flex-row pb-2 justify-between">
                      <h1 className="text-blue-800 text-left mb-2 font-bold md:text-xl text-lg">
                        {car.make} {car.make_model} {car.year}
                      </h1>
                    </div>
                    <p className="text-left mb-3 text-red-600 md:text-lg text-sm">
                      {" "}
                      {car.state}
                    </p>
                    <div className="grid grid-cols-3 gap-x-2 gap-y-5">
                      <div className="flex items-center px-2">
                        <img
                          src={calendar}
                          className="object-contain sm:w-5 sm:h-5 w-6 h-6"
                          alt="Year"
                        />
                        <p className="text-red-600 lg:ml-2 sm:ml-1 ml-2 text-xs ">
                          {car.year}
                        </p>
                      </div>
                      <div className="flex items-center px-2">
                        <img
                          src={meter}
                          className="object-contain sm:w-5 sm:h-5 w-6 h-6"
                          alt="Mileage"
                        />
                        <p className="text-red-600 text-nowrap lg:ml-2 sm:ml-1 ml-2 text-xs ">
                          {car.mileage} Km
                        </p>
                      </div>
                      <div className="flex items-center px-2">
                        <img
                          src={group}
                          className="object-contain sm:w-5 sm:h-5 w-6 h-6"
                        />
                        <p className="text-red-600 lg:ml-2 sm:ml-1 ml-2 text-xs  text-nowrap">
                          {" "}
                          4 People
                        </p>
                      </div>
                      <div className="flex items-center px-2">
                        <img
                          src={engine}
                          className="object-contain sm:w-5 sm:h-5 w-6 h-6"
                        />
                        <p className="text-red-600 lg:ml-2 sm:ml-1 ml-2 text-xs ">
                          {car.engine_capacity}cc
                        </p>
                      </div>
                      <div className="flex items-center px-2">
                        <img
                          src={gearLiver}
                          className="object-contain sm:w-5 sm:h-5 w-6 h-6"
                        />
                        <p className="text-red-600 lg:ml-2 sm:ml-1 ml-2 text-xs  capitalize">
                          {car.transmission}{" "}
                        </p>
                      </div>
                      <div className="flex items-center px-2">
                        <img
                          src={fireSvgrepo}
                          className="object-contain sm:w-5 sm:h-5 w-6 h-6"
                        />
                        <p className="text-red-600 lg:ml-2 sm:ml-1 ml-2 text-xs  capitalize">
                          {" "}
                          {car.engine_type}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pb-3 pt-1 px-4 flex justify-between">
                    <h1 className="text-blue-800 text-left mb-2 font-bold sm:text-xl text-lg cursor-pointer">
                      AED {car.price}
                    </h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill={isFilled ? "currentColor" : "none"}
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                      className={
                        isFilled
                          ? "active:fill-blue-800 text-blue-800 w-6 h-6"
                          : "text-blue-800 w-6 h-6"
                      }
                      // onClick={handleClickHeart}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-6">
              <ContentLoader
                speed={2}
                width={350}
                height={475}
                viewBox="0 0 350 475"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
              >
                <rect x="0" y="0" rx="10" ry="10" width="350" height="200" />
                <rect x="20" y="220" rx="0" ry="0" width="200" height="20" />
                <rect x="20" y="250" rx="0" ry="0" width="120" height="20" />
                <rect x="20" y="290" rx="0" ry="0" width="80" height="20" />
                <rect x="20" y="330" rx="0" ry="0" width="80" height="20" />
                <rect x="20" y="370" rx="0" ry="0" width="80" height="20" />
                <rect x="20" y="410" rx="0" ry="0" width="80" height="20" />
                <rect x="20" y="450" rx="0" ry="0" width="80" height="20" />
              </ContentLoader>
            </div>
          )}
          <div className="flex justify-center">
            {paginationMeta.totalPages > 1 && (
              <div className="flex">
                <ReactPaginate
                  previousLabel={
                    <div className="p-2 rounded-full bg-white border border-slate-700 text-black">
                      <IoIosArrowBack className="flex p-0" />
                    </div>
                  }
                  nextLabel={
                    <div className="p-2 rounded-full bg-white border border-slate-700 text-black">
                      <IoIosArrowForward className="flex p-0" />
                    </div>
                  }
                  breakLabel={"..."}
                  breakClassName={"mx-2"}
                  pageCount={paginationMeta.totalPages}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePagePaginationChange}
                  containerClassName={
                    "flex gap-4 justify-center py-5 items-center space-x-2.5"
                  }
                  subContainerClassName={
                    "flex justify-center py-5 items-center space-x-2.5"
                  }
                  activeClassName={"active"}
                  activeLinkClassName={
                    "border-solid border-gray-600 px-4 py-2 rounded-full no-underline text-white bg-gradient-to-b from-blue-700 to-cyan-500"
                  }
                  pageClassName={
                    "mx-2 border border-slate-700 rounded-full cursor-pointer transition-all duration-300"
                  }
                  pageLinkClassName={
                    "border-solid border-gray-600 px-4 py-2 rounded-full no-underline text-black flex hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500"
                  }
                  initialPage={paginationMeta.currentPage - 1}
                />
              </div>
            )}
          </div>
        </div>
        {/* <div className="lg:hidden block ">
          <div
            ref={dialogRef}
            className={`popup top-0 rounded-2xl mb-7 text-blue-800 justify-center mx-auto shadow-xl  bg-sky-100  sm:w-[400px] w-[300px] ${
              open ? "open" : ""
            }`}
            style={{ maxHeight: "2500px" }}
            aria-modal="true"
            onKeyDown={() => setOpen(false)}
          >
            <div
              className="overlay"
              aria-hidden="true"
              onClick={handleClick}
            ></div>
            <div className="popup-content scroll overflow-y-auto lg:hidden block mx-auto justify-center w-full">
              <div className="bg-white w-full justify-around p-4 flex items-center ">
                <p className="font-semibold text-sm">Search by Filters</p>
              </div>
              <div className="bg-white w-full p-4 items-center">
                <div className="bg-white sm:w-auto w-full border-b border-sky-200">
                  <div className="p-4 flex  sm:w-auto w-full items-center justify-between">
                    <p className="font-semibold text-sm">State</p>
                    <IoIosArrowDown
                      onClick={handleToggleCountry}
                      className={`w-6 h-6 transition-transform duration-400 ${
                        isDropdownCountryOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
                {isDropdownCountryOpen && (
                  <div className="bg-white p-4">
                    <Select
                      onChange={handleStateChange} // Assuming this function is defined somewhere
                      options={stateOptions} // Assuming this is your options list
                      styles={customStyles} // Assuming customStyles is defined somewhere
                      isSearchable
                      isMulti
                      value={stateOptions.filter((option) =>
                        selectedStateId.includes(option.value)
                      )}
                    />
                  </div>
                )}
                <div className="bg-white sm:w-auto w-full border-b border-sky-200">
                  <div className="p-4 flex sm:w-auto w-full items-center justify-between">
                    <p className="font-semibold text-sm">Select Your City</p>
                    <IoIosArrowDown
                      onClick={handleToggleCity}
                      className={`w-6 h-6 transition-transform duration-400 ${
                        isDropdownCityOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
                {isDropdownCityOpen && (
                  <div className="bg-white p-4">
                    <Select
                      onChange={handleCityChange}
                      onInputChange={setSearchTerm}
                      options={cityOptions}
                      styles={customStyles}
                      isMulti
                      className="js-example-responsive"
                      isSearchable
                      value={cityOptions.filter((option) =>
                        selectedCityId.includes(option.value)
                      )}
                    />
                  </div>
                )}
                <div className="bg-white sm:w-auto w-full border-b border-sky-200">
                  <div className="p-4 flex sm:w-auto w-full items-center justify-between">
                    <p className="font-semibold text-sm">Make</p>
                    <IoIosArrowDown
                      onClick={handleToggleMake}
                      className={`w-6 h-6 transition-transform duration-400 ${
                        isDropdownMakeOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
                {isDropdownMakeOpen && (
                  <div className="bg-white p-4">
                    <Select
                      onChange={handleMakeChange}
                      options={makeOptions}
                      isSearchable
                      value={makeOptions.find(
                        (option) => option.value === selectedMakeId
                      )}
                    />
                  </div>
                )}
                <div className="bg-white sm:w-auto w-full border-b border-sky-200">
                  <div className="p-4 flex sm:w-auto w-full items-center justify-between">
                    <p className="font-semibold text-sm">Transmissions</p>
                    <IoIosArrowDown
                      onClick={handleToggleTransmission}
                      className={`w-6 h-6 transition-transform duration-400 ${
                        isDropdownTransmissionOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
                {isDropdownTransmissionOpen && (
                  <div className="bg-white p-4">
                    {transmissionsOptions.map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center space-x-2 gap-4"
                      >
                        <input
                          type="checkbox"
                          value={option.value}
                          checked={selectedTransmission.includes(option.value)}
                          onChange={() => handleTransmissionChange(option)}
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                )}
                <div className="bg-white sm:w-auto w-full border-b border-sky-200">
                  <div className="p-4 flex sm:w-auto w-full items-center justify-between">
                    <p className="font-semibold text-sm">Engine Types</p>
                    <IoIosArrowDown
                      onClick={handleToggleEngineType}
                      className={`w-6 h-6 transition-transform duration-400 ${
                        isDropdownEngineTypeOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
                {isDropdownEngineTypeOpen && (
                  <div className="bg-white p-4">
                    {engineTypeOptions.map((option) => (
                      <div key={option.value} className="flex flex-col gap-4">
                        <label className="flex items-center space-x-2 gap-4">
                          <input
                            type="checkbox"
                            value={option.value}
                            checked={selectedEngine_type?.includes(option.value)}
                            onChange={() => handleEngineTypeChange(option)}
                          />
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
                <div className="bg-white sm:w-auto w-full border-b border-sky-200">
                  <div className="p-4 flex sm:w-auto w-full items-center justify-between">
                    <p className="font-semibold text-sm">Assembly</p>
                    <IoIosArrowDown
                      onClick={handleToggleAssembly}
                      className={`w-6 h-6 transition-transform duration-400 ${
                        isDropdownAssemblyOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
                {isDropdownAssemblyOpen && (
                  <div className="bg-white p-4">
                    {assemblyOptions.map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center space-x-2 gap-4"
                      >
                        <input
                          type="checkbox"
                          value={option.value}
                          checked={selectedAssembly.includes(option.value)}
                          onChange={() => handleAssemblyChange(option)}
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                )}
                <div className="bg-white sm:w-auto w-full border-b border-sky-200">
                  <div className="p-4 flex sm:w-auto w-full items-center justify-between">
                    <p className="font-semibold text-sm">Year</p>
                    <IoIosArrowDown
                      onClick={handleToggleYear}
                      className={`w-6 h-6 transition-transform duration-400 ${
                        isDropdownYearOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
                {isDropdownYearOpen && (
                  <div className="flex justify-around bg-white p-4">
                    <div className="css-dc7k1j-control formInput">
                      <input
                        placeholder="From"
                        styles={customStyles}
                        onChange={handleYearFromChange}
                        className="w-full focus:outline-none px-2 py-1.5  placeholder:text-[hsl(0, 0%, 50%)]"
                      />
                    </div>
                    <div className="css-dc7k1j-control formInput">
                      <input
                        placeholder="To"
                        styles={customStyles}
                        onChange={handleYearToChange}
                        className="w-full focus:outline-none px-2 py-1.5  placeholder:text-[hsl(0, 0%, 50%)]"
                      />
                    </div>
                  </div>
                )}
                <div className="bg-white sm:w-auto w-full border-b border-sky-200">
                  <div className="p-4 flex sm:w-auto w-full items-center justify-between">
                    <p className="font-semibold text-sm">Price</p>
                    <IoIosArrowDown
                      onClick={handleTogglePrice}
                      className={`w-6 h-6 transition-transform duration-400 ${
                        isDropdownPriceOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
                {isDropdownPriceOpen && (
                  <div className="flex justify-around bg-white p-4">
                    <div className="css-dc7k1j-control formInput">
                      <input
                        placeholder="From"
                        onChange={handlePriceFromChange}
                        styles={customStyles}
                        className="w-full focus:outline-none px-2 py-1.5  placeholder:text-[hsl(0, 0%, 50%)]"
                      />
                    </div>
                    <div className="css-dc7k1j-control formInput">
                      <input
                        onChange={handlePriceToChange}
                        placeholder="To"
                        styles={customStyles}
                        className="w-full focus:outline-none px-2 py-1.5  placeholder:text-[hsl(0, 0%, 50%)]"
                      />
                    </div>
                  </div>
                )}
                <div className="bg-white sm:w-auto w-full border-b border-sky-200">
                  <div className="p-4 flex sm:w-auto w-full items-center justify-between">
                    <p className="font-semibold text-sm">Mileage</p>
                    <IoIosArrowDown
                      onClick={handleToggleMileage}
                      className={`w-6 h-6 transition-transform duration-400 ${
                        isDropdownMileageOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
                {isDropdownMileageOpen && (
                  <div className="flex justify-around bg-white p-4">
                    <div className="css-dc7k1j-control formInput">
                      <input
                        placeholder="From"
                        onChange={handleMileageFromChange}
                        styles={customStyles}
                        className="w-full focus:outline-none px-2 py-1.5  placeholder:text-[hsl(0, 0%, 50%)]"
                      />
                    </div>
                    <div className="css-dc7k1j-control formInput">
                      <input
                        onChange={handleMileageToChange}
                        placeholder="To"
                        styles={customStyles}
                        className="w-full focus:outline-none px-2 py-1.5  placeholder:text-[hsl(0, 0%, 50%)]"
                      />
                    </div>
                  </div>
                )}
                <div className="bg-white sm:w-auto w-full border-b border-sky-200">
                  <div className="p-4 flex sm:w-auto w-full items-center justify-between">
                    <p className="font-semibold text-sm">Variant</p>
                    <IoIosArrowDown
                      onClick={handleToggleVariant}
                      className={`w-6 h-6 transition-transform duration-400 ${
                        isDropdownVariantOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
                {isDropdownVariantOpen && (
                  <div className="bg-white p-4">
                    <Select styles={customStyles} isSearchable />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <Register />
      <CustomerReviews />
      <LoginPopup
        open={showLoginPopup}
        onClose={() => setShowLoginPopup(false)}
      />
      <Footer />
    </>
  );
};

export default DevCars;
