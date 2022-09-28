import axios from "axios";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useInput } from "../../hooks/useInput";
import { getMatchesByPhase } from "./ProdeFunctions";

const VoteModalForm = ({ team , setShowModal, phase, setMatches, setUserVote}) => {

  const teams = useInput("teams");

  const tournament = useSelector(state => state.tournament)
  const user = useSelector(state => state.user)
 
  const onSubmit = async (e) => {
    e.preventDefault()
    const sendData = await axios.post('/api/bet/create',{userId:user.id, winner_id: teams.value, tournamentId: tournament.id, matchId: team.teamID[0].data_match.matchId})
    const winnerVote = await axios.get(`api/bet/userbet/${user.id}/${team.teamID[0]?.data_match.matchId}`).then((res) => setUserVote(res.data));
    const actualization = await getMatchesByPhase({ tournamentId: tournament.id, fase: phase }).then((data) => setMatches(data));
    const closeModal = await setShowModal(false)
  };

  const { t } = useTranslation(["Prode"]);

  console.log(phase)

  return (
    <div className="relative p-6 flex-auto">
      <form onSubmit={onSubmit}>


        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="stock"
          >
            {t("SelectWinner")}
          </label>

          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="winner"
            {...teams}
          >
            <option selected disabled value="">{t("SelectTeam")}</option>
            {team.teamID.map((team,i) => (
              <option key={i} value={team.id} >{team.name}</option>
            ))}
          </select>
        </div>

        <button
          onSubmit={onSubmit}
          className="text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 bg-gradient-to-r from-purple-500 to-blue-800"
        >
          {t("SaveChanges")}
        </button>
      </form>
    </div>
  );
};

export default VoteModalForm;
