import axios from "axios"

export function getMatchesByPhase({tournamentId,fase}) {
    return axios
      .get(`api/matches_data/get_data2/${tournamentId}/${fase}`)
      .then((res) => {
        return res.data
      })
  }

  export const changePhaseToString = (phase) => {
    if (phase === 64) {
      return phase = "64vos de Final"
    }

    if (phase === 32) {
      return phase = "32vos de Final"
    }

    if (phase === 16) {
      return phase = "16vos de Final"
    }

    if (phase === 8) {
      return phase = "Octavos de Final"
    }

    if (phase === 4) {
      return phase = "Cuartos de Final"
    }

    if (phase === 2) {
      return phase = "Semifinal"
    }

    if (phase === 1) {
      return phase = "Final"
    }

    return []
  }

  export const changePhaseToNumber = (e,setPhase) => {
    if (e.target.textContent === "64vos de Final") {
      setPhase("64")
    }

    if (e.target.textContent === "32vos de Final") {
      setPhase("32")
    }

    if (e.target.textContent === "16vos de Final") {
      setPhase("16")
    }

    if (e.target.textContent === "Octavos de Final") {
      setPhase("8")
    }

    if (e.target.textContent === "Cuartos de Final") {
      setPhase("4")
    }

    if (e.target.textContent === "Semifinal") {
      setPhase("2")
    }

    if (e.target.textContent === "Final") {
      setPhase("1")
    }
  }