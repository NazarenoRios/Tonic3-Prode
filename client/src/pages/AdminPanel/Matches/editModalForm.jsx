import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useInput } from "../../../hooks/useInput";
import { getTeams, addTeamToMatch, getMatchesByPhase } from "./MatchesFunctions.ts";
import { DateTimePicker } from "@material-ui/pickers";
import axios from "axios";

import { useTranslation } from "react-i18next";


const EditModalForm = ({
  row,
  setShowModal,
  setMatches,
  actualTournament,
  matchTeams,
  teamA,
  teamB,
  teamAGoals,
  teamBGoals,
}) => {
  const teamsA = useInput("teamsA");
  const teamsB = useInput("teamsB");

  const teamsAGoals = useInput("teamsAGoals");
  const teamsBGoals = useInput("teamsBGoals");

  const [tournamentTeams, setTournamentTeams] = useState([]);

  const phase = useSelector((state) => state.phase);

  useEffect(() => {
    getTeams().then((data) => setTournamentTeams(data));
  }, []);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const setTime = () => {
    axios
      .put(`api/match/edit/${matchTeams[0].matchId}`, {
        tournamentId: actualTournament,
        date: selectedDate,
      })
      .then(() => {
        getMatchesByPhase({
          tournamentId: actualTournament,
          fase: phase,
        }).then((data) => {
          setMatches(data);
        });
      });
  };

  const setTime2 = () => {
    axios.put(`api/match/edit/${matchTeams[0].matchId}`, {
      tournamentId: actualTournament,
      date: selectedDate,
    });
  };

  const handleEdit = (match) => {
    addTeamToMatch(match);
  };

  const endMatch = (end) => {
    axios.put("api/match/end_match", end).then(() => {
      getMatchesByPhase({
        tournamentId: actualTournament,
        fase: phase,
      }).then((data) => {
        setMatches(data);
      });
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (teamsAGoals.value !== teamsBGoals.value) {
      const edit = await handleEdit([
        {
          id: matchTeams[0].id,
          matchId: matchTeams[0].matchId,
          teamId: teamsA.value ? teamsA.value : teamA.id,
          goals: teamsAGoals.value ? teamsAGoals.value : teamAGoals,
        },
        {
          id: matchTeams[1].id,
          matchId: matchTeams[1].matchId,
          teamId: teamsB.value ? teamsB.value : teamB.id,
          goals: teamsBGoals.value ? teamsBGoals.value : teamBGoals,
        },
      ]);
      

      const setTime12 = await setTime2();
      const end = await endMatch([
        {
          id: row.id,
          number_key: row.number_key,
          tournamentId: actualTournament,
        },
      ]);
      const closeModal = await setShowModal(false);
    }

    if (teamsAGoals.value === teamsBGoals.value) {
      const edit = await handleEdit([
        {
          id: matchTeams[0].id,
          matchId: matchTeams[0].matchId,
          teamId: teamsA.value ? teamsA.value : teamA.id,
          goals: teamsAGoals.value ? teamsAGoals.value : teamAGoals,
        },
        {
          id: matchTeams[1].id,
          matchId: matchTeams[1].matchId,
          teamId: teamsB.value ? teamsB.value : teamB.id,
          goals: teamsBGoals.value ? teamsBGoals.value : teamBGoals,
        },
      ]);
    }
    const setTime1 = await setTime();

    const closeModal = await setShowModal(false);
  };

  const { t } = useTranslation(["admin-panel"]);

  return (
    <div className="relative p-6 flex-auto">
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <h2 className="text-center mb-5 font-bold underline text-emerald-500">
          {t("SelectADate")}
          </h2>

          <div className="text-center">
            <DateTimePicker value={selectedDate} onChange={setSelectedDate} />
          </div>
        </div>

        <div className="border-b border-solid border-slate-200 my-4"></div>
        <h2 className="text-center mb-5 font-bold underline text-emerald-500">
        {t("TeamA")}
        </h2>

        <div className="container mx-auto grid md:grid-cols-2 md:gap-2 mt-6">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="stock"
            >
              {t("SelectTeamA")}
            </label>

            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
              id="winner"
              {...teamsA}
            >
              <option selected disabled value="">
              {t("SelectATeam")}
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
              {t("TeamASelected")}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-red-700 leading-tight focus:outline-none focus:shadow-outline text-center"
              id="match"
              type="text"
              name="match"
              defaultValue={teamA?.name ? teamA.name : ""}
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
              {t("SetHowManyGoals")}
            </label>

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
              id="goals"
              type="number"
              defaultValue={row.goals}
              {...teamsAGoals}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="match"
            >
              {t("TeamAGoals")}
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
        <h2 className="text-center mb-5 font-bold underline text-emerald-500">
        {t("TeamB")}
        </h2>

        <div className="container mx-auto grid md:grid-cols-2 md:gap-2 mt-6">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="stock"
            >
              {t("SelectTeamB")}
            </label>

            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
              id="winner"
              {...teamsB}
            >
              <option selected disabled value="">
              {t("SelectATeam")}
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
              {t("TeamBSelected")}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-red-700 leading-tight focus:outline-none focus:shadow-outline text-center"
              id="match"
              type="text"
              name="match"
              defaultValue={teamB?.name ? teamB.name : " "}
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
              {t("SetHowManyGoals")}
            </label>

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
              id="goals"
              type="number"
              defaultValue={row.goals}
              {...teamsBGoals}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="match"
            >
              {t("TeamBGoals")}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-red-700 leading-tight focus:outline-none focus:shadow-outline text-center"
              id="match"
              type="text"
              name="match"
              defaultValue={teamBGoals}
              disabled
            />
          </div>
        </div>

        <div className="text-center">
          <button
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

export default EditModalForm;
