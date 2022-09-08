import React from "react";
import Modal from "../../common/Modal";

import estudiantes from "../../assets/teams-logos/estudiantes.png"
import gimnasia from "../../assets/teams-logos/gimnasia.png"

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

  // const teams = [
  //   {name: "Manchester City", img: ""}
  // ]


  return (
    <>
    {/* <Modal/> */}
  
      <div className="container mx-auto grid md:grid-cols-2 md:gap-2">
        <Match className="shadow-md">
          <MatchTop>
            <MatchInfo>
              <MatchInfoData>
                <MatchName>Tuesday 6 september - 16:45</MatchName>
              </MatchInfoData>
            </MatchInfo>
          </MatchTop>
          <MatchRelated />

          <MatchBase>
            <TeamHome>
              <TeamHomeName>Manchester City</TeamHomeName>
              <TeamHomeImg
                alt=""
                src="https://img.uefa.com/imgml/TP/teams/logos/70x70/1652.png"
              />
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
              <TeamAwayName>Bayern Munich</TeamAwayName>
              <TeamAwayImg
                alt=""
                src="https://img.uefa.com/imgml/TP/teams/logos/70x70/50149.png"
              />
            </TeamAway>
          </MatchBase>

          <MatchModal>
            <MatchModalText>Vote now</MatchModalText>
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

        <Match className="shadow-md">asd</Match>
        <Match className="shadow-md">asd</Match>
        <Match className="shadow-md">asd</Match>
        <Match className="shadow-md">asd</Match>
        <Match className="shadow-md">asd</Match>
        <Match className="shadow-md">asd</Match>
        <Match className="shadow-md">asd</Match>
      </div>
    </>
  );
}

export default Fixture;
