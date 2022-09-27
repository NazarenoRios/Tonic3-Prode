import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

export default function PodiumStep({ podium, winner }) {
  const offset = podium.length - winner.position;

  const user = useSelector((state) => state.user);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        placeContent: "center",
      }}
    >
      <motion.div
        style={{
          alignSelf: "center",
          marginBottom: ".25rem",
        }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delay: 1 + (offset + 2),
              duration: 0.75,
            },
          },
        }}
      >
        {user.country === "Argentina" ? (
          <img
            src={`https://i.imgur.com/${winner.idarg}`}
            alt=""
            style={{
              borderRadius: 9999,
              height: "5rem",
              overflow: "hidden",
              width: "5rem",
            }}
          />
        ) : user.country === "Brazil" ? (
          <img
            src={`https://i.imgur.com/${winner.idbr}`}
            alt=""
            style={{
              borderRadius: 9999,
              height: "5rem",
              overflow: "hidden",
              width: "5rem",
            }}
          />
        ) : user.country === "United States" ? (
          <img
            src={`https://i.imgur.com/${winner.idusa}`}
            alt=""
            style={{
              borderRadius: 9999,
              height: "5rem",
              overflow: "hidden",
              width: "5rem",
            }}
          />
        ) : (
          ""
        )}

      </motion.div>
      <motion.div
        style={{
          backgroundColor: "#172236",
          borderColor: "rgba(190,24,93,1)",
          borderTopLeftRadius: ".5rem",
          borderTopRightRadius: ".5rem",
          display: "flex",
          filter: `opacity(${0.1 + offset / podium.length})`,
          marginBottom: -1,
          placeContent: "center",
          width: "4rem",
        }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { height: 0, opacity: 0 },
          visible: {
            height: 200 * (offset / podium.length),
            opacity: 1,
            transition: {
              delay: 1 + offset,
              duration: 2,
              ease: "backInOut",
            },
          },
        }}
      >
        <span style={{ alignSelf: "flex-end", color: "white" }}>
          {winner.position + 1}
        </span>
      </motion.div>
    </div>
  );
}
