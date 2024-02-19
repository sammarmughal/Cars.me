import React, { useState, useEffect } from "react";
import Nav from "../component/nav";
import Footer from "../component/footer";
import CarCard from "../component/usedCarCard";
import CustomerReviews from "../component/CustomerReviews";
import Logo from "../images/HomepageAssets/cars.png";
import banner from "../images/CarsDetailPageAssets/BANNER.png";
import banner2 from "../images/CarsDetailPageAssets/SPBanner.png";
import car from "../images/HomepageAssets/car.png";
import { IoIosArrowUp, IoMdSearch, IoIosHeartEmpty } from "react-icons/io";

const Cars = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isCollapsed2, setIsCollapsed2] = useState(true);
  const [isCollapsed3, setIsCollapsed3] = useState(true);
  const [isCollapsed4, setIsCollapsed4] = useState(true);
  const [isCollapsed5, setIsCollapsed5] = useState(true);
  const [isCollapsed6, setIsCollapsed6] = useState(true);
  const [isCollapsed7, setIsCollapsed7] = useState(true);
  const [isCollapsed8, setIsCollapsed8] = useState(true);
  const [isCollapsed9, setIsCollapsed9] = useState(true);
  const [isCollapsed10, setIsCollapsed10] = useState(true);

  const handleCollapseToggle = () => {
    setIsCollapsed((prevState) => !prevState);
  };
  const handleCollapseToggle2 = () => {
    setIsCollapsed2((prevState) => !prevState);
  };
  const handleCollapseToggle3 = () => {
    setIsCollapsed3((prevState) => !prevState);
  };
  const handleCollapseToggle4 = () => {
    setIsCollapsed4((prevState) => !prevState);
  };
  const handleCollapseToggle5 = () => {
    setIsCollapsed5((prevState) => !prevState);
  };
  const handleCollapseToggle6 = () => {
    setIsCollapsed6((prevState) => !prevState);
  };
  const handleCollapseToggle7 = () => {
    setIsCollapsed7((prevState) => !prevState);
  };
  const handleCollapseToggle8 = () => {
    setIsCollapsed8((prevState) => !prevState);
  };
  const handleCollapseToggle9 = () => {
    setIsCollapsed9((prevState) => !prevState);
  };
  const handleCollapseToggle10 = () => {
    setIsCollapsed10((prevState) => !prevState);
  };
  return (
    <>
      <Nav />
      <section className="bg-sky-100">
        <div className="flex justify-center opacity-50 pt-6">
          <img src={Logo} className="w-1/5" height={300} width={350} />
        </div>
        <h1 className="text-blue-800 py-5 text-4xl text-center font-bold">
          Discover the Perfect Ride for You
        </h1>
        <div className="flex justify-center mx-auto w-6/12 py-8">
          <input
            type="text"
            placeholder="Search by Keyword (e.g. Toyota Cars)"
            className="form-control rounded-l-lg block w-full p-2 py-4 text-lg font-normal px-4 bg-white leading-6 text-gray-800 focus:outline-none  focus:ring hover:ring focus:ring-blue-300 ring-offset-0  transition duration-150 ease-in-out"
            style={{ border: "0px" }}
          />
          <button
            aria-label="Subscribe"
            className="inline-block font-normal leading-6 ml-[-4px] select-none border-transparent py-2 px-4 text-lg  transition duration-150 ease-in-out bg-gradient-blue font-semibold text-base"
          >
            {""}
            Search
          </button>
        </div>
      </section>
      <div className="flex justify-center mx-auto w-2/3 py-5 my-5">
        <img src={banner} />
      </div>
      <div className="flex w-[85%] mx-auto">
        <div
          className="top-0 lg:block hidden rounded-2xl mb-7 text-blue-800 justify-center mx-3 shadow-xl shadow-blue-500/50 bg-sky-100  w-[334px]"
          style={{ maxHeight: "2500px" }}
        >
          <div className="bg-white border-b border-sky-200 p-4 flex items-center ">
            <p className="font-semibold text-sm">Search by Filters</p>
          </div>
          <div className="bg-white border-b border-sky-200 ">
            <div className="p-4 flex items-center justify-between ">
              <p className="font-semibold text-sm">Select Your City</p>
              <IoIosArrowUp
                stroke={2}
                className={`${
                  isCollapsed ? "transform rotate-180" : ""
                } w-6 h-6`}
                onClick={handleCollapseToggle}
              />
            </div>
            <div className={`${isCollapsed ? "hidden" : "block"}`}>
            <div className="px-4 pb-3">
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                      Dubai
                  </label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    Electronic Parts
                  </label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    Engine Parts
                  </label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    Transmission
                  </label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    Body Parts
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border-b border-sky-200 ">
            <div className="p-4 flex items-center justify-between ">
              <p className="font-semibold text-sm">Model</p>
              <IoIosArrowUp
                stroke={2}
                className={`${
                  isCollapsed2 ? "transform rotate-180" : ""
                } w-6 h-6`}
                onClick={handleCollapseToggle2}
              />
            </div>
            <div className={`${isCollapsed2 ? "hidden" : "block"}`}>
              <div className="px-4 pb-3">
                <div className="flex items-center my-2">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    Suspension
                  </label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    Electronic Parts
                  </label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    Engine Parts
                  </label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    Transmission
                  </label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    Body Parts
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border-b border-sky-200 ">
            <div className="p-4 flex items-center justify-between ">
              <p className="font-semibold text-sm">Make</p>
              <IoIosArrowUp
                stroke={2}
                className={`${
                  isCollapsed3 ? "transform rotate-180" : ""
                } w-6 h-6`}
                onClick={handleCollapseToggle3}
              />
            </div>
            <div className={`${isCollapsed3 ? "hidden" : "block"}`}>
              <div className="px-4">
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    Toyota Prius{" "}
                  </label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    Toyota Supra
                  </label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit	rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    Toyota Corolla
                  </label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit	rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    Toyota Grande
                  </label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit	rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    Toyota Prado TX
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border-b border-sky-200 ">
            <div className="p-4 flex items-center justify-between ">
              <p className="font-semibold text-sm">Price Range</p>
              <IoIosArrowUp
                stroke={2}
                className={`${
                  isCollapsed4 ? "transform rotate-180" : ""
                } w-6 h-6`}
                onClick={handleCollapseToggle4}
              />
            </div>
            <div className={`${isCollapsed4 ? "hidden" : "block"}`}>
              <div className="px-4">
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    Toyota Prius{" "}
                  </label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    Toyota Supra
                  </label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit	rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    Toyota Corolla
                  </label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit	rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    Toyota Grande
                  </label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit	rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    Toyota Prado TX
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border-b border-sky-200 ">
            <div className="p-4 flex items-center justify-between ">
              <p className="font-semibold text-sm">Year</p>
              <IoIosArrowUp
                stroke={2}
                className={`${
                  isCollapsed5 ? "transform rotate-180" : ""
                } w-6 h-6`}
                onClick={handleCollapseToggle5}
              />
            </div>
            <div className={`${isCollapsed5 ? "hidden" : "block"}`}>
              <div className="px-4">
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    Toyota Prius{" "}
                  </label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    Toyota Supra
                  </label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit	rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    Toyota Corolla
                  </label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit	rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    Toyota Grande
                  </label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit	rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    Toyota Prado TX
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border-b border-sky-200 ">
            <div className="p-4 flex items-center justify-between ">
              <p className="font-semibold text-sm">Max Mileage (Km)</p>
              <IoIosArrowUp
                stroke={2}
                className={`${
                  isCollapsed6 ? "transform rotate-180" : ""
                } w-6 h-6`}
                onClick={handleCollapseToggle6}
              />
            </div>
            <div className={`${isCollapsed6 ? "hidden" : "block"}`}>
              <div className="px-4">
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    Toyota Prius{" "}
                  </label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    Toyota Supra
                  </label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit	rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    Toyota Corolla
                  </label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit	rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    Toyota Grande
                  </label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit	rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    Toyota Prado TX
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border-b border-sky-200 ">
            <div className="p-4 flex items-center justify-between ">
              <p className="font-semibold text-sm">Transmission Type</p>
              <IoIosArrowUp
                stroke={2}
                className={`${
                  isCollapsed7 ? "transform rotate-180" : ""
                } w-6 h-6`}
                onClick={handleCollapseToggle7}
              />
            </div>
            <div className={`${isCollapsed7 ? "hidden" : "block"}`}>
              <div className="px-4">
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    Automatic
                  </label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    Manual
                  </label>
                </div>
               </div>
            </div>
          </div>
          <div className="bg-white border-b border-sky-200 ">
            <div className="p-4 flex items-center justify-between ">
              <p className="font-semibold text-sm">Body Type</p>
              <IoIosArrowUp
                stroke={2}
                className={`${
                  isCollapsed8 ? "transform rotate-180" : ""
                } w-6 h-6`}
                onClick={handleCollapseToggle8}
              />
            </div>
            <div className={`${isCollapsed8 ? "hidden" : "block"}`}>
              <div className="px-4">
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                   Sedan
                  </label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                   SUV
                  </label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit	rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    Van
                  </label>
                </div>
              
              </div>
            </div>
          </div>
          <div className="bg-white border-b border-sky-200 ">
            <div className="p-4 flex items-center justify-between ">
              <p className="font-semibold text-sm">Engine Type</p>
              <IoIosArrowUp
                stroke={2}
                className={`${
                  isCollapsed9 ? "transform rotate-180" : ""
                } w-6 h-6`}
                onClick={handleCollapseToggle9}
              />
            </div>
            <div className={`${isCollapsed9 ? "hidden" : "block"}`}>
              <div className="px-4">
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                   Petrol
                  </label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    Diesel
                  </label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit	rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                  Hybrid
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border-b border-sky-200 ">
            <div className="p-4 flex items-center justify-between ">
              <p className="font-semibold text-sm">Color</p>
              <IoIosArrowUp
                stroke={2}
                className={`${
                  isCollapsed10 ? "transform rotate-180" : ""
                } w-6 h-6`}
                onClick={handleCollapseToggle10}
              />
            </div>
            <div className={`${isCollapsed10 ? "hidden" : "block"}`}>
              <div className="px-4">
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    Black
                  </label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    White
                  </label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit	rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    Grey
                  </label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit	rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    Blue
                  </label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit	rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    Red
                  </label>
                </div>
                <div className="flex items-center my-2 ">
                  <input
                    type="radio"
                    id="brandf331"
                    className="text-red-600 bg-inherit	rounded-lg"
                    value="331"
                  />
                  <label className="mt-0 ml-2" htmlFor="brandf331">
                    Yellow
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full ml-3">
          <div className="flex text-blue-800 w-full  justify-between  rounded-xl items-center shadow-xl shadow-blue-500/50 bg-sky-100 p-2">
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
              <p className="text-blue-800">1 - 16 0f 2974</p>
            </div>
          </div>
          <div className="grid grid-cols-2 py-6 gap-6">
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
          </div>
        </div>
      </div>
      <div className="bg-sky-100 my-4">
        <div className="w-11/12 flex justify-between mx-auto">
          <div>
            <img className="p-4 mt-5" height={115} width={145} src={Logo}></img>
            <h1 className="text-blue-800 border-l-4 font-bold pl-4 border-blue-800 text-4xl mt-10 text-left">
              Sell Your Car In Best Price <br /> At Cars.Me
            </h1>
            <div className="flex pt-5 my-5">
              <p className="px-4 py-2 bg-gradient-blue">Register Your Cars</p>
            </div>
          </div>
          <div className="w-1/2 flex justify-end">
            <img src={car} className="ease-in-out duration-500" />
          </div>
        </div>
      </div>
      <CustomerReviews />

      <Footer />
    </>
  );
};
export default Cars;
