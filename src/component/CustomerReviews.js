import React from "react";
import bilal from "../images/HomepageAssets/bilal.png";
import { FaStar } from "react-icons/fa";

const CustomerReviews = () => {
    return (
        <>
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-inner shadow-blue-500/50">
                <div className="flex justify-center p-6">
                    <img className="rounded-b-2xl" src={bilal}></img>
                </div>
                <div className="p-4">
                    <div className="flex pb-2 justify-center">
                        <h1 className="text-blue-800 text-left mb-2 font-bold text-2xl">Muhammad Bilal</h1>
                    </div>
                    <div className="flex justify-center gap-2">
                        <FaStar className="text-amber-500" />
                        <FaStar className="text-amber-500" />
                        <FaStar className="text-amber-500" />
                        <FaStar className="text-amber-500" />
                        <FaStar className="text-amber-500" />

                    </div>
                </div>
                <div className="mb-2 p-4">
                    <p className="text-center text-blue-800 py-2"> I recently used this car-selling platform to list my vehicle, and the experience was outstanding. The user-friendly interface made listing my car a breeze, and the professional marketing tools ensured my car stood out.</p>

                </div>
            </div>
        </>
    )
};
export default CustomerReviews;