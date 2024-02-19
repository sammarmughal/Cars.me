import React, { useState, useEffect } from "react";
import Nav from "../component/nav";
import Footer from "../component/footer";
import CarCard from "../component/usedCarCard";
import CustomerReviews from "../component/CustomerReviews";
import Logo from "../images/HomepageAssets/cars.png";
import banner from "../images/CarsDetailPageAssets/BANNER.png";
import banner2 from "../images/CarsDetailPageAssets/SPBanner.png";
import Mercedes from "../images/CarsDetailPageAssets/Mercedes.png";
import mercedes from "../images/CarsDetailPageAssets/mercedes-small.png";
import calendar from "../images/HomepageAssets/calender-svgrepo-com.png";
import meter from "../images/HomepageAssets/meter-free-2-svgrepo-com.png";
import group from "../images/HomepageAssets/Group99.png";
import engine from "../images/HomepageAssets/engine-motor-svgrepo-com.png";
import gearLiver from "../images/HomepageAssets/GearLiver-1.png";
import fireSvgrepo from "../images/HomepageAssets/fire-svgrepo-com.png";
import bilal from "../images/HomepageAssets/bilal.png";
import phone from "../images/CarsDetailPageAssets/phone.png";
import email from "../images/CarsDetailPageAssets/email.png";
import Car from "../images/HomepageAssets/car.png";
import whatsapp from "../images/CarsDetailPageAssets/whatsapp-svgrepo-com.png";
import stars from "../images/CarsDetailPageAssets/stars.png";
import { Link, useParams } from "react-router-dom";

