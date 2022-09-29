import React, { useEffect, useState } from "react";
import Navbar2 from "../../components/Navbar/NavBar2";
import Avatar1 from "../../assets/data/Avatar1.png"

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../state/user";
import AllowNotifications from "../../common/AllowNotif/AllowNotifications";
import { useTranslation } from "react-i18next";
import AlertMessage from "../../common/AlertMessage/AlertMessage";
import axios from "axios";
import { setActualProfile } from "../../state/profile";

const CustomUser = () => {

  const usuario = useSelector((state) => state.user);
  const profile = useSelector((state)=>state.profile)
  const [editStatus, setEditStatus] = useState("");
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (usuario.id) {
      axios
      .get(`/api/user/${usuario.id}`)
      .then((res) => dispatch(setActualProfile(res.data)));
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: profile?.name? (profile):(usuario)
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
    )
    if (!data.error) {
      setEditStatus("success")
      setTimeout(() => window.location.reload(), 3000);
    } else {
      setEditStatus("error");
    }
  };

  const { t } = useTranslation(["edit_profile"]);

  return (
    <>
      <Navbar2 />
      <div
        className="flex h-auto sm:h-screen overflow-x-hidden"
        style={{ background:"linear-gradient(45deg, blue, red)" }}
      >
        <div className="m-auto mt-24 sm:m-auto">
          <div className="flex justify-center pb-5">
            <img
              className="rounded-full"
              src={Avatar1}
              alt=""
              style={{ height: "100px" }}
            />
          </div>
          <h1 className="text-white text-4xl text-center mb-12 mr-2">
          {t("edit_profile")}
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
                  {t("name")}
                </label>
                <input
                  className="appearance-none block w-5/6 mx-8 text-center md:text-start md:w-full md:mx-0 bg-transparent text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-[#8eddd8] "
                  id="first-name"
                  type="text"
                  {...register("name", { required: true })}
                />
                {errors.name?.type === "required" && (
                  <span className="text-red-500 ml-8 sm:ml-0">
                    * {t("select_name")}{" "}
                  </span>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-center mr-3 md:text-start md:mr-0  text-white text-xs font-bold mb-2"
                  forhtml="last-name"
                >
                  {t("last_name")}
                </label>
                <input
                  className="appearance-none block  w-5/6 mx-8 text-center md:text-start md:w-full md:mx-0 bg-transparent text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-[#8eddd8]"
                  id="last-name"
                  type="text"
                  {...register("lastname", { required: true })}
                />
                {errors.lastname?.type === "required" && (
                  <span className="text-red-500 ml-8 sm:ml-0">
                    * {t("select_lastname")}{" "}
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
                  {t("state")}
                </label>
                <input
                  className="appearance-none block w-5/6 mx-8 text-center md:text-start md:w-full md:mx-0 bg-transparent text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-[#8eddd8]"
                  id="state"
                  type="text"
                  {...register("state", { required: true })}
                />

                {errors.state?.type === "required" && (
                  <span className="text-red-500 ml-8 sm:ml-0">
                    * {t("select_state")}{" "}
                  </span>
                )}
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-center mr-3 md:text-start md:mr-0  text-white text-xs font-bold mb-2"
                  forhtml="city"
                >
                  {t("city")}
                </label>
                <input
                  className="appearance-none block w-5/6 mx-8 text-center md:text-start md:w-full md:mx-0 bg-transparent text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-[#8eddd8]"
                  id="city"
                  type="text"
                  {...register("city", { required: true })}
                />
                {errors.city?.type === "required" && (
                  <span className="text-red-500 ml-8 sm:ml-0">
                    * {t("select_city")}{" "}
                  </span>
                )}
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-center mr-3 md:text-start md:mr-0  text-white text-xs font-bold mb-2"
                  forhtml="zip"
                >
                  {t("zip")}
                </label>
                <input
                  className="appearance-none block w-5/6 mx-8 text-center md:text-start md:w-full md:mx-0 bg-transparent text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-[#8eddd8]"
                  id="zip"
                  type="number"
                  {...register("zip", { required: true })}
                />
                {errors.zip?.type === "required" && (
                  <span className="text-red-500 ml-8 sm:ml-0">
                    * {t("select_zip")}{" "}
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
                  {t("address")}
                </label>
                <input
                  className="appearance-none block w-5/6 mx-8 text-center md:text-start md:w-full md:mx-0 bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-[#8eddd8]"
                  id="address"
                  type="text"
                  {...register("address", { required: true })}
                />
                {errors.address?.type === "required" && (
                  <span className="text-red-500 ml-8 sm:ml-0">
                    * {t("select_address")}{" "}
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
                  {t("phone")}
                </label>
                <input
                  className="appearance-none block w-5/6 mx-8 text-center md:text-start md:w-full md:mx-0 bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-[#8eddd8]"
                  id="phone"
                  type="tel"
                  {...register("phone", { required: true })}
                />
                {errors.phone?.type === "required" && (
                  <span className="text-red-500 ml-8 sm:ml-0">
                    * {t("select_phone")}{" "}
                  </span>
                )}
              </div>
            </div>
          <AllowNotifications />
            <div className="text-center mr-2">
              <button data-text="Awesome" className="button">
                <span className="actual-text">&nbsp;Edit&nbsp;</span>
                <span className="hover-text" aria-hidden="true">
                  &nbsp;{t("edit_button")}&nbsp;
                </span>
              </button>
            </div>
          </form>
          {editStatus && (
          <AlertMessage
            type={editStatus}
            message={
              editStatus === "success"
                ? `Cuenta editada`
                : `Por favor verificar datos ingresados`
            }
          />
        )}
        </div>
      </div>
    </>
  );
};

export default CustomUser;
