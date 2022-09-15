import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useInput } from "../hooks/useInput";
import { addTournament } from "./TournamentFunctions.ts";
// import { addProduct } from "../../../state/admin";
// import { getAllProducts } from "../../../state/products";

const AddModalForm = ({ setShowModal, indiv }) => {
  
  const [participants,setParticipants] = useState()
  const [phase, setPhase] = useState();

  const name = useInput("name");
  const logo = useInput("logo");
  const description = useInput("description");
  const state = useInput("state");

  const setNumber = (e) => {
    console.log(e.target)
    e.preventDefault()
    // setHandleNumber(e.target.value)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const handleAdd = async (tournament) => {
  //   addTournament(tournament)
  // }

  const setPhaseData = () => {
    if (participants === "2") {
      setPhase("Final");
    }
    if (participants === "4") {
      setPhase("Semifinal");
    }
    if (participants === "8") {
      setPhase("Cuartos de Final");
    }
    if (participants === "16") {
      setPhase("Octavos de Final");
    }
    if (participants === "32") {
      setPhase("16vos de Final");
    }
    if (participants === "64") {
      setPhase("32vos de Final");
    }
  }
 
  const onSubmit = async (data) => {
    console.log(data);
    const addT = await addTournament({
      name: name.value,
      logo,
      description,
      participants,
      phase,
      state,
    });
    const close = await setShowModal(false);
  };

  useEffect(() => {
    if (participants === "2") {
      setPhase("Final");
    }
    if (participants === "4") {
      setPhase("Semifinal");
    }
    if (participants === "8") {
      setPhase("Cuartos de Final");
    }
    if (participants === "16") {
      setPhase("Octavos de Final");
    }
    if (participants === "32") {
      setPhase("16vos de Final");
    }
    if (participants === "64") {
      setPhase("32vos de Final");
    }
  }, [participants]);




  return (
    <div className="relative p-6 flex-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
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
            {...register("name", { required: true })}
          />
          {errors.name?.type === "required" && (
            <span className="text-red-500">* Name field cant be empty </span>
          )}
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
            {...register("logo", { required: true })}
          />
          {errors.logo?.type === "required" && (
            <span className="text-red-500">* Logo field cant be empty </span>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="size"
          >
            Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            type="text"
            {...register("description", { required: true })}
          />
          {errors.description?.type === "required" && (
            <span className="text-red-500">
              * Description field cant be empty{" "}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="brand"
          >
            Teams
          </label>

          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="teams"
            onChange={(e) => setParticipants(e.target.value)}
            // {...register("teams", { required: true })}
          >
            <option selected disabled value="">Select how many teams</option>
            <option value={2}>2</option>
            <option value={4}>4</option>
            <option value={8}>8</option>
            <option value={16}>16</option>
            <option value={32}>32</option>
            <option value={64}>64</option>
            
          </select>
          {errors.teams?.type === "required" && (
            <span className="text-red-500">* Teams field cant be empty </span>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Phase
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phase"
            type="text"
            disabled
            value={phase}
            // {...register("phase", { required: true })}
          />
          {/* {errors.phase?.type === "required" && (
            <span className="text-red-500">* Phase field cant be empty </span>
          )} */}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="stock"
          >
            Status
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="status"
            type="text"
            {...register("status", { required: true })}
          />
          {errors.status?.type === "required" && (
            <span className="text-red-500">* Status field cant be empty </span>
          )}
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
