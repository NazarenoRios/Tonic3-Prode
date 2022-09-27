import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInput } from "../../../hooks/useInput";
import { getTournaments, editTournament } from "./TournamentFunctions.ts";

const EditModalForm = ({ row, setTournaments , setShowModal }) => {

  const name = useInput("name");
  const logo = useInput("logo");
  const description = useInput("description");
  const participants = useInput("participants");
  const state = useInput("state");
  
  const [phase, setPhase] = useState();

  const handleEdit = async (tournament) => {
    const editT = await editTournament(tournament)
    const closeModal = await setShowModal(false)
    const getall = await getTournaments().then((data) => setTournaments(data));
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    handleEdit({name: name.value,logo: logo.value,description: description.value,participants: participants.value,state: state.value,phase: phase, tournament: row})
  };

  useEffect(() => {
    if (participants.value === "2") {
      setPhase([1]);
    }
    if (participants.value === "4") {
      setPhase([2,1]);
    }
    if (participants.value === "8") {
      setPhase([4,2,1]);
    }
    if (participants.value === "16") {
      setPhase([8,4,2,1]);
    }
    if (participants.value === "32") {
      setPhase([16,8,4,2,1]);
    }
    if (participants.value === "64") {
      setPhase([32,16,8,4,2,1]);
    }
  }, [participants.value]);

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
            defaultValue={row.name}
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
            defaultValue={row.logo}
            {...logo}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="size"
          >
            {t("Description")}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            type="text"
            defaultValue={row.description}
            {...description}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="brand"
          >
            {t("Teams")}
          </label>

          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="teams"
            defaultValue={row.participants}
            {...participants}
          >
            <option selected disabled value="">
            {t("SelectHowManyTeams")}
            </option>
            <option value={2}>2</option>
            <option value={4}>4</option>
            <option value={8}>8</option>
            <option value={16}>16</option>
            <option value={32}>32</option>
            <option value={64}>64</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            {t("Phase")}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phase"
            type="text"
            disabled
            value={phase}
            defaultValue={row.phase}
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
