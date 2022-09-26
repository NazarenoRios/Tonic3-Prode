import React from "react";
import { useInput } from "../../../hooks/useInput";
import { addTeam , getTeams} from "./TeamsFunctions.ts";
import { useTranslation } from "react-i18next";


const AddModalForm = ({ setShowModal,setTeams }) => {

  const name = useInput("name");
  const logo = useInput("logo");
  const info = useInput("info");
  const state = useInput("state");
  
  const onSubmit = async (e) => {
    e.preventDefault()
    const addT = await addTeam({ name, logo, info, state });
    const getall = await getTeams().then((data) => setTeams(data));
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
            // value={indiv.name}
            {...name}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="color"
          >
            {t("Logo")}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="logo"
            type="text"
            // value={indiv.logo}
            {...logo}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="size"
          >
            {t("Info")}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="info"
            type="text"
            // value={indiv.info}
            {...info}
          />
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
