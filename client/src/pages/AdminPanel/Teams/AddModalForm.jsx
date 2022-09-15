import React from "react";
import { useInput } from "../../../hooks/useInput";
import { addTeam , getTeams} from "./TeamsFunctions.ts";


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

  

  return (
    <div className="relative p-6 flex-auto">
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
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
            Logo
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
            info
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="info"
            type="text"
            // value={indiv.info}
            {...info}
          />
        </div>
        
        
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="stock"
          >
            Status
          </label>

          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="teams"
            // defaultValue={indiv.state}
            {...state}
          >
            <option selected disabled value="">
              Select how many teams
            </option>
            <option value={true}>true</option>
            <option value={false}>false</option>
          </select>
        </div>

        <button
          onSubmit={onSubmit}
          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default AddModalForm;