const CarsDetail = () => {
  const { id } = useParams();
  const [carDetail, setCarDetail] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/car/${id}`)
      .then((response) => response.json())
      .then((car) => {
        setCarDetail(car);
      })
      .catch((error) => {
        console.error("Error fetching car detail:", error);
      });
  }, [id]);

  if (!carDetail) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Nav></Nav>
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
            className="rounded-lg bg-gradient-blue inline-block font-normal leading-6 ml-[-4px] select-none border-transparent py-2 px-4 text-lg  transition duration-150 ease-in-out font-semibold text-base "
          >
            {""}
            Search
          </button>
        </div>
      </section>
      <div className="flex justify-center mx-auto w-2/3 py-5 my-5">
        <img src={banner} />
      </div>
      <>
        <section className="w-[85%] mx-auto">
          <div>
            <h1 className="text-blue-800 font-medium text-2xl text-left py-2">
              {carDetail.car_name}
            </h1>
            <p className="text-blue-800 text-left pb-2">
              {carDetail.date_added}
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-[75%]">
              <img src={Mercedes} className="rounded-xl" />
            </div>
            <div className="flex flex-col gap-4 w-[21%]">
              <img src={mercedes} className="rounded-xl" />
              <img src={mercedes} className="rounded-xl" />
              <div className="relative">
                <img src={mercedes} className="rounded-xl" />
                <p className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center text-5xl bg-black text-white rounded-xl opacity-50">
                  +25
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-[85%] flex gap-5 py-6 mx-auto">
          <div className="w-[70%]">
            <h1 className="text-blue-800 text-2xl text-left  font-bold">
              Item Overview
            </h1>
            <div className="flex w-full py-6 gap-3">
              <div className="bg-white hover:shadow-inner rounded-xl w-full justify-center items-center p-2 flex flex-col shadow-xl shadow-blue-500/50 ">
                <img src={calendar} />
                <p className="text-red-600 py-2 text-lg">
                  {" "}
                  {carDetail.car_make}
                </p>
              </div>
              <div className="bg-white hover:shadow-inner rounded-xl w-full justify-center items-center p-2 flex flex-col shadow-xl shadow-blue-500/50 ">
                <img src={meter} />
                <p className="text-red-600 py-2 text-lg">
                  {" "}
                  {carDetail.car_mileage} Km
                </p>
              </div>
              <div className="bg-white hover:shadow-inner rounded-xl w-full justify-center items-center p-2 flex flex-col shadow-xl shadow-blue-500/50 ">
                <img src={group} />
                <p className="text-red-600 py-2 text-lg">
                  {" "}
                  {carDetail.car_seating_capacity} People
                </p>
              </div>
              <div className="bg-white hover:shadow-inner rounded-xl w-full justify-center items-center p-2 flex flex-col shadow-xl shadow-blue-500/50 ">
                <img src={engine} />
                <p className="text-red-600 py-2 text-lg">
                  {carDetail.car_engine_capacity}cc
                </p>
              </div>
              <div className="bg-white hover:shadow-inner rounded-xl w-full justify-center items-center p-2 flex flex-col shadow-xl shadow-blue-500/50 ">
                <img src={gearLiver} />
                <p className="text-red-600 py-2 text-lg capitalize">
                  {" "}
                  {carDetail.car_transmission}
                </p>
              </div>
              <div className="bg-white hover:shadow-inner rounded-xl w-full justify-center items-center p-2 flex flex-col shadow-xl shadow-blue-500/50 ">
                <img src={fireSvgrepo} />
                <p className="text-red-600 py-2 text-lg capitalize">
                  {" "}
                  {carDetail.car_engine_type}
                </p>
              </div>
            </div>
            <section className="my-6">
              <div className="bg-white hover:shadow-inner w-full rounded-xl  p-4 flex flex-col shadow-xl shadow-blue-500/50 ">
                <h1 className="text-blue-800 text-left py-2 text-2xl font-normal">
                  {" "}
                  Additional Details{" "}
                </h1>
                <div className="p-5 flex flex-col  gap-4">
                  <div className="flex justify-between text-slate-600  pb-2 border-b border-slate-800">
                    <p>Body Type</p>
                    <p className="capitalize">{carDetail.car_body_type}</p>
                  </div>
                  <div className="flex justify-between text-slate-600  pb-2 border-b border-slate-800">
                    <p>Fuel Type</p>
                    <p className="capitalize">{carDetail.car_engine_type}</p>
                  </div>
                  <div className="flex justify-between text-slate-600  pb-2 border-b border-slate-800">
                    <p>Seller Type</p>
                    <p className="capitalize">Dealer</p>
                  </div>
                  <div className="flex justify-between text-slate-600  pb-2 border-b border-slate-800">
                    <p>Seating Capacity</p>
                    <p className="capitalize">
                      {carDetail.car_seating_capacity} People
                    </p>
                  </div>
                  <div className="flex justify-between text-slate-600  pb-2 border-b border-slate-800">
                    <p>Transmission Type</p>
                    <p className="capitalize"> {carDetail.car_transmission}</p>
                  </div>
                  <div className="flex justify-between text-slate-600  pb-2 border-b border-slate-800">
                    <p>Engine Capacity</p>
                    <p className="capitalize">
                      {carDetail.car_engine_capacity}cc
                    </p>
                  </div>
                  <div className="flex justify-between text-slate-600  pb-2 border-b border-slate-800">
                    <p>Technical Features</p>
                    <p className="capitalize">Cruise Control, Power Steering</p>
                  </div>
                  <div className="flex justify-between text-slate-600  pb-2 border-b border-slate-800">
                    <p> Horsepower</p>
                    <p className="capitalize">{carDetail.car_power}</p>
                  </div>
                  <div className="flex justify-between text-slate-600  pb-2 border-b border-slate-800">
                    <p>Number of Cylinders</p>
                    <p className="capitalize">
                      {carDetail.car_number_of_cylinders}
                    </p>
                  </div>
                  <div className="flex justify-between text-slate-600  pb-2 border-b border-slate-800">
                    <p>Exterior Color</p>
                    <p className="capitalize">{carDetail.car_color}</p>
                  </div>
                  <div className="flex justify-between text-slate-600  pb-2 border-b border-slate-800">
                    <p>Warrenty</p>
                    <p className="capitalize">{carDetail.car_warrenty}</p>
                  </div>
                  <div className="flex justify-between text-slate-600  pb-2 border-b border-slate-800">
                    <p>Target Market</p>
                    <p className="capitalize">UAE</p>
                  </div>
                </div>
                <div className="text-right text-slate-600 text-sm px-5">
                  <p>
                    Air Conditioning, AM/FM Radio, Climate Control, Leather
                    <br />
                    Seats, Navigation System, Power Locks, Power Mirrors, Power
                    <br />
                    Seats, Power Sunroof, Power Windows, Premium Sound System,
                    <br />
                    Rear View Camera, Sunroof
                  </p>
                </div>
                <div className="flex mx-5 pt-3 text-slate-600  pb-2 border-b border-slate-800">
                  <p>Extras</p>
                </div>
              </div>
            </section>
            <section className="bg-white hover:shadow-inner w-full rounded-xl my-6  p-6 flex flex-col shadow-xl shadow-blue-500/50 ">
              <h1 className="text-blue-800 text-left py-2 text-2xl font-normal">
                {" "}
                Description{" "}
              </h1>
              <div className="text-left my-5 text-slate-600 text-sm">
                <p>- &#160;{carDetail.car_description}</p>
              </div>
              <div className="flex items-end justify-end">
                <div className="bg-gradient-to-b from-blue-700 to-cyan-500 flex items-center py-1 px-5 shadow-lg shadow-blue-500/50  justify-center text-white rounded-2xl ">
                  <p className="text-center  flex items-center text-sm">
                    See Full Description...{" "}
                  </p>
                </div>
              </div>
            </section>
          </div>
          <div className="w-[30%] flex flex-col gap-5">
            <div className="bg-white hover:shadow-inner w-full rounded-xl  p-4 flex flex-col shadow-xl shadow-blue-500/50 ">
              <h1 className="text-blue-800 text-left py-2 text-3xl font-normal">
                {" "}
                Price
              </h1>
              <h1 className="text-blue-800 text-left py-2 text-3xl font-bold">
                AED {carDetail.car_price}
              </h1>
            </div>
            <div className="bg-white hover:shadow-inner w-full rounded-xl  p-3 flex flex-col shadow-xl shadow-blue-500/50 ">
              <div className="flex  gap-3">
                <img src={bilal} className="" height={100} width={100} />
                <div className="flex flex-col py-3 gap-3">
                  <h2 className="text-blue-800 text-sm text-nowrap">
                    Posted By:
                    <span className="text-xs"> Bilal Motors LLC </span>
                  </h2>
                  <img src={stars} className="" height={100} width={100} />
                </div>
              </div>
              <div className="flex flex-col py-5 gap-4">
                <div className="border-1 border mx-4 border-blue-700 px-8 py-2 text-blue-800 hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 flex justify-between rounded-xl ">
                  <div className="flex items-center p-2">
                    <img src={phone} width={35} height={35} className="h-8" />
                    <p className="pl-4 text-sm font-medium text-nowrap">
                      Show Phone Number
                    </p>
                  </div>
                </div>
                <div className="border-1 border mx-4 border-blue-700 px-8 py-2 text-blue-800 hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500  flex justify-between rounded-xl ">
                  <div className="flex items-center p-2">
                    <img
                      src={whatsapp}
                      width={35}
                      height={35}
                      className="h-8"
                    />
                    <p className="pl-4 text-sm font-medium text-nowrap">
                      What's App
                    </p>
                  </div>
                </div>
                <div className="border-1 border mx-4 border-blue-700 px-8 py-2 text-blue-800 hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 flex justify-between rounded-xl ">
                  <div className="flex items-center p-2">
                    <img src={email} width={35} height={35} className="h-8" />
                    <p className="pl-4 text-sm font-medium text-nowrap">
                      Send Enquiry{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white hover:shadow-inner w-full rounded-xl  p-3 flex flex-col shadow-xl shadow-blue-500/50 ">
              <div className="flex flex-col gap-2 p-4">
                <h1 className="text-blue-800 text-left py-2 text-3xl font-normal">
                  {" "}
                  Location
                </h1>
                <h2 className="text-blue-800 text-lg text-nowrap">
                  Al Murar, Dubai, UAE
                </h2>
              </div>
              <div className="h-60">
                <iframe
                  className="rounded-xl map px-4 p-4"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13603.897520700484!2d74.3641293!3d31.5248636!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2996ebf1e1c519!2sX-EFFECTIVE!5e0!3m2!1sen!2s!4v1646999703464!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div className="flex items-center py-3 shadow-lg shadow-blue-500/50  justify-center bg-gradient-blue">
              <p className="text-center flex items-center text-lg">
                Report This Ad{" "}
              </p>
            </div>
          </div>
        </section>
      </>

      <section className="my-8 w-[85%]  mx-auto">
        <h1 className="text-blue-800 text-2xl my-4 text-left  font-bold">
          Similar Ads
        </h1>
        <div className="grid grid-cols-3 gap-6">
          <CarCard />
        </div>
        <div className="flex justify-center pt-5 my-5">
          <Link to="/cars" className="px-4 py-2 rounded-lg bg-gradient-blue">
            View More
          </Link>
        </div>
      </section>
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
          <div className="w-1/2 ease-in-out duration-300  flex justify-end">
            <img src={Car} />
          </div>
        </div>
      </div>

      <CustomerReviews />

      <Footer />
    </>
  );
};
export default CarsDetail;
