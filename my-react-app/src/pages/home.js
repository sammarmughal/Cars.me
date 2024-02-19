import React from "react";
import Nav from "../component/nav";
import Footer from "../component/footer";
import Mainimg from "../images/HomepageAssets/wp6685548-group-of-cars-wallpapers.png";
import fromIcon from "../images/HomepageAssets/Aed.png";
import mapIcon from "../images/HomepageAssets/Page-1.png";
import wheelIcon from "../images/HomepageAssets/primary.png";
import TrnsmissionIcon from "../images/HomepageAssets/GearLiver.png";
import aboutCar from "../images/HomepageAssets/NoPath-Copy(4).png";
import Logo from "../images/HomepageAssets/cars.png";
import sparePartsBanner from "../images/HomepageAssets/Group243.png";
import cardCar from "../images/HomepageAssets/NoPath-Copy1.png";
import cardCar2 from "../images/HomepageAssets/NoPath-Copy2.png";
import car from "../images/HomepageAssets/car.png";
import { IoIosArrowDown } from "react-icons/io";
import { FaStar, FaRegStar, FaRegHeart } from "react-icons/fa";
import CarCard from "../component/usedCarCard";
import CustomerReviews from "../component/CustomerReviews";
import { Link } from "react-router-dom";
import SellerBenefits from "../component/sellerBenefits";
function Home() {
  const Card = (props) => {
    return (
      <>
        <div className="bg-white hover:shadow-inner rounded-2xl shadow-lg shadow-blue-500/50">
          <img className="rounded-2xl" src={props.src}></img>
            <div className="sm:p-4 p-2">
              <h1 className="text-blue-800 text-left mb-2 font-bold sm:text-xl">
                {props.title}
              </h1>
              <div className="flex gap-2">
                <FaStar className="text-amber-500" />
                <FaStar className="text-amber-500" />
                <FaStar className="text-amber-500" />
                <FaStar className="text-amber-500" />
                <FaRegStar className="text-slate-500" />
              </div>
            </div>
            <div className="mb-2 sm:p-4 p-2 flex justify-between">
              <Link className="px-4 py-1 flex items-center bg-gradient-blue">
                Shop Now
              </Link>
              <FaRegHeart className="text-blue-800 sm:w-8 sm:h-8 h-7 w-7" />
            </div>
          </div>
      </>
    );
  };


  return (
    <>
      <Nav />
      <section className="relative d-flex justify-center items-center">
        <div className="relative">
          <img className=" w-full h-full" src={Mainimg} />
          <div className="absolute z-10 top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2  text-center text-white">
            <h1 className="text-white text-center lg:text-lg sm:text-sm text-xs">
              Maximize Your Car's Value with Minimal Effort
            </h1>
            <h1 className="text-white text-center font-bold lg:text-4xl sm:text-2xl text-sm">
              Buy and Sell Cars For Free
            </h1>
            <div className="lg:mt-8 mt-3 w-max justify-center mx-auto">
              <p className="lg:px-10 sm:px-6  px-3 lg:py-3 py-1 sm:py-2 bg-gradient-blue">
                Sell Your Car
              </p>
            </div>
          </div>
        </div>
        <div className="absolute z-0 inset-0 bg-black bg-opacity-50 "></div>
      </section>
      <div className="bg-sky-100	lg:px-20 md:px-10 sm:px-4">
        <section className="lg:w-[60%] shadow-xl shadow-blue-500/50 bg-white z-20 rounded-xl mx-auto relative find-sec">
          <div className="pt-8 flex justify-center gap-2">
            <p className="px-4 py-1 rounded-full text-white bg-gradient-to-b from-blue-700 to-cyan-500">
              New
            </p>
            <p className="px-4  py-1 rounded-full text-blue-800 bg-transparent hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 border-1 border border-cyan-500 ">
              Used
            </p>
          </div>
          <h1 className="text-blue-800 py-3  lg:text-3xl text-xl text-center font-bold">
            Discover the Perfect Ride for You
          </h1>
          <div className="p-3 lg:mx-8 mx-4 grid  lg:grid-cols-3 grid-cols-2 gap-3">
            <div className="border-1 border border-cyan-500 text-xs font-medium flex justify-between rounded-xl ">
              <div className="flex items-center p-2">
                <img src={fromIcon} className="" />
                <p className="pl-2 text-slate-700">From</p>
              </div>
              <div className="flex items-center p-2">
                <IoIosArrowDown className="h-6 w-6 text-blue-800" />
              </div>
            </div>
            <div className="border-1 border  text-xs font-medium border-cyan-500  flex justify-between rounded-xl ">
              <div className="flex items-center p-2">
                <img src={fromIcon} className="" />
                <p className="pl-2 text-slate-700">To</p>
              </div>
              <div className="flex items-center p-2">
                <IoIosArrowDown className="h-6 w-6 text-blue-800" />
              </div>
            </div>
            <div className="border-1 border  text-xs font-medium border-cyan-500  flex justify-between rounded-xl ">
              <div className="flex items-center p-2">
                <img src={mapIcon} className="" />
                <p className="pl-2  text-slate-700">Select Country</p>
              </div>
              <div className="flex items-center p-2">
                <IoIosArrowDown className="h-6 w-6 text-blue-800" />
              </div>
            </div>
            <div className="border-1 border  text-xs font-medium border-cyan-500  flex justify-between rounded-xl ">
              <div className="flex items-center p-2">
                <img src={wheelIcon} className="" />
                <p className="pl-2 text-slate-700">Select Brand</p>
              </div>
              <div className="flex items-center p-2">
                <IoIosArrowDown className="h-6 w-6 text-blue-800" />
              </div>
            </div>
            <div className="border-1 border  text-xs font-medium border-cyan-500  flex justify-between rounded-xl ">
              <div className="flex items-center p-2">
                <img
                  src={TrnsmissionIcon}
                  width={35}
                  height={35}
                  className="h-8"
                />
                <p className="pl-2 text-slate-700 text-nowrap">
                  Transmission Type
                </p>
              </div>
              <div className="flex items-center p-2">
                <IoIosArrowDown className="h-6 w-6 text-blue-800" />
              </div>
            </div>
            <div className="text-xs font-medium flex items-center justify-center bg-gradient-blue">
              <p className="text-center flex items-center text-lg">Find Car</p>
            </div>
          </div>
        </section>
        <section className="mx-4">
          <h1 className="text-blue-800 border-l-4 font-bold pl-4 border-blue-800 sm:text-3xl text-xl mt-10 text-left">
            About Cars.Me
          </h1>
          <div className="flex sm:flex-row flex-col-reverse gap-6">
            <p className="sm:w-[60%]  text-sm sm:text-xs text-left pt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in.Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco la
              text-sm boris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="pt-5 sm:w-[50%] relative">
              <img src={aboutCar} className="lg:w-3/4" />
              <div className="absolute z-10 top-0 flex justify-center w-full">
              <img
                src={Logo}
                className=" w-20 mx-auto lg:pt-4 pt-8"
                style={{ left: "40%", transform: "translateX(-50%)" }}
              />
              </div>
            </div>
          </div>
          <div className="pt-6">
            <img src={sparePartsBanner} className="" />
          </div>
        </section>
      </div>
      <section className="my-6 w-11/12 mx-auto">
        <div className="flex justify-center items-center">
          <h1 className="text-blue-800 border-l-4 border-blue-800 pl-4 lg:text-4xl sm:text-3xl text-xl text-center font-bold">
            Popular Categories of Vehicles
          </h1>
        </div>
        <div className="flex flex-wrap sm:mx-auto lg:gap-8 gap-4 lg:justify-start justify-center w-full my-8">
          <p className="px-4 py-1 rounded-xl text-white bg-gradient-to-b from-blue-700 to-cyan-500">
            Sedan
          </p>
          <p className="px-4  py-1 rounded-xl text-blue-800 bg-transparent hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 border-1 border border-blue-500 ">
            Coupe
          </p>
          <p className="px-4  py-1 rounded-xl text-blue-800 bg-transparent hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 border-1 border border-blue-500 ">
            SUV
          </p>
          <p className="px-4  py-1 rounded-xl text-blue-800 bg-transparent hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 border-1 border border-blue-500 ">
            Wagon
          </p>
          <p className="px-4  py-1 rounded-xl text-blue-800 bg-transparent hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 border-1 border border-blue-500 ">
            Convertible
          </p>
          <p className="px-4  py-1 rounded-xl text-blue-800 bg-transparent hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 border-1 border border-blue-500 ">
            Hatchback
          </p>
          <p className="px-4  py-1 rounded-xl text-blue-800 bg-transparent hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 border-1 border border-blue-500 ">
            Crossover
          </p>
          <p className="px-4  py-1 rounded-xl text-blue-800 bg-transparent hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 border-1 border border-blue-500 ">
            Minivan
          </p>
          <p className="px-4  py-1 rounded-xl text-blue-800 bg-transparent hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 border-1 border border-blue-500 ">
            Pickup Truck
          </p>
          <p className="px-4  py-1 rounded-xl text-blue-800 bg-transparent hover:text-white hover:bg-gradient-to-b hover:from-blue-700 hover:to-cyan-500 border-1 border border-blue-500 ">
            Electric
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
          <Card src={cardCar} title="Honda Civic 2024" />
          <Card src={cardCar2} title="Toyota Camry 2023" />
          <Card src={cardCar} title="Honda Civic 2024" />
          <Card src={cardCar2} title="Toyota Camry 2023" />
          <Card src={cardCar} title="Honda Civic 2024" />
          <Card src={cardCar2} title="Toyota Camry 2023" />
          <Card src={cardCar} title="Honda Civic 2024" />
          <Card src={cardCar2} title="Toyota Camry 20234" />
        </div>
        <div className="flex justify-center my-10">
          <p className="px-4 py-2 rounded-lg bg-gradient-blue">
            View More Sedan Cars
          </p>
        </div>
      </section>
      <div className="bg-sky-100 my-4">
        <div className="w-11/12 flex justify-between mx-auto">
          <div>
            <img className="p-4 sm:mt-5 ld:w-[80%] w-[60%]" height={115} width={145} src={Logo}></img>
            <h1 className="text-blue-800 border-l-4 font-bold sm:pl-4 pl-2 border-blue-800 lg:text-4xl sm:text-2xl lg:mt-10 text-left">
              Sell Your Car In Best Price <br /> At Cars.Me
            </h1>
            <div className="flex lg:pt-5 my-5">
              <p className="px-4 py-2 bg-gradient-blue">Register Your Cars</p>
            </div>
          </div>
          <div className="sm:w-1/2 w-[60%] flex justify-end">
            <img src={car} className="ease-in-out object-scale-down duration-500" />
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto my-6">
        <div className="flex py-5 justify-center items-center">
          <h1 className="text-blue-800 border-l-4 border-blue-800 pl-4 lg:text-4xl sm:text-3xl text-xl text-center font-bold">
            Featured Used Cars
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 my-6 gap-5">
          <CarCard />
        </div>
        <div className="flex justify-center pt-5 my-5">
          <Link to="/cars" className="px-4 py-2 rounded-lg bg-gradient-blue">
            View All Featured Cars
          </Link>
        </div>
      </div>
     <SellerBenefits/>

      <CustomerReviews />

      <Footer />
    </>
  );
}
export default Home;
