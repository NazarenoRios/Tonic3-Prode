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

import "./DetailsButton.css";

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
  const day = date.getDate();
  const hours = date.getHours();
  const mins = date.getMinutes();

  return (
    <>
      <Match key={i} className="shadow-md">
        <MatchTop>
          <MatchInfo>
            <MatchInfoData>
              <MatchName>
                {team.date
                  ? `${day} ${monthNames[month]} of ${year} - ${hours} :
                ${mins === 0 ? "00" : mins} hs`
                  : "Sin Definir"}
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

                {team.match_end ? (
                  <>
                    {team.winner === team.teamID[0].id ? (
                      <TeamHomeImg alt="" src={team.teamID[0]?.logo} />
                    ) : (
                      <TeamHomeImg
                        alt=""
                        className="grayscale"
                        src={team.teamID[0]?.logo}
                      />
                    )}
                  </>
                ) : (
                  <TeamHomeImg alt="" src={team.teamID[0]?.logo} />
                )}

                {/* <TeamHomeImg alt="" src={team.teamID[0]?.logo} /> */}
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
                {team.match_end ? (
                  <>
                    {team.winner === team.teamID[1].id ? (
                      <TeamHomeImg alt="" src={team.teamID[1]?.logo} />
                    ) : (
                      <TeamHomeImg
                        alt=""
                        className="grayscale"
                        src={team.teamID[1]?.logo}
                      />
                    )}
                  </>
                ) : (
                  <TeamHomeImg alt="" src={team.teamID[1]?.logo} />
                )}
              </>
            ) : (
              "Por Definir"
            )}
          </TeamAway>
        </MatchBase>

        <MatchModal>
          <MatchModalText>
            <button class="cssbuttons-io-button">
              {" "}
              See Details
              <div class="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>
          </MatchModalText>
        </MatchModal>
      </Match>
    </>
  );
}

export default FixturesMatches;
