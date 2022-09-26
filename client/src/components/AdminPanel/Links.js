import React from "react";
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineBarChart } from "react-icons/ai";
import { FiShoppingBag, FiPieChart } from "react-icons/fi";
import { BsBarChart } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";


export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "Admin-Panel",
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: "Management",
    links: [
      {
        name: "Tournaments",
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: "Teams",
        icon: <IoMdContacts />,
      },
      {
        name: "Matches",
        icon: <IoMdContacts />,
      },
      {
        name: "Players",
        icon: <RiContactsLine />,
      },
      {
        name: "Users",
        icon: <RiContactsLine />,
      },
    ],
  },
  {
    title: "Apps",
    links: [
      {
        name: "calendar",
        icon: <AiOutlineCalendar />,
      },
    ],
  },
  {
    title: "Stats",
    links: [
      {
        name: "User-Permanency",
        icon: <AiOutlineBarChart />,
      },
      {
        name: "Fixture-Stage-Participants",
        icon: <FiPieChart />,
      },
      {
        name: "User-Register-by-Use",
        icon: <BsBarChart />,
      },
    ],
  },
];
