import React, { useEffect, useState } from "react";
import axios from "axios";
import redCar from "../images/HomepageAssets/MaskGroup13.png";
import calendar from "../images/HomepageAssets/calender-svgrepo-com.png";
import meter from "../images/HomepageAssets/meter-free-2-svgrepo-com.png";
import group from "../images/HomepageAssets/Group99.png";
import engine from "../images/HomepageAssets/engine-motor-svgrepo-com.png";
import gearLiver from "../images/HomepageAssets/GearLiver-1.png";
import fireSvgrepo from "../images/HomepageAssets/fire-svgrepo-com.png";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const CarCard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    fetch("http://127.0.0.1:8000/api/car/").then((response) =>{
        return response.json()
    }).then((cars)=>{
        setData(cars)
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
    }; 
    
console.log(data);
      return (
          <>
            {data && data.length> 0 && data.map((car, index) => (
          <Link key={car.id} to={{ pathname: `/carDetail/${car.car_name}/${car.id}`, state: { carData: car } }}>
          <div key={index} className="bg-white hover:shadow-inner sm:rounded-3xl rounded-xl shadow-lg shadow-blue-500/50">
            <img className="rounded-b-2xl w-full" src={redCar}></img>
            <div className="sm:p-4 p-3">
              <div className="flex pb-2 justify-between">
                <h1 className="text-blue-800 text-left mb-2 font-bold sm:text-2xl text-lg">
                  {car.car_name}
                </h1>
                <p className="sm:px-6 px-2 rounded-xl text-red-600 bg-transparent flex items-center  border-1 border border-blue-500 ">
                 {car.car_rating}/10
                </p>
              </div>
              <p className="text-left mb-3 text-red-600 text-lg"> Dubai</p>
              <div className="grid sm:grid-cols-3 grid-cols-2  gap-x-2 gap-y-5">
                <div className="flex justify-between sm:justify-around items-center">
                  <img src={calendar} className="sm:w-8 sm:h-8 w-6 h-6"/>
                  <p className="text-red-600 text-xs sm:text-sm">{car.car_make}</p>
                </div>
                <div className="flex justify-between sm:justify-around items-center">
                  <img src={meter}  className="sm:w-8 sm:h-8 w-6 h-6"/>
                  <p className="text-red-600 text-xs sm:text-sm">{car.car_mileage}</p>
                </div>
                <div className="flex justify-between sm:justify-around items-center">
                  <img src={group}  className="sm:w-8 sm:h-8 w-6 h-6"/>
                  <p className="text-red-600 text-xs sm:text-sm text-nowrap"> {car.car_seating_capacity} People</p>
                </div>
                <div className="flex justify-between sm:justify-around items-center">
                  <img src={engine}  className="sm:w-8 sm:h-8 w-6 h-6"/>
                  <p className="text-red-600 text-xs sm:text-sm"> {car.car_engine_capacity}cc</p>
                </div>
                <div className="flex justify-between sm:justify-around items-center">
                  <img src={gearLiver}  className="w-7 h-7"/>
                  <p className="text-red-600 text-xs sm:text-sm capitalize">{car.car_transmission} </p>
                </div>
                <div className="flex justify-between sm:justify-around items-center">
                  <img src={fireSvgrepo}  className="sm:w-8 sm:h-8 w-6 h-6"/>
                  <p className="text-red-600 text-xs sm:text-sm capitalize"> {car.car_engine_type}</p>
                </div>
              </div>
            </div>
            <div className="mb-2 p-4 flex justify-between">
              <h1 className="text-blue-800 text-left mb-2 font-bold sm:text-2xl text-sm">
                AED 1,95,000
              </h1>
              <FaRegHeart className="text-blue-800 sm:w-8 sm:h-8 w-5 h-5" />
            </div>
          </div>
         
          </Link>
          ))}
        </>
    );
};
export default CarCard;
