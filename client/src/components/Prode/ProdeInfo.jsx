import React, { useRef, useEffect } from "react";
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

import { useTranslation } from "react-i18next";

import axios from "axios";

import "./VoteButton.css";
import { useSelector } from "react-redux";

function ProdeInfo({ team, phase, setMatches }) {
  const [showModal, setShowModal] = React.useState(false);
  const [userVote, setUserVote] = React.useState();

  const monthNames = [ "Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "October", "Novr", "Dec" ];

  const date = new Date(team.date);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const mins = date.getMinutes();

  const [timerDays, setTimerDays] = React.useState("00");
  const [timerHours, setTimerHours] = React.useState("00");
  const [timerMinutes, setTimerMinutes] = React.useState("00");
  const [timerSeconds, setTimerSeconds] = React.useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date(team.date).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hour = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance / 1000) % 60);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hour);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  const user = useSelector(state => state.user)

  useEffect(() => {
    axios
      .get(`api/bet/userbet/${user.id}/${team.teamID[0]?.data_match.matchId}`)
      .then((res) => setUserVote(res.data));

    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  const { t } = useTranslation(["Prode"]);

  //console.log(userVote)

  return (
    <>
      <Match className="shadow-md">
        <MatchTop>
          <MatchInfo>
            <MatchInfoData>
              <MatchName>
                {team.date ? (
                  `${day} ${monthNames[month]} of ${year} - ${hours} :
                ${mins === 0 ? "00" : mins} hs`
                ) : (
                  <span>{t("SinDefinir")}</span>
                )}
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
              </>
            ) : (
              <div className="mt-4">{t("ToDefine")}</div>
            )}
          </TeamHome>

          {team.date ? (
            <MatchTime>
              <MatchResult>
              <MatchPointHome>
                {team.teamID[0]?.data_match.penalties !== 0 ? (
                  team.teamID[0]?.data_match.penalties >
                  team.teamID[1]?.data_match.penalties ? (
                    <span className="text-green-600">
                      ({team.teamID[0]?.data_match.penalties})
                    </span>
                  ) : (
                    <span className="text-red-600">
                      ({team.teamID[0]?.data_match.penalties})
                    </span>
                  )
                ) : (
                  ""
                )}{" "}
                {team.teamID[0]?.data_match.goals}
              </MatchPointHome>
                <MatchPointDivisor>-</MatchPointDivisor>
                <MatchPointAway>
                {team.teamID[1]?.data_match.goals}{" "}
                {team.teamID[1]?.data_match.penalties !== 0 ? (
                  team.teamID[1]?.data_match.penalties >
                  team.teamID[0]?.data_match.penalties ? (
                    <span className="text-green-600">
                      ({team.teamID[1]?.data_match.penalties})
                    </span>
                  ) : (
                    <span className="text-red-600">
                      ({team.teamID[1]?.data_match.penalties})
                    </span>
                  )
                ) : (
                  ""
                )}
              </MatchPointAway>
              </MatchResult>
            </MatchTime>
          ) : (
            <MatchTime>
              <MatchResult>
                <MatchPointHome>
                  {team.teamID[0]?.data_match.goals}
                </MatchPointHome>
                <MatchPointDivisor>
                  <div className="mt-4">-</div>
                </MatchPointDivisor>
                <MatchPointAway>
                  {team.teamID[1]?.data_match.goals}
                </MatchPointAway>
              </MatchResult>
            </MatchTime>
          )}

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
              <div className="mt-4">{t("PorDefinir")}</div>
            )}
          </TeamAway>
        </MatchBase>

        {team.date ? (
          <>
            <MatchModal>
              <MatchModalText
                className="cursor-pointer hover:font-bold"
                onClick={() => setShowModal(true)}
              >
                <button class="cssbuttons-io">
                  <span>{t("VoteNow")}</span>
                </button>
              </MatchModalText>
            </MatchModal>

            {timerDays === "00" &&
            timerHours === "00" &&
            timerMinutes === "00" &&
            timerSeconds === "00" ? (
              <div className="mt-8 ">
                <span className="font-bold text-red-600">{t("OutOfTime")}</span>
                {userVote ? (
                    <div className="mb-3">
                      <br />
                      <br />
                      <span>
                        You already voted for{" "}
                        <span className="text-blue-600 font-bold">
                          {userVote[1]?.name}
                        </span>
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
              </div>
            ) : (
              <div>
                <div className="mt-5">
                  <span className="font-bold ">{t("YouHave")}:</span>
                </div>
                <div className="my-3">
                  <span className="font-bold text-red-600">
                    {timerDays} days {timerHours} hs {timerMinutes} mins{" "}
                    {timerSeconds} secs
                  </span>
                </div>
                <div className="mb-2">
                  <span className="font-bold ">{t("ForVote")}</span>
                  {userVote ? (
                    <div>
                      <br />
                      <br />
                      <span>
                        {t("voto")}{" "}
                        <span className="text-blue-600 font-bold">
                          {userVote[1]?.name}
                        </span>
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            )}
          </>
        ) : (
          ""
        )}
      </Match>

      {/* popUp */}
      {showModal ? <VoteModal team={team} setShowModal={setShowModal} phase={phase} setMatches={setMatches} setUserVote={setUserVote} /> : null}
    </>
  );
}

export default ProdeInfo;
