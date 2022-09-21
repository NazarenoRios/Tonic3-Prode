import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInput } from "../../hooks/useInput";
// import { getTeams, addTeamToMatch, getMatchesByPhase } from "./MatchesFunctions.ts";

const VoteModalForm = ({ team , setShowModal}) => {

  const teams = useInput("teams");

  const dispatch = useDispatch()

  const tournament = useSelector(state => state.tournament)
  const user = useSelector(state => state.user)

  useEffect(() => {
    // axios.get(`/api/team/${row.teamId}`).then((res) => setTeamName(res.data.name));
  }, []);

  useEffect(() => {
    // getTeams().then(data => setTournamentTeams(data))
  },[])

 
  const handleEdit = async (match) => {
    // const sendData = await axios.post('/api/bet/create',{userId:user.id, winner_id: teams.value, tournamentId: tournament.id, matchId: team.teamID[0].data_match.matchId})
    // const editMatch = await addTeamToMatch(match)
    // const actualization = await getMatchesByPhase({ tournamentId: actualTournament, fase: phase,
    // }).then((data) => setMatches(data));
    // const closeModal = await setShowModal(false)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const sendData = await axios.post('/api/bet/create',{userId:user.id, winner_id: teams.value, tournamentId: tournament.id, matchId: team.teamID[0].data_match.matchId})
    const closeModal = await setShowModal(false)
    // handleEdit([{id: row.id, teamId: teams.value, goals: goals.value}])
  };

  console.log(tournament.id)
  console.log(teams.value)
  console.log(user.id)
  console.log(team.teamID[0].data_match.matchId)


  return (
    <div className="relative p-6 flex-auto">
      <form onSubmit={onSubmit}>


        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="stock"
          >
            Select Winner
          </label>

          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="winner"
            {...teams}
          >
            <option selected disabled value="">Select a Team</option>
            {team.teamID.map((team,i) => (
              <option key={i} value={team.id} >{team.name}</option>
            ))}
          </select>
        </div>

        {/* <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="goals"
          >
            Goals
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="goals"
            type="text"
            // defaultValue={row.goals}
            {...goals}
          />
        </div> */}
        

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

export default VoteModalForm;
