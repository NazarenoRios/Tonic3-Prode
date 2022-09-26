import React from "react";
import { useSelector } from "react-redux";
import { useInput } from "../../../hooks/useInput";
import { getMatchesByPhase } from "./MatchesFunctions.ts";

import axios from 'axios'
import { useTranslation } from "react-i18next";

const WinnerModalForm = ({setShowWinnerModal,row, teamA, teamB, actualTournament, setMatches}) => {

  const winner = useInput("winner")

  const phase = useSelector((state) => state.phase);

  const setWinner = async (end) => {
    const endM = await axios.put('api/match/end_match',end)
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const win = await setWinner([{id: row.id, number_key: row.number_key, tournamentId: actualTournament, winner: winner.value}])
    const actualization = await getMatchesByPhase({ tournamentId: actualTournament, fase: phase }).then((data) => setMatches(data));
    const close = await setShowWinnerModal(false)
  };

  const { t } = useTranslation(["admin-panel"]);

  return (
    <div className="relative p-6 flex-auto">
      <form onSubmit={onSubmit}>

        <div className="mb-4">
          <h2 className="text-center mb-5 font-bold underline text-emerald-500">Select a Winner</h2>
            <div className="text-center">
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
              id="winner"
              {...winner}
            >
              <option selected disabled value="">Select a Team</option>
              <option value={teamA.id}>{teamA.name}</option>
              <option value={teamB.id} >{teamB.name}</option>
            </select>
            </div>
        </div>

        <div className="text-center"><button
          onSubmit={onSubmit}
          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        >
          {t("SaveChanges")}
        </button>
        </div>
      </form>
    </div>
  );
};

export default WinnerModalForm;
