import React, { useEffect, useRef, useState } from "react";

import { useSelector } from "react-redux";
import GeneralTable from "./GeneralTable/GeneralTable";
import PhaseTable from "./PhasesTables/PhaseTable";
import {
  changePhaseToNumber,
  changePhaseToString,
  getMatchesByPhase,
} from "./ProdeFunctions";
import ProdeInfo from "./ProdeInfo";
import { TableTitle } from "./StyledComponents";

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
          Prode Vote
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
                <div className="border-2 border-gray-500 rounded-3xl h-24 text-center grid justify-center items-center">
                  <span style={{ fontSize: "14px" }} className="mt-1 font-bold  tracking-wide">
                    {match}
                  </span>
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
            <ProdeInfo key={i} team={team}/>
          ))}
        </div>
      </div>

      <div className="mt-36 bg-[#172236]">
        {/* <img style={{height:"120vh", width:"100vw"}} src="https://img.uefa.com/imgml/uefacom/ucl/2021/backgroundDark01L.jpg" alt="" className="absolute"/> */}
        <img style={{height:"120vh", width:"100vw"}} src="https://pbs.twimg.com/media/FCFz1faUUAAQKcC?format=jpg&name=large" alt="" className="absolute"/>

      <div className="flex justify-center">
        <TableTitle className="text-center mt-12 z-10">
          TABLE POINTS
        </TableTitle>
      </div>
      <div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-2 mt-6 align-middle content-center text-white h-auto font-bold"
      >
        <PhaseTable />
        <GeneralTable/>
      </div>
    </div>
    </>
  );
}

export default Fixture;
