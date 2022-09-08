import React from "react";
import { motion } from "framer-motion";

import podiumData from "../../common/Podium/data";
import Podium from "../../common/Podium/Podium";
import { PodiumTable } from "../../common/Podium/PodiumTable.tsx";
import { PodiumTable2 } from "../../common/Podium/PodiumTable2.tsx";
import { PodiumTable3 } from "../../common/Podium/PodiumTable3.tsx";
import { PodiumTable4 } from "../../common/Podium/PodiumTable4.tsx";
import { PodiumTable5 } from "../../common/Podium/PodiumTable5.tsx";


function PrizePodium() {
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
        <h1 style={{ fontSize: "48px", color: "#30316e" }}>Prize Podium</h1>
      </motion.div>
      <Podium winners={podiumData} />
      <PodiumTable/>
      <PodiumTable2/>
      <PodiumTable3/>
      <PodiumTable4/>
      <PodiumTable5/>
    </>
  );
}

export default PrizePodium;
