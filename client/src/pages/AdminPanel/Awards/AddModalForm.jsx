import React from "react";
import { useTranslation } from "react-i18next";
import { useInput } from "../../../hooks/useInput";
import { addAward, getAwards } from "./AwardsFunctions.ts";

const AddModalForm = ({ setShowModal, setAwards }) => {

  const name = useInput("name");
  const img = useInput("logo");
  const info = useInput("description");
  const country = useInput("participants");
  const place = useInput("state");

  const onSubmit = async (e) => {
    e.preventDefault()
    const addT = await addAward({name, img, info, country, place });
    const getall = await getAwards().then((data) => setAwards(data));
    const close = await setShowModal(false);
  };

  
  const { t } = useTranslation(["admin-panel"]);

  return (
    <div className="relative p-6 flex-auto">
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            {t("Name")}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            {...name}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="color"
          >
            Img
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="logo"
            type="text"
            {...img}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="size"
          >
            Info
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            type="text"
            {...info}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="brand"
          >
            {t("Country")}
          </label>

          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="teams"
            {...country}
          >
            <option selected disabled value=""> {t("SelectCountry")} </option>
            <option value="Argentina">Argentina</option>
            <option value="Brazil">Brazil</option>
            <option value="United States">United States</option>
          </select>
        </div>
        
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="brand"
          >
            {t("Place")}
          </label>

          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="teams"
            {...place}
          >
            <option selected disabled value=""> {t("SelectPlace")} </option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>

        <button
          onSubmit={onSubmit}
          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        >
          {t("SaveChanges")}
        </button>
      </form>
    </div>
  );
};

export default AddModalForm;
