import React from "react";
import redCar from "../images/HomepageAssets/MaskGroup13.png";
import calendar from "../images/HomepageAssets/calender-svgrepo-com.png";
import meter from "../images/HomepageAssets/meter-free-2-svgrepo-com.png";
import group from "../images/HomepageAssets/Group99.png";
import engine from "../images/HomepageAssets/engine-motor-svgrepo-com.png";
import gearLiver from "../images/HomepageAssets/GearLiver-1.png";
import fireSvgrepo from "../images/HomepageAssets/fire-svgrepo-com.png";
import {FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";


const CarCard = () => {
    return (
        <>
            <div className="bg-white hover:shadow-inner rounded-3xl shadow-lg shadow-blue-500/50">
                <img className="rounded-b-2xl" src={redCar}></img>
                <div className="p-4">
                    <div className="flex pb-2 justify-between">
                        <h1 className="text-blue-800 text-left mb-2 font-bold text-2xl">Volkswagen ID.5 2023</h1>
                        <Link to="/" className="px-7  py-1 rounded-xl text-red-600 bg-transparent  border-1 border border-blue-500 ">9/10</Link>
                    </div>
                        <p className="text-left mb-3 text-red-600 text-lg"> Dubai</p>
                    <div className="grid grid-cols-3 gap-5">
                        <div className="flex justify-around">
                            <img src={calendar} />
                            <p className="text-red-600"> 2023</p>
                        </div>
                        <div className="flex justify-around">
                            <img src={meter} />
                            <p className="text-red-600"> 19000 Km</p>
                        </div>
                        <div className="flex justify-around">
                            <img src={group} />
                            <p className="text-red-600"> 4 People</p>
                        </div>
                        <div className="flex justify-around">
                            <img src={engine} />
                            <p className="text-red-600"> 1900cc</p>
                        </div>
                        <div className="flex justify-around">
                            <img src={gearLiver} />
                            <p className="text-red-600"> Automatic</p>
                        </div>
                        <div className="flex justify-around">
                            <img src={fireSvgrepo} />
                            <p className="text-red-600"> Petrol</p>
                        </div>
                    </div>
                </div>
                <div className="mb-2 p-4 flex justify-between">
                <h1 className="text-blue-800 text-left mb-2 font-bold text-2xl">AED 1,95,000</h1>
                    <FaRegHeart className="text-blue-800 w-8 h-8" />
                </div>
            </div>
        </>
    )
};
export default CarCard;