import React  from "react";
import { useTranslation } from "react-i18next";
import { useInput } from "../../../hooks/useInput";
import { editPlayer, getPlayers } from "./PlayersFunctions.ts";

const EditModalForm = ({ row, setPlayers , setShowModal }) => {

  const fullname = useInput("fullname");
  const age = useInput("age");
  const img = useInput("img");
  const info = useInput("info");
  
  const handleEdit = async (player) => {
    const editT = await editPlayer(player)
    const closeModal = await setShowModal(false)
    const getall = await getPlayers().then((data) => setPlayers(data));
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    handleEdit({player: row, fullname: fullname.value ,age: age.value,img: img.value,info: info.value})
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
            {t("Fullname")}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            {...fullname}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="age"
          >
            {t("Age")}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="age"
            type="number"
            {...age}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="img"
          >
            Img
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="img"
            type="text"
            {...img}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="info"
          >
            Info
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="info"
            type="text"
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

export default EditModalForm;
