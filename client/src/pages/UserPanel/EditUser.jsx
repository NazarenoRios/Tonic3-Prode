import React from "react";
import Navbar2 from "../../components/Navbar/NavBar2";
import fondo from "../../assets/register/background-edit.png";
import avatar from "../../assets/data/avatar.jpg";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../state/user";

const CustomUser = () => {
  //Imagen del form harcodeada
  const usuario = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: usuario,
  });

  const onSubmit = async (data) => {
    const edit = await dispatch(
      editUser({
        name: data.name,
        lastname: data.lastname,
        email: usuario.email,
        state: data.state,
        city: data.city,
        address: data.address,
        zip: data.zip,
        phone: data.phone,
      })
    );
  };

  return (
    <>
      <Navbar2 />
      <div
        className="flex h-screen"
        style={{ backgroundImage: `url(${fondo})` }}
      >
        <div className="m-auto">
          <div className="flex justify-center pb-5">
            <img
              className="rounded-full"
              src={avatar}
              alt=""
              style={{ height: "100px" }}
            />
          </div>
          <h1 className="text-white text-4xl text-center mb-12 mr-2">
            Edit Profile
          </h1>
          <form
            className="relative w-full max-w-lg mt-10 md:mt-0"
            onSubmit={handleSubmit(onSubmit)}
          >
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
                  {...register("name", { required: true })}
                />
                {errors.name?.type === "required" && (
                  <span className="text-red-500 ml-8 sm:ml-0">
                    * Select name{" "}
                  </span>
                )}
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
                  {...register("lastname", { required: true })}
                />
                {errors.lastname?.type === "required" && (
                  <span className="text-red-500 ml-8 sm:ml-0">
                    * Select last Name{" "}
                  </span>
                )}
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
                  placeholder={usuario.email}
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
                  {...register("state", { required: true })}
                />

                {errors.state?.type === "required" && (
                  <span className="text-red-500 ml-8 sm:ml-0">
                    * Select State{" "}
                  </span>
                )}
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
                  {...register("city", { required: true })}
                />
                {errors.city?.type === "required" && (
                  <span className="text-red-500 ml-8 sm:ml-0">
                    * Select City{" "}
                  </span>
                )}
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
                  {...register("zip", { required: true })}
                />
                {errors.zip?.type === "required" && (
                  <span className="text-red-500 ml-8 sm:ml-0">
                    * Zip cant be empty{" "}
                  </span>
                )}
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
                  {...register("address", { required: true })}
                />
                {errors.address?.type === "required" && (
                  <span className="text-red-500 ml-8 sm:ml-0">
                    * Address field cant be empty{" "}
                  </span>
                )}
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
                  {...register("phone", { required: true })}
                />
                {errors.phone?.type === "required" && (
                  <span className="text-red-500 ml-8 sm:ml-0">
                    * Phone field cant be empty{" "}
                  </span>
                )}
              </div>
            </div>
            <div className="text-center mr-2">
              <button data-text="Awesome" className="button">
                <span className="actual-text">&nbsp;Edit&nbsp;</span>
                <span className="hover-text" aria-hidden="true">
                  &nbsp;Edit&nbsp;
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CustomUser;
