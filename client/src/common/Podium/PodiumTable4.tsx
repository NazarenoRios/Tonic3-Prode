import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import axios from "axios";

export const PodiumTable4 = () => {
  const user = useSelector((state) => state.user);

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
        delay: 4.75,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const [awards, setAwards] = useState([]);

  function filterAwards(arr, country, place) {
    const newArr = arr.filter((award) => {
      return award.country === country && award.place === place;
    });
    return newArr;
  }

  React.useEffect(() => {
    axios.get("/api/award/all").then((res) => setAwards(res.data));
  }, [awards.length]);

  return (
    <>
      <motion.div
        className="container mx-auto grid md:gap-2 mt-6 place-items-center"
        initial="hidden"
        animate="visible"
        variants={list}
      >
        <motion.div
          className="w-96 py-5 px-5 text-center rounded-xl"
          style={{ background: "#172236" }}
          variants={item}
        >
          {user.country === "Argentina" ? (
            <span className="text-white">
              {filterAwards(awards, "Argentina", 4).length
                ? filterAwards(awards, "Argentina", 4)[0].name
                : "Moto verde de batman"}
            </span>
          ) : user.country === "Brazil" ? (
            <span className="text-white">
              {filterAwards(awards, "Brazil", 4).length
                ? filterAwards(awards, "Brazil", 4)[0].name
                : "Triciclo na Favela"}
            </span>
          ) : user.country === "United States" ? (
            <span className="text-white">
              {filterAwards(awards, "United States", 4).length
                ? filterAwards(awards, "United States", 4)[0].name
                : "Camp Travel"}
            </span>
          ) : (
            ""
          )}
        </motion.div>
      </motion.div>
    </>
  );
};
