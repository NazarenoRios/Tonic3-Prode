import React, { useEffect, useRef, useState } from "react";

import {
  Match,
  MatchBase,
  MatchInfo,
  MatchInfoData,
  MatchModal,
  MatchModalText,
  MatchName,
  MatchPointAway,
  MatchPointDivisor,
  MatchPointHome,
  MatchResult,
  MatchRelated,
  MatchTime,
  MatchTop,
  TeamAway,
  TeamHome,
  TeamHomeImg,
  TeamHomeName,
} from "./StyledComponents";
import { useSelector } from "react-redux";
import {
  changePhaseToNumber,
  changePhaseToString,
  getMatchesByPhase,
} from "./FixtureFunctions";

function Fixture() {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: string) => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const [phases, setPhases] = useState([]);
  const [matches2, setMatches] = useState([]);
  const [phase, setPhase] = useState("");

  const tournament = useSelector((state) => state.tournament);

  useEffect(() => {
    const setP = tournament.phase?.map((phase) => changePhaseToString(phase));

    if (setP !== undefined) {
      setPhases([...setP]);
    }
  }, [tournament]);

  const getMbyPhase = (e) => {
    e.preventDefault();

    changePhaseToNumber(e, setPhase);

    getMatchesByPhase({
      tournamentId: tournament.id,
      fase: phase,
    }).then((data) => setMatches(data));
  };

  return (
    <>
      <div className="bg-[#f1f3f8]">
        <h1
          style={{ fontSize: "48px", color: "#30316e" }}
          className="container mx-auto grid md:grid-cols-2 md:gap-2 mt-12"
        >
          Fixture & Results
        </h1>

        <div
          className="flex group relative md:-ml-2 w-3/6 justify-center"
          style={{ marginLeft: "25vw" }}
        >
          {/* carousel left button */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            style={{ color: "#30316e" }}
            className={`leftIcon absolute top-0 bottom-0 left-0 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
              !isMoved && "hidden"
            }`}
            onClick={() => handleClick("left")}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>

          {/* round row */}
          <div
            style={{ overflow: "hidden" }}
            className="flex scrollbar-hide items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2"
            ref={rowRef}
          >
            {phases?.map((match, i) => (
              <div
                key={i}
                className="h-28 min-w-[150px] md:min-w-[160px] md:min-h-[100px] cursor-pointer"
                onClick={getMbyPhase}
              >
                <div className="border rounded-3xl h-24 text-center grid justify-center items-center">
                  <span style={{ fontSize: "12px" }} className="mt-3">
                    {match}
                  </span>
                  {/* <span
                  className="text-gray-600"
                  style={{ marginTop: "-3vh", fontSize: "12px" }}
                >
                  {match}
                </span> */}
                </div>
              </div>
            ))}
          </div>

          {/* carousel right button */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            style={{ color: "#30316e" }}
            className="rightIcon absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
            onClick={() => handleClick("right")}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>

        <div className="container mx-auto grid md:grid-cols-2 md:gap-2 mt-6">
          {matches2.map((team, i) => (
            <Match key={i} className="shadow-md">
              <MatchTop>
                <MatchInfo>
                  <MatchInfoData>
                    <MatchName>Friday 30 september - 16:45</MatchName>
                  </MatchInfoData>
                </MatchInfo>
              </MatchTop>
              <MatchRelated />

              <MatchBase>
                <TeamHome>
                  {team.teamID[0] ? (
                    <>
                      <TeamHomeName>{team.teamID[0].name}</TeamHomeName>
                      <TeamHomeImg alt="" src={team.teamID[0]?.logo} />
                    </>
                  ) : (
                    "Por Definir"
                  )}
                  {/* <TeamHomeName>{team.teamID[0].name}</TeamHomeName>
                  <TeamHomeImg alt="" src={team.teamID[0]?.logo} /> */}
                </TeamHome>

                <MatchTime>
                  {/* <MatchVs>vs</MatchVs> */}
                  <MatchResult>
                    <MatchPointHome>
                      {team.teamID[0]?.data_match.goals}
                    </MatchPointHome>
                    <MatchPointDivisor>-</MatchPointDivisor>
                    <MatchPointAway>
                      {team.teamID[1]?.data_match.goals}
                    </MatchPointAway>
                  </MatchResult>
                </MatchTime>

                <TeamAway>
                {team.teamID[1] ? (
                    <>
                      <TeamHomeName>{team.teamID[1].name}</TeamHomeName>
                      <TeamHomeImg alt="" src={team.teamID[1]?.logo} />
                    </>
                  ) : (
                    "Por Definir"
                  )}
                  {/* <TeamAwayName>{team.teamID[1]?.name}</TeamAwayName>
                  <TeamAwayImg alt="" src={team.teamID[1]?.logo} /> */}
                </TeamAway>
              </MatchBase>

              <MatchModal>
                <MatchModalText>See more</MatchModalText>
              </MatchModal>

            </Match>
          ))}
        </div>
      </div>
    </>
  );
}

export default Fixture;
