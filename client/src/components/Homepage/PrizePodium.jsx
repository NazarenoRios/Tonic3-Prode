import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from 'axios'
import Cookies from 'js-cookie';

import Podium from "../../common/Podium/Podium";
import { PodiumTable } from "../../common/Podium/PodiumTable.tsx";
import { PodiumTable2 } from "../../common/Podium/PodiumTable2.tsx";
import { PodiumTable3 } from "../../common/Podium/PodiumTable3.tsx";
import { PodiumTable4 } from "../../common/Podium/PodiumTable4.tsx";
import { PodiumTable5 } from "../../common/Podium/PodiumTable5.tsx";

import { useTranslation } from "react-i18next"

function PrizePodium() {

  const [awards,setAwards] = useState([])

  const { t } = useTranslation(["home"])

  useEffect(() => {
    axios.get("/api/award/all").then((res) => setAwards(res.data))
  },[awards.length])

  function filterAwards (arr,country,place) {
    const newArr = arr.filter(award => {
      return award.country === country && award.place === place
    })
    return newArr
  }

  useEffect(() => {
    sessionStorage.clear()
    Cookies.remove('name')
    Cookies.remove('lastname')
    Cookies.remove('email')
    Cookies.remove('password')
  },[])
  
  const data = [
    {
      idarg: filterAwards(awards,"Argentina",1).length ? (filterAwards(awards,"Argentina",1)[0].img) : ("hYs70H1.png"),
      idbr: filterAwards(awards,"Brazil",1).length ? (filterAwards(awards,"Brazil",1)[0].img) : ("cNjF2t1.png"),
      idusa: filterAwards(awards,"United States",1).length ? (filterAwards(awards,"United States",1)[0].img) : ("pW6Ie5x.png"),
    },
    {
      idarg: filterAwards(awards,"Argentina",2).length ? (filterAwards(awards,"Argentina",2)[0].img) : ("a5A9Obs.png"),
      idbr: filterAwards(awards,"Brazil",2).length ? (filterAwards(awards,"Brazil",2)[0].img) : ("2PigGBu.png"),
      idusa: filterAwards(awards,"United States",2).length ? (filterAwards(awards,"United States",2)[0].img) : ("IQ4X9Ib.png"),
    },
    {
      idarg: filterAwards(awards,"Argentina",3).length ? (filterAwards(awards,"Argentina",3)[0].img) : ("6PUjeVs.png"),
      idbr: filterAwards(awards,"Brazil",3).length ? (filterAwards(awards,"Brazil",3)[0].img) : ("3MGIMYn.png"),
      idusa: filterAwards(awards,"United States",3).length ? (filterAwards(awards,"United States",3)[0].img) : ("49DAXZi.png"),
    },
    {
      idarg: filterAwards(awards,"Argentina",4).length ? (filterAwards(awards,"Argentina",4)[0].img) : ("kvKyLaW.png"),
      idbr: filterAwards(awards,"Brazil",4).length ? (filterAwards(awards,"Brazil",4)[0].img) : ("ATX0mmd.png"),
      idusa: filterAwards(awards,"United States",4).length ? (filterAwards(awards,"United States",4)[0].img) : ("rnSQSBq.png"),
    },
    {
      idarg: filterAwards(awards,"Argentina",5).length ? (filterAwards(awards,"Argentina",5)[0].img) : ("1bQFoaQ.png"),
      idbr: filterAwards(awards,"Brazil",5).length ? (filterAwards(awards,"Brazil",5)[0].img) : ("KLUUgZR.png"),
      idusa: filterAwards(awards,"United States",5).length ? (filterAwards(awards,"United States",5)[0].img) : ("xxvnCoA.png"),
    },
  ].map((winner, position) => ({ ...winner, position }))
  

  return (
    <>
      <motion.div
        className="flex content-center justify-center mt-16"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delay: 2.5,
              duration: 0.75,
            },
          },
        }}
      >
        <h1 style={{ fontSize: "48px", color: "#30316e" }}>{t("PrizePodium")}</h1>
      </motion.div>
      <Podium winners={data} />
      <PodiumTable/>
      <PodiumTable2/>
      <PodiumTable3/>
      <PodiumTable4/>
      <PodiumTable5/>
    </>
  );
}

export default PrizePodium;
