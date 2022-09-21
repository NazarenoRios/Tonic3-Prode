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
import VoteModal from "./VoteModal";


function ProdeInfo({team}) {

 const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <Match className="shadow-md">
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
          <MatchModalText className="cursor-pointer hover:font-bold" onClick={() => setShowModal(true)} >Vote now</MatchModalText>
        </MatchModal>
      </Match>

      {/* popUp */}
      {showModal ? (
        <VoteModal team={team} setShowModal={setShowModal} />
      ) : null}
    </>
  );
}

export default ProdeInfo;
