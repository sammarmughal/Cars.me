import React from "react";
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
import car from "../images/HomepageAssets/car.png";
import whatsapp from "../images/CarsDetailPageAssets/whatsapp-svgrepo-com.png";
import stars from "../images/CarsDetailPageAssets/stars.png";

function CarsDetail() {
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
            className="form-control rounded-l-lg block w-full p-2 py-4 text-lg font-normal px-4 bg-white leading-6 text-gray-800  focus:ring hover:ring focus:ring-blue-300 ring-offset-0  transition duration-150 ease-in-out"
            style={{ border: "0px" }}
          />
          <button
            aria-label="Subscribe"
            className="rounded-lg inline-block font-normal leading-6 ml-[-4px] select-none border-transparent py-2 px-4 text-lg  transition duration-150 ease-in-out bg-gradient-to-b from-blue-700 to-cyan-500  font-semibold text-base  text-white"
          >
            {""}
            Search
          </button>
        </div>
      </section>
      <div className="flex justify-center mx-auto w-2/3 py-5 my-5">
        <img src={banner} />
      </div>
      <section className="w-[85%] mx-auto">
        <div>
          <h1 className="text-blue-800 text-2xl text-left py-2">
            MERCEDES BENZ CLS 450
          </h1>
          <p className="text-blue-800 text-left pb-2">Posted 1 hour ago</p>
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
              <p className="text-red-600 py-2 text-lg"> 2023</p>
            </div>
            <div className="bg-white hover:shadow-inner rounded-xl w-full justify-center items-center p-2 flex flex-col shadow-xl shadow-blue-500/50 ">
              <img src={meter} />
              <p className="text-red-600 py-2 text-lg"> 19000 Km</p>
            </div>
            <div className="bg-white hover:shadow-inner rounded-xl w-full justify-center items-center p-2 flex flex-col shadow-xl shadow-blue-500/50 ">
              <img src={group} />
              <p className="text-red-600 py-2 text-lg"> 4 People</p>
            </div>
            <div className="bg-white hover:shadow-inner rounded-xl w-full justify-center items-center p-2 flex flex-col shadow-xl shadow-blue-500/50 ">
              <img src={engine} />
              <p className="text-red-600 py-2 text-lg"> 1900cc</p>
            </div>
            <div className="bg-white hover:shadow-inner rounded-xl w-full justify-center items-center p-2 flex flex-col shadow-xl shadow-blue-500/50 ">
              <img src={gearLiver} />
              <p className="text-red-600 py-2 text-lg"> Automatic</p>
            </div>
            <div className="bg-white hover:shadow-inner rounded-xl w-full justify-center items-center p-2 flex flex-col shadow-xl shadow-blue-500/50 ">
              <img src={fireSvgrepo} />
              <p className="text-red-600 py-2 text-lg"> Petrol</p>
            </div>
          </div>
          <section className="my-6">
            <div className="bg-white hover:shadow-inner w-full rounded-xl  p-4 flex flex-col shadow-xl shadow-blue-500/50 ">
              <h1 className="text-blue-800 text-left py-2 text-2xl font-normal">
                {" "}
                Additional Details{" "}
              </h1>
            </div>
          </section>
          <section className="bg-white hover:shadow-inner w-full rounded-xl my-6  p-6 flex flex-col shadow-xl shadow-blue-500/50 ">
            <h1 className="text-blue-800 text-left py-2 text-2xl font-normal">
              {" "}
              Description{" "}
            </h1>
            <div className="flex items-end justify-end">
              <div className="bg-gradient-to-b from-blue-700 to-cyan-500 flex items-center py-1 px-5 shadow-lg shadow-blue-500/50  justify-center text-white rounded-2xl ">
                <a href="/" className="text-center flex items-center text-xl">
                  See Full Description...{" "}
                </a>
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
              AED 200,000
            </h1>
          </div>
          <div className="bg-white hover:shadow-inner w-full rounded-xl  p-3 flex flex-col shadow-xl shadow-blue-500/50 ">
            <div className="flex  gap-3 px-2">
              <img src={bilal} className="" height={100} width={100} />
              <div className="flex flex-col py-3 gap-3">
                <h2 className="text-blue-800 text-lg text-nowrap">
                  Posted By:<span className="text-sm"> Bilal Motors LLC </span>
                </h2>
                <img src={stars} className="" height={100} width={100} />
              </div>
            </div>
            <div className="flex flex-col py-5 gap-4">
              <div className="border-1 border mx-4 border-blue-700 px-8 py-2 text-blue-800 hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 flex justify-between rounded-xl ">
                <div className="flex items-center p-2">
                  <img src={phone} width={35} height={35} className="h-8" />
                  <p className="pl-4 font-medium text-nowrap">
                    Show Phone Number
                  </p>
                </div>
              </div>
              <div className="border-1 border mx-4 border-blue-700 px-8 py-2 text-blue-800 hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500  flex justify-between rounded-xl ">
                <div className="flex items-center p-2">
                  <img src={whatsapp} width={35} height={35} className="h-8" />
                  <p className="pl-4 font-medium text-nowrap">What's App</p>
                </div>
              </div>
              <div className="border-1 border mx-4 border-blue-700 px-8 py-2 text-blue-800 hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 flex justify-between rounded-xl ">
                <div className="flex items-center p-2">
                  <img src={email} width={35} height={35} className="h-8" />
                  <p className="pl-4 font-medium text-nowrap">Send Enquiry </p>
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
          <div className="bg-gradient-to-b from-blue-700 my-4 to-cyan-500 flex items-center py-3 shadow-lg shadow-blue-500/50  justify-center text-white rounded-xl ">
            <a href="/" className="text-center flex items-center text-2xl">
              Report This Ad{" "}
            </a>
          </div>
        </div>
      </section>
      <section className="my-8 w-full w-[85%]  mx-auto">
        <h1 className="text-blue-800 text-2xl my-4 text-left  font-bold">
          Similar Ads
        </h1>
        <div className="grid grid-cols-3 gap-6">
          <CarCard />
          <CarCard />
          <CarCard />
        </div>
        <div className="flex justify-center pt-5 my-5">
          <a  href="/" className="px-4 py-2 rounded-lg text-white bg-gradient-to-b from-blue-700 to-cyan-500">
            View More
          </a>
        </div>
      </section>
      <div className="bg-sky-100 my-4">
        <div className="w-11/12 flex justify-between mx-auto">
          <div>
            <img className="p-4 mt-5" height={115} width={145} src={Logo}></img>
            <h1 className="text-blue-800 border-l-4 font-bold pl-4 border-blue-800 text-5xl mt-10 text-left">
              Sell Your Car In Best Price <br /> At Cars.Me
            </h1>
            <div className="flex pt-5 my-5">
              <a href="/" className="px-4 py-2 rounded-lg text-white bg-gradient-to-b from-blue-700 to-cyan-500">
                Register Your Cars
              </a>
            </div>
          </div>
          <div className="w-1/2 flex justify-end">
            <img src={car} />
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto  my-10">
        <div className="flex justify-center py-4 items-center">
          <h1 className="text-blue-800 border-l-4 border-blue-800 pl-4 text-4xl text-center font-bold">
            Customer Reviews
          </h1>
        </div>
        <div className="grid grid-cols-3 my-6 gap-5">
          <CustomerReviews />
          <CustomerReviews />
          <CustomerReviews />
        </div>
        <div className="flex w-3/4  mx-auto py-5 my-5">
          <img src={banner2} />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default CarsDetail;
