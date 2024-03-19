import React, { useState, useEffect } from "react";
import Nav from "../component/nav";
import Footer from "../component/footer";
import Register from "../component/register";
import banner from "../images/HomepageAssets/banner241.png";
import { TailSpin } from "react-loader-spinner";

function ChangePassword() {
    const [password, setPassword] = useState('');
    const [password_confirmation, setPassword_confirmation] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({
        password: '',
        password_confirmation: '',
        oldPassword: '',
    });
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    console.log(message);

    useEffect(() => {
        console.log(errors);
    }, [errors]);

    const handleChangePassword = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});
        let token = localStorage.getItem('access_token');
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        const formdata = new FormData();
        formdata.append("password", password);
        formdata.append("password_confirmation", password_confirmation);

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
            redirect: "follow"
        };

        try {
            const response = await fetch("https://sandbox.cars.me/api/change-password", requestOptions);

            if (!response.ok) {
                throw new Error('Network response was not ok');

            }

            const result = await response.json();
            console.warn("result", result);

            if (result.errors) {
                setLoading(false);
                setErrors(result.errors);
            } else {
                setMessage(result.message);
                setPassword("");
                setSubmitted(true);
                console.log(message);
                setPassword_confirmation("");
                setLoading(false);
            }
        } catch (error) {
            console.error("There was a problem with the fetch operation:", error);
            setLoading(false);
            if (
                error.response &&
                error.response.errors
            ) {
                const serverErrors = error.response.errors;
                console.log("Server Errors:", serverErrors);
                setErrors(serverErrors);
            }
        }
    };

    return (
        <>
            <Nav />
            <div className="sm:max-w-[600px] max-h-[700px] my-10 w-full h-full py-5 sm:px-8 px-4 bg-white shadow mx-auto" >
                <div className="md:w-[85%] w-[95%] mx-auto">
                    <h1 className="text-blue-800 tracking-wider my-4 text-left mb-2 text-center font-bold md:text-3xl text-lg">
                        Change Account Password
                    </h1>
                    <div className="block gap-4 my-4">

                        <input
                            type="password"
                            placeholder="Enter New Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control focus:shodow-inner rounded-lg block w-full my-5 border  p-4 text-base font-normal leading-6 text-gray-800  focus:outline-none transition duration-150 ease-in-out"
                        />
                        {errors.password && <span className="error text-red-500">{errors.password}</span>}

                        <input
                            type="password"
                            placeholder="Re-type New Password"
                            value={password_confirmation}
                            onChange={(e) => setPassword_confirmation(e.target.value)}
                            className="form-control focus:shodow-inner rounded-lg block w-full my-5 border  p-4 text-base font-normal leading-6 text-gray-800  focus:outline-none transition duration-150 ease-in-out"
                        />
                        {errors.password_confirmation && <span className="error text-red-500">{errors.password_confirmation}</span>}

                        <button
                            className={`form-control  text-lg text-white font-semibold rounded-lg block w-full my-5 border p-4 text-base leading-6  ${submitted ? "bg-gray-400" : "bg-gradient-to-b from-blue-700 to-cyan-500 hover:bg-gradient-to-b hover:from-cyan-500 hover:to-blue-700"
                                }`}
                            disabled={submitted}
                            onClick={handleChangePassword}
                        >
                            {loading ? (
                                <div className="inset-0 flex items-center justify-center">
                                    <TailSpin
                                        visible={true}
                                        height="40"
                                        width="40"
                                        color="#e5e7eb"
                                        ariaLabel="tail-spin-loading"
                                        radius="1"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                    />
                                </div>
                            ) : (
                                submitted ? "Password Changed" : "Change Password"
                            )}
                        </button>
                        {message && (
                            <span className="error text-green-500">{message}</span>
                        )}
                        <a className="text-blue-800 underline flex justify-end">Forget Password</a>
                    </div>
                </div>
            </div>
            <Register />
            <div className="flex w-[90%] mx-auto justify-center py-5 my-5">
                <img src={banner} />
            </div>
            <Footer />
        </>
    )
}
export default ChangePassword;