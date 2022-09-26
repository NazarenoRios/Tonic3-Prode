import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

export const PodiumTable5 = () => {

  const user = useSelector((state) => state.user);

  const [premioArg, setPremioArg] = useState({
    premio: "Premio consuelo",
  });

  const [premioBr, setPremioBr] = useState({
    premio: "Camisa do Brasil",
  });

  const [premioUsa, setPremioUsa] = useState({
    premio: "United States t-shirt",
  });


  const list = {
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 1,
        delay: 4,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <motion.div
        className="container mx-auto grid md:gap-2 mt-6 place-items-center"
        initial="hidden"
        animate="visible"
        variants={list}
      >
          <motion.div className="w-96 py-5 px-5 text-center rounded-xl" style={{ background: "#172236" }} variants={item}>
          {user.country === "Argentina" ? (
            <span className="text-white">{premioArg.premio}</span>
          ) : user.country === "Brazil" ? (
            <span className="text-white">{premioBr.premio}</span>
          ) : user.country === "United States" ? (
            <span className="text-white">{premioUsa.premio}</span>
          ) : (
            ""
          )}
          </motion.div>
      </motion.div>
    </>
  );
};
