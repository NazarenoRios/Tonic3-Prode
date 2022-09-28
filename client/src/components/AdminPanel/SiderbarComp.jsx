import React from "react";
import { NavLink } from "react-router-dom";

import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineBarChart } from "react-icons/ai";
import { FiShoppingBag, FiPieChart } from "react-icons/fi";
import { BsBarChart } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";

import { useTranslation } from "react-i18next";

function SiderbarComp({ handleCloseSideBar }) {
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-white hover:bg-[#06b6d4] m-2";

  const { t } = useTranslation(["admin-panel"]);

  return (
    <>
      <div key="Dashboard">
        <p className="text-white m-3 mt-4 uppercase">{t("Dashboard")}</p>
        <NavLink
          to="/Admin-Panel"
          key="Admin-Panel"
          onClick={handleCloseSideBar}
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#0591aa" : "",
          })}
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <FiShoppingBag />
          <span className="capitalize ">{t("Admin-Panel")}</span>
        </NavLink>
      </div>

      <div key="Management">
        <p className="text-white m-3 mt-4 uppercase">{t("Management")}</p>

        <NavLink
          to="/Tournaments"
          key="Tournaments"
          onClick={handleCloseSideBar}
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#0591aa" : "",
          })}
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <AiOutlineShoppingCart />
          <span className="capitalize ">{t("Tournaments")}</span>
        </NavLink>

        <NavLink
          to="/Teams"
          key="Teams"
          onClick={handleCloseSideBar}
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#0591aa" : "",
          })}
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <IoMdContacts />
          <span className="capitalize ">{t("Teams")}</span>
        </NavLink>

        <NavLink
          to="/Matches"
          key="Matches"
          onClick={handleCloseSideBar}
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#0591aa" : "",
          })}
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <AiOutlineShoppingCart />
          <span className="capitalize ">{t("Matches")}</span>
        </NavLink>

        <NavLink
          to="/Players"
          key="Players"
          onClick={handleCloseSideBar}
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#0591aa" : "",
          })}
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <RiContactsLine />
          <span className="capitalize ">{t("Players")}</span>
        </NavLink>

        <NavLink
          to="/Users"
          key="Users"
          onClick={handleCloseSideBar}
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#0591aa" : "",
          })}
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <RiContactsLine />
          <span className="capitalize ">{t("Users")}</span>
        </NavLink>

        <NavLink
          to="/Awards"
          key="Awards"
          onClick={handleCloseSideBar}
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#0591aa" : "",
          })}
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <RiContactsLine />
          <span className="capitalize ">Awards</span>
        </NavLink>
      </div>

      <div key="Apps">
        <p className="text-white m-3 mt-4 uppercase">{t("Apps")}</p>
        <NavLink
          to="/calendar"
          key="calendar"
          onClick={handleCloseSideBar}
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#0591aa" : "",
          })}
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <AiOutlineCalendar />
          <span className="capitalize ">{t("Calendar")}</span>
        </NavLink>
      </div>


      <div key="Stats">
        <p className="text-white m-3 mt-4 uppercase">{t("Stats")}</p>

        <NavLink
          to="/User-Permanency"
          key="User-Permanency"
          onClick={handleCloseSideBar}
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#0591aa" : "",
          })}
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <AiOutlineBarChart />
          <span className="capitalize ">{t("User-Permanency")}</span>
        </NavLink>

        <NavLink
          to="/User-Register-by-Use"
          key="User-Register-by-Use"
          onClick={handleCloseSideBar}
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#0591aa" : "",
          })}
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <BsBarChart />
          <span className="capitalize ">{t("User-Register-by-Use")}</span>
        </NavLink>

        <NavLink
          to="/Fixture-Stage-Participants"
          key="Fixture-Stage-Participantsy"
          onClick={handleCloseSideBar}
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#0591aa" : "",
          })}
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <FiPieChart />
          <span className="capitalize ">{t("Fixture-Stage-Participants")}</span>
        </NavLink>


      </div>

    </>
  );
}

export default SiderbarComp;
