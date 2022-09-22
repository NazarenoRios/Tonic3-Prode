import React from "react";
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

function FixturesMatches({ team, i }) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(team.date);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();
  const hours = date.getHours();
  const mins = date.getMinutes();

  return (
    <>
      <Match key={i} className="shadow-md">
        <MatchTop>
          <MatchInfo>
            <MatchInfoData>
              <MatchName>
                {team.date ? (`${day} ${monthNames[month]} of ${year} - ${hours} :
                ${mins === 0 ? "00" : mins} hs`) : ('Sin Definir')}
              </MatchName>
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
          </TeamAway>
        </MatchBase>

        <MatchModal>
          <MatchModalText>See more</MatchModalText>
        </MatchModal>
      </Match>
    </>
  );
}

export default FixturesMatches;
