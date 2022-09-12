import React, { useEffect } from "react";
import { useState } from "react";
import Modal from "../../common/Modal";

import { Img, Img2 } from "./StyledComponents";
import leftImg from "../../assets/register/rightLogin1.png";
import "./Btn.css";

import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { sendRegister } from "../../state/user";
import { useNavigate } from "react-router";

import Cookies from 'js-cookie';

function RegisterForm() {

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const removeCookies = async () => {
    const removeName = await Cookies.remove('name')
    const removeLastname = await Cookies.remove('lastname')
    const removeEmail = await Cookies.remove('email')
    const removePassword = await Cookies.remove('password')
  }
  
  const { register, handleSubmit, formState: {errors} } = useForm()

  const onSubmit = async  (data) => {
    const register = await dispatch(sendRegister({name: name,lastname: lastname,email: email,password: password,state: data.state,city: data.city,address: data.address,zip: data.zip,phone: data.phone}))
    const clearSession = await sessionStorage.clear();
    const clearCookies = await removeCookies()
    const fullRegister = await navigate("/registered")
  }

  useEffect(() => {
    setName(sessionStorage.getItem("name"));
    setLastname(sessionStorage.getItem("lastname"));
    setEmail(sessionStorage.getItem("email"));
    setPassword(sessionStorage.getItem("password"));
  }, []);

  return (
    <>
      {email ? (
        <div className="flex h-screen bg-[#172236]">
          <Img className="relative ml-56 imgLeft mt-96" src={leftImg} alt="" />
          <div className="m-auto">
            {/* <h1 className="text-white text-4xl text-center mb-12 mr-2">
              Register
            </h1> */}
            <form className="relative w-full max-w-lg mt-10 md:mt-0" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-center mr-3 md:text-start md:mr-0  text-white text-xs font-bold mb-2"
                    forhtml="first-name"
                  >
                    Name
                  </label>
                  <input
                    className="appearance-none block w-5/6 mx-8 text-center md:text-start md:w-full md:mx-0 bg-transparent text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-[#8eddd8] "
                    id="first-name"
                    type="text"
                    placeholder={name}
                    disabled
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-center mr-3 md:text-start md:mr-0  text-white text-xs font-bold mb-2"
                    forhtml="last-name"
                  >
                    Last Name
                  </label>
                  <input
                    className="appearance-none block  w-5/6 mx-8 text-center md:text-start md:w-full md:mx-0 bg-transparent text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-[#8eddd8]"
                    id="last-name"
                    type="text"
                    placeholder={lastname}
                    disabled
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-center mr-3 md:text-start md:mr-0  text-white text-xs font-bold mb-2"
                    forhtml="email"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none block w-5/6 mx-8 text-center md:text-start md:w-full md:mx-0 bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-[#8eddd8]"
                    id="email"
                    type="email"
                    placeholder={email}
                    disabled
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-center mr-3 md:text-start md:mr-0  text-white text-xs font-bold mb-2"
                    forhtml="password"
                  >
                    Password
                  </label>
                  <input
                    className="appearance-none block w-5/6 mx-8 text-center md:text-start md:w-full md:mx-0 bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-[#8eddd8]"
                    id="password"
                    type="password"
                    placeholder="******************"
                    disabled
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-center mr-3 md:text-start md:mr-0  text-white text-xs font-bold mb-2"
                    forhtml="state"
                  >
                    State
                  </label>
                  <input
                    className="appearance-none block w-5/6 mx-8 text-center md:text-start md:w-full md:mx-0 bg-transparent text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-[#8eddd8]"
                    id="state"
                    type="text"
                    {...register("state", { required:true })}
                  />

                {errors.state?.type === "required" && <span className="text-red-500 ml-8 sm:ml-0">* Select State </span>}
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-center mr-3 md:text-start md:mr-0  text-white text-xs font-bold mb-2"
                    forhtml="city"
                  >
                    City
                  </label>
                  <input
                    className="appearance-none block w-5/6 mx-8 text-center md:text-start md:w-full md:mx-0 bg-transparent text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-[#8eddd8]"
                    id="city"
                    type="text"
                    {...register("city", { required:true })}
                  />
                  {errors.city?.type === "required" && <span className="text-red-500 ml-8 sm:ml-0">* Select City </span>}
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-center mr-3 md:text-start md:mr-0  text-white text-xs font-bold mb-2"
                    forhtml="zip"
                  >
                    Zip
                  </label>
                  <input
                    className="appearance-none block w-5/6 mx-8 text-center md:text-start md:w-full md:mx-0 bg-transparent text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-[#8eddd8]"
                    id="zip"
                    type="number"
                    {...register("zip", { required:true })}
                  />
                  {errors.zip?.type === "required" && <span className="text-red-500 ml-8 sm:ml-0">* Zip cant be empty </span>}
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-center mr-3 md:text-start md:mr-0  text-white text-xs font-bold mb-2"
                    forhtml="address"
                  >
                    Address
                  </label>
                  <input
                    className="appearance-none block w-5/6 mx-8 text-center md:text-start md:w-full md:mx-0 bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-[#8eddd8]"
                    id="address"
                    type="text"
                    {...register("address", { required:true })}
                  />
                  {errors.address?.type === "required" && <span className="text-red-500 ml-8 sm:ml-0">* Address field cant be empty </span>}
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-center mr-3 md:text-start md:mr-0  text-white text-xs font-bold mb-2"
                    forhtml="phone"
                  >
                    Phone
                  </label>
                  <input
                    className="appearance-none block w-5/6 mx-8 text-center md:text-start md:w-full md:mx-0 bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-[#8eddd8]"
                    id="phone"
                    type="tel"
                    {...register("phone", { required:true })}
                  />
                  {errors.phone?.type === "required" && <span className="text-red-500 ml-8 sm:ml-0">* Phone field cant be empty </span>}

                </div>
              </div>
              <div className="text-center mr-2">
                <button data-text="Awesome" className="button">
                  <span className="actual-text">&nbsp;register&nbsp;</span>
                  <span className="hover-text" aria-hidden="true">
                    &nbsp;register&nbsp;
                  </span>
                </button>
              </div>
            </form>
          </div>
          <Img2
            className="relative mr-56 mt-96 imgRight"
            src={leftImg}
            alt=""
          />
        </div>
      ) : (
        <Modal />
      )}
    </>
  );
}

export default RegisterForm;
