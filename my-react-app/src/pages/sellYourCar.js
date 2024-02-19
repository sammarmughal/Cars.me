import React from "react";
import Nav from "../component/nav";
import Footer from "../component/footer";
import CustomerReviews from "../component/CustomerReviews";
import sellCar from "../images/SellYourCar/sellCar.png";
import home from "../images/SellYourCar/home.png";
import banner from "../images/CarsDetailPageAssets/BANNER.png";
import exterior from "../images/SellYourCar/car-svgrepo-com.png";
import interior from "../images/SellYourCar/safety-seat-car-svgrepo-com.png";
import Accident from "../images/SellYourCar/accident.png";
import CarCard from "../component/usedCarCard";
import { Link } from "react-router-dom";

function SellYourCar() {
  return (
    <>
      <Nav />
      <section className="model-img flex relative justify-center">
        <div className="w-full h-full absolute inset-0 bg-black opacity-50"></div>
        <img
          src={sellCar}
          alt="Banner"
          className="w-full h-auto shadow mx-auto"
          width="1500"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 text-white text-center">
          <h1 className="text-3xl font-bold">
            Sell Your Call With Ease in Dubai
          </h1>
          <p className="text-sm font-bold py-2">
            {" "}
            Introduce the user-friendly process and benefits of selling their
            car through your platform
          </p>

          <div className="flex gap-2 items-center justify-center">
            <div className="pb-2">
              <img src={home} alt="home" className="" width="40" height="35" />
            </div>
            <div className="flex gap-1 items-start text-start">
              <p className="hover:text-red-500 text-white">Home </p>
              <p className="text-cyan-600 font-semibold text-sm">
                / Sell Your Car
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-sky-100 px-10">
        <div className="flex justify-center mx-auto w-2/3 py-5">
          <img src={banner} />
        </div>
        <h1 className="text-3xl text-blue-800 text-center font-bold">
          List Your Car With Ease
        </h1>
        <p className="text-blue-800 text-center">
          {" "}
          Experience a hassle-free journey to sell your car with our dedicated
          approach.
        </p>
        <div>
          <div className="bg-gradient-to-b rounded-full w-fit px-1 flex justify-center  from-blue-700 to-cyan-500">
            <p className="text-white text-lg w-5 text-center  font-semibold">
              1
            </p>
          </div>
          <div className="border-b-8 border-sky-600 pb-4 w-[30%]">
            <h2 className="text-blue-800 uppercase text-lg pt-2">
              Vehicle Information
            </h2>
            <p className="text-blue-800">Add Your Vehicle Details </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 py-8">
          <div className="flex flex-col gap-2 ">
            <label className="text-blue-800 text-sm">Make </label>
            <input
              type="text"
              className="px-4 bg-blue-100 py-2 border border-blue-700 focus:outline-none focus:shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label className="text-blue-800 text-sm">Model </label>
            <input
              type="text"
              className="px-4 bg-blue-100 py-2 border border-blue-700 focus:outline-none focus:shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label className="text-blue-800 text-sm">Year </label>
            <input
              type="text"
              className="px-4 bg-blue-100 py-2 border border-blue-700 focus:outline-none focus:shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label className="text-blue-800 text-sm">Asking Price(AED) </label>
            <input
              type="text"
              className="px-4 bg-blue-100 py-2 border border-blue-700 focus:outline-none focus:shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label className="text-blue-800 text-sm">Milage (KM) </label>
            <input
              type="text"
              className="px-4 bg-blue-100 py-2 border border-blue-700 focus:outline-none focus:shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label className="text-blue-800 text-sm">VIN </label>
            <input
              type="text"
              className="px-4 bg-blue-100 py-2 border border-blue-700 focus:outline-none focus:shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label className="text-blue-800 text-sm">Exterior Color</label>
            <input
              type="text"
              className="px-4 bg-blue-100 py-2 border border-blue-700 focus:outline-none focus:shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label className="text-blue-800 text-sm">Interior Color</label>
            <input
              type="text"
              className="px-4 bg-blue-100 py-2 border border-blue-700 focus:outline-none focus:shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label className="text-blue-800 text-sm">Owner </label>
            <input
              type="text"
              className="px-4 bg-blue-100 py-2 border border-blue-700 focus:outline-none focus:shadow-lg"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <p className="save-btn"> Save</p>
        </div>
        <div>
          <div className="py-5">
            <div className="bg-gradient-to-b rounded-full w-fit px-1 flex justify-center  from-blue-700 to-cyan-500">
              <p className="text-white text-lg w-5 text-center  font-semibold">
                2
              </p>
            </div>
            <div className="border-b-8 border-sky-600 pb-4 w-[30%]">
              <h2 className="text-blue-800 uppercase text-lg pt-2">
                Vehicle Condition
              </h2>
              <p className="text-blue-800">Add Your Vehicle Condition </p>
            </div>
          </div>
          <div className="border-b-2 border-blue-700 pb-4">
            <div className="flex items-center gap-6">
              <img src={exterior} className="" />
              <h1 className="text-2xl font-bold text-blue-800">
                Exterior Condition
              </h1>
            </div>
            <p className="text-blue-800">What is the Exterior Condition?</p>
            <div className="flex gap-4">
              <div className="flex items-center my-2 ">
                <input
                  type="radio"
                  id="brandf331"
                  className="text-red-600 bg-sky-100 rounded-lg"
                  value="331"
                />
                <label className="mt-0 ml-2 text-blue-800">Extra Clean</label>
              </div>
              <div className="flex items-center my-2 ">
                <input
                  type="radio"
                  id="brandf331"
                  className="text-red-600 bg-sky-100 rounded-lg"
                  value="331"
                />
                <label className="mt-0 ml-2 text-blue-800">Clean</label>
              </div>
              <div className="flex items-center my-2 ">
                <input
                  type="radio"
                  id="brandf331"
                  className="text-red-600 bg-sky-100 rounded-lg"
                  value="331"
                />
                <label className="mt-0 ml-2 text-blue-800">Average </label>
              </div>
              <div className="flex items-center my-2 ">
                <input
                  type="radio"
                  id="brandf331"
                  className="text-red-600 bg-sky-100 rounded-lg"
                  value="331"
                />
                <label className="mt-0 ml-2 text-blue-800">Average Below</label>
              </div>
              <div className="flex items-center my-2 ">
                <input
                  type="radio"
                  id="brandf331"
                  className="text-red-600 bg-sky-100 rounded-lg"
                  value="331"
                />
                <label className="mt-0 ml-2 text-blue-800">I don't know </label>
              </div>
            </div>
          </div>
          <div className="my-4 border-b-2 border-blue-700 pb-4">
            <div className="flex items-center gap-6">
              <img src={interior} className="" />
              <h1 className="text-2xl font-bold text-blue-800">
                Interior Condition
              </h1>
            </div>
            <p className="text-blue-800 pt-4">
              What is the Interior Condition?
            </p>
            <div className="flex gap-4">
              <div className="flex items-center my-2 ">
                <input
                  type="radio"
                  id="brandf331"
                  className="text-red-600 bg-sky-100 rounded-lg"
                  value="331"
                />
                <label className="mt-0 ml-2 text-blue-800">Extra Clean</label>
              </div>
              <div className="flex items-center my-2 ">
                <input
                  type="radio"
                  id="brandf331"
                  className="text-red-600 bg-sky-100 rounded-lg"
                  value="331"
                />
                <label className="mt-0 ml-2 text-blue-800">Clean</label>
              </div>
              <div className="flex items-center my-2 ">
                <input
                  type="radio"
                  id="brandf331"
                  className="text-red-600 bg-sky-100 rounded-lg"
                  value="331"
                />
                <label className="mt-0 ml-2 text-blue-800">Average </label>
              </div>
              <div className="flex items-center my-2 ">
                <input
                  type="radio"
                  id="brandf331"
                  className="text-red-600 bg-sky-100 rounded-lg"
                  value="331"
                />
                <label className="mt-0 ml-2 text-blue-800">Average Below</label>
              </div>
              <div className="flex items-center my-2 ">
                <input
                  type="radio"
                  id="brandf331"
                  className="text-red-600 bg-sky-100 rounded-lg"
                  value="331"
                />
                <label className="mt-0 ml-2 text-blue-800">I don't know </label>
              </div>
            </div>
          </div>
          <div className="my-4   pb-4">
            <div className="flex items-center gap-6">
              <img src={Accident} className="" />
              <h1 className="text-2xl font-bold text-blue-800">Accident</h1>
            </div>
            <p className="text-blue-800 pt-4">Has the car Had An Accident?</p>
            <div className="flex gap-10">
              <div className="flex items-center my-2 ">
                <input
                  type="radio"
                  id="brandf331"
                  className="text-red-600 bg-sky-100 rounded-lg"
                  value="331"
                />
                <label className="mt-0 ml-2 text-blue-800">Yes</label>
              </div>
              <div className="flex items-center my-2 ">
                <input
                  type="radio"
                  id="brandf331"
                  className="text-red-600 bg-sky-100 rounded-lg"
                  value="331"
                />
                <label className="mt-0 ml-2 text-blue-800">No</label>
              </div>
              <div className="flex items-center my-2 ">
                <input
                  type="radio"
                  id="brandf331"
                  className="text-red-600 bg-sky-100 rounded-lg"
                  value="331"
                />
                <label className="mt-0 ml-2 text-blue-800">I don't know </label>
              </div>
            </div>
            <div className="flex justify-end">
              <p className="save-btn"> Save</p>
            </div>
          </div>
          <div className="pb-5">
            <div className="py-5">
              <div className="bg-gradient-to-b rounded-full w-fit px-1 flex justify-center  from-blue-700 to-cyan-500">
                <p className="text-white text-lg w-5 text-center  font-semibold">
                  3
                </p>
              </div>
              <div className="border-b-8 border-sky-600 pb-4 w-[30%]">
                <h2 className="text-blue-800 uppercase text-lg pt-2">
                  Contact Information{" "}
                </h2>
                <p className="text-blue-800">Add Your Contact Detail</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 py-8">
              <div className="flex flex-col gap-2 ">
                <label className="text-blue-800 text-sm">First name* </label>
                <input
                  type="text"
                  className="px-4 bg-blue-100 py-2 border border-blue-700 focus:outline-none focus:shadow-lg  outline-[#007bff]"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <label className="text-blue-800 text-sm">Last Name* </label>
                <input
                  type="text"
                  className="px-4 bg-blue-100 py-2 border border-blue-700 focus:outline-none focus:shadow-lg outline-[#007bff]"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <label className="text-blue-800 text-sm">Phone Number* </label>
                <input
                  type="phone"
                  className="px-4 bg-blue-100 py-2 border border-blue-700 focus:outline-none focus:shadow-lg outline-[#007bff]"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <label className="text-blue-800 text-sm">E-mail*</label>
                <input
                  type="email"
                  className="px-4 bg-blue-100 py-2 border border-blue-700 focus:outline-none focus:shadow-lg  outline-[#007bff]"
                />
              </div>
            </div>
            <div className="flex flex-col  gap-2 ">
              <label className="text-blue-800 text-sm">Comment* </label>
              <div className="relative">
                <textarea
                  placeholder="Message"
                  rows="8"
                  name="message"
                  className="w-full rounded-md px-4 border border-blue-700 focus:outline-none focus:shadow-lg bg-blue-100 text-sm pt-2.5 outline-[#007bff]"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="flex pb-5 justify-end">
            <p className="save-btn"> Save And List Your Car</p>
          </div>
        </div>
      </section>
      <section className="w-[90%] mx-auto my-6">
        <div className="flex justify-center py-4 items-center">
          <h1 className="text-blue-800 border-l-4 border-blue-800 pl-4 text-4xl text-center font-bold">
            Popular Listings
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-5 my-6">
          <CarCard></CarCard>
          <CarCard></CarCard>
        </div>
        <div className="flex justify-center pt-5 my-5">
          <Link to="/cars" className="px-4 py-2 rounded-lg bg-gradient-blue">
            View More
          </Link>
        </div>
      </section>
      <CustomerReviews />
      <Footer />
    </>
  );
}
export default SellYourCar;
