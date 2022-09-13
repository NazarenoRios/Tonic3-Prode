import React, { useRef, useState } from "react";

import estudiantes from "../../assets/teams-logos/estudiantes.png";
import gimnasia from "../../assets/teams-logos/gimnasia.png";
import banfield from "../../assets/teams-logos/banfield.png";
import belgrano from "../../assets/teams-logos/belgrano.png";
import defensayjusticia from "../../assets/teams-logos/defensayjusticia.png";
import deportivomadryn from "../../assets/teams-logos/deportivomadryn.png";
import godoycruz from "../../assets/teams-logos/godoycruz.png";
import independiente from "../../assets/teams-logos/independiente.png";
import newells from "../../assets/teams-logos/newells.png";
import patronato from "../../assets/teams-logos/patronato.png";
import quilmes from "../../assets/teams-logos/quilmes.png";
import racing from "../../assets/teams-logos/racing.png";
import river from "../../assets/teams-logos/river.png";
import rosariocentral from "../../assets/teams-logos/rosariocentral.png";
import sanlorenzo from "../../assets/teams-logos/sanlorenzo.png";
import velez from "../../assets/teams-logos/velez.png";

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
  MatchVs,
  TeamAway,
  TeamAwayImg,
  TeamAwayName,
  TeamHome,
  TeamHomeImg,
  TeamHomeName,
  MatchModalVoted,
  MatchVotedResult,
  MatchVotedHome,
  MatchVotedDivisor,
  MatchVotedAway,
  MatchVotedMessage,
  MatchVotedContainer,
} from "./StyledComponents";

function Fixture() {
  const matches = [
    {
      LocalTeam: "Estudiantes",
      LocalTeamImg: estudiantes,
      AwayTeam: "Gimnasia",
      AwayTeamImg: gimnasia,
    },
    {
      LocalTeam: "Banfield",
      LocalTeamImg: banfield,
      AwayTeam: "Belgrano",
      AwayTeamImg: belgrano,
    },
    {
      LocalTeam: "Defensa y Justicia",
      LocalTeamImg: defensayjusticia,
      AwayTeam: "Deportivo Madryn",
      AwayTeamImg: deportivomadryn,
    },
    {
      LocalTeam: "Godoy Cruz",
      LocalTeamImg: godoycruz,
      AwayTeam: "Independiente",
      AwayTeamImg: independiente,
    },
    {
      LocalTeam: "Newells",
      LocalTeamImg: newells,
      AwayTeam: "Patronato",
      AwayTeamImg: patronato,
    },
    {
      LocalTeam: "Quilmes",
      LocalTeamImg: quilmes,
      AwayTeam: "Racing",
      AwayTeamImg: racing,
    },
    {
      LocalTeam: "River",
      LocalTeamImg: river,
      AwayTeam: "Rosario Central",
      AwayTeamImg: rosariocentral,
    },
    {
      LocalTeam: "San Lorenzo",
      LocalTeamImg: sanlorenzo,
      AwayTeam: "Velez",
      AwayTeamImg: velez,
    },
  ];

  const matchesInfo = [
    { fase: "Group Stage - Matchday 1", fecha: "Friday 22 august" },
    { fase: "Group Stage - Matchday 2", fecha: "Friday 29 august" },
    { fase: "Group Stage - Matchday 3", fecha: "Friday 12 september" },
    { fase: "Group Stage - Matchday 4", fecha: "Friday 19 september" },
    { fase: "Group Stage - Matchday 5", fecha: "Friday 26 september" },
    { fase: "Group Stage - Matchday 6", fecha: "Friday 9 september" },
    { fase: "32vos de Final", fecha: "Friday 16 september" },
    { fase: "16vos de Final", fecha: "Friday 23 september" },
    { fase: "8vos de Final", fecha: "Friday 30 september" },
    { fase: "4tos de Final", fecha: "Friday 7 october" },
    { fase: "Semifinal", fecha: "Friday 14 october" },
    { fase: "Final", fecha: "Friday 21 october" },
  ];

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

  // #f1f3f8

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
          {matchesInfo.map((match, i) => (
            <div key={i} className="h-28 min-w-[150px] md:min-w-[160px] md:min-h-[100px]">
              <div className="border rounded-3xl h-24 text-center grid justify-center items-center">
                <span style={{ fontSize: "12px" }} className="mt-3">
                  {match.fase}
                </span>
                <span
                  className="text-gray-600"
                  style={{ marginTop: "-3vh", fontSize: "12px" }}
                >
                  {match.fecha}
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
        {matches.map((team, i) => (
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
                <TeamHomeName>{team.LocalTeam}</TeamHomeName>
                <TeamHomeImg alt="" src={team.LocalTeamImg} />
              </TeamHome>

              <MatchTime>
                <MatchVs>vs</MatchVs>
                {/* <MatchResult>
                  <MatchPointHome>2</MatchPointHome>
                  <MatchPointDivisor>-</MatchPointDivisor>
                  <MatchPointAway>0</MatchPointAway>
                </MatchResult> */}
              </MatchTime>

              <TeamAway>
                <TeamAwayName>{team.AwayTeam}</TeamAwayName>
                <TeamAwayImg alt="" src={team.AwayTeamImg} />
              </TeamAway>
            </MatchBase>

            <MatchModal>
              <MatchModalText>See more</MatchModalText>
            </MatchModal>

            {/* <MatchVotedContainer>
              <MatchVotedMessage>You voted</MatchVotedMessage>
              <MatchModalVoted>
                <MatchVotedResult>
                  <MatchVotedHome>Manchester City (5)</MatchVotedHome>
                  <MatchVotedDivisor> - </MatchVotedDivisor>
                  <MatchVotedAway>(7) Bayern Munich</MatchVotedAway>
                </MatchVotedResult>
              </MatchModalVoted>
            </MatchVotedContainer> */}
          </Match>
        ))}
      </div>
      </div>
    </>
  );
}

export default Fixture;
