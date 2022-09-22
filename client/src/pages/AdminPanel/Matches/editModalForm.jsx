import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInput } from "../../../hooks/useInput";
import {
  getTeams,
  addTeamToMatch,
  getMatchesByPhase,
} from "./MatchesFunctions.ts";

const EditModalForm = ({ row, setShowModal, setMatches, actualTournament, matchTeams, teamA, teamB, teamAGoals, teamBGoals }) => {
  const match = useInput("match");
  const teams = useInput("teams");
  const goals = useInput("goals");
  const winner = useInput("winner");

  const [tournamentTeams, setTournamentTeams] = useState([]);

  const dispatch = useDispatch();

  const phase = useSelector((state) => state.phase);

  useEffect(() => {
    getTeams().then((data) => setTournamentTeams(data));
  }, []);

  const handleEdit = async (match) => {
    const editMatch = await addTeamToMatch(match);
    const actualization = await getMatchesByPhase({
      tournamentId: actualTournament,
      fase: phase,
    }).then((data) => setMatches(data));
    const closeModal = await setShowModal(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    handleEdit([{ id: row.id, teamId: teams.value, goals: goals.value }]);
  };

  // console.log(matchTeams)
  // console.log(teams)
  // console.log(goals)
  // console.log(row.id)

  return (
    <div className="relative p-6 flex-auto">
      <form onSubmit={onSubmit}>
        {/* <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="stock"
          >
            Select Team A
          </label>

          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="winner"
            {...teams}
          >
            <option selected disabled value="">
              Select a Team
            </option>
            {tournamentTeams.map((team, i) => (
              <option key={i} value={team.id}>
                {team.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="match"
          >
            Team A Selected
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-emerald-700 leading-tight focus:outline-none focus:shadow-outline"
            id="match"
            type="text"
            name="match"
            defaultValue={teamA.name}
            // value={teamA.name}
            disabled
          />
        </div> */}

        <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="stock"
            >
              Select Date
            </label>

            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
              id="winner"
              {...teams}
            >
              <option selected disabled value="">
                
              </option>
              {tournamentTeams.map((team, i) => (
                <option key={i} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
          </div>

        <div className="border-b border-solid border-slate-200 my-4"></div>
        <h2 className="text-center mb-5 font-bold underline text-emerald-500">Team A</h2>

        <div className="container mx-auto grid md:grid-cols-2 md:gap-2 mt-6">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="stock"
            >
              Select Team A
            </label>

            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
              id="winner"
              {...teams}
            >
              <option selected disabled value="">
                Select a Team
              </option>
              {tournamentTeams.map((team, i) => (
                <option key={i} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="match"
            >
              Team A Selected
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-red-700 leading-tight focus:outline-none focus:shadow-outline text-center"
              id="match"
              type="text"
              name="match"
              defaultValue={teamA.name}
              // value={teamA.name}
              disabled
            />
          </div>
        </div>

        <div className="container mx-auto grid md:grid-cols-2 md:gap-2 mt-6">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="stock"
            >
              Set how many goals
            </label>

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
              id="goals"
              type="number"
              defaultValue={row.goals}
              {...goals}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="match"
            >
              Team A Goals
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-red-700 leading-tight focus:outline-none focus:shadow-outline text-center"
              id="match"
              type="text"
              name="match"
              defaultValue={teamAGoals}
              // value={teamA.name}
              disabled
            />
          </div>
        </div>

        <div className="border-b border-solid border-slate-200 my-4"></div>
        <h2 className="text-center mb-5 font-bold underline text-emerald-500">Team B</h2>

        <div className="container mx-auto grid md:grid-cols-2 md:gap-2 mt-6">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="stock"
            >
              Select Team B
            </label>

            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
              id="winner"
              {...teams}
            >
              <option selected disabled value="">
                Select a Team
              </option>
              {tournamentTeams.map((team, i) => (
                <option key={i} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="match"
            >
              Team B Selected
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-red-700 leading-tight focus:outline-none focus:shadow-outline text-center"
              id="match"
              type="text"
              name="match"
              defaultValue={teamB.name}
              // value={teamA.name}
              disabled
            />
          </div>
        </div>

        <div className="container mx-auto grid md:grid-cols-2 md:gap-2 mt-6">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="stock"
            >
              Set how many goals
            </label>

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
              id="goals"
              type="number"
              defaultValue={row.goals}
              {...goals}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="match"
            >
              Team B Goals
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-red-700 leading-tight focus:outline-none focus:shadow-outline text-center"
              id="match"
              type="text"
              name="match"
              defaultValue={teamBGoals}
              // value={teamA.name}
              disabled
            />
          </div>
        </div>

        {/* <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="stock"
            >
              Select a Winner
            </label>

            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
              id="winner"
              {...teams}
            >
              <option selected disabled value="">
                
              </option>
              {tournamentTeams.map((team, i) => (
                <option key={i} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
          </div> */}

        {/* <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="stock"
          >
            Winner
          </label>

          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="winner"
            defaultValue={row.winner}
            {...winner}
          >
            <option selected disabled value="">
              Select Winner
            </option>
            <option value={true}>true</option>
            <option value={false}>false</option>
          </select>
        </div> */}


        <div className="text-center"><button
          onSubmit={onSubmit}
          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        >
          Save Changes
        </button></div>
      </form>
    </div>
  );
};

export default EditModalForm;
