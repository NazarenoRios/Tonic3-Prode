import React from "react";
import { useStateContext } from "../../../contexts/ContextProvider";
import { ChartsHeader, Footer, Navbar, Sidebar, Pie as PieChart } from "../../../components/AdminPanel";
import { useTranslation } from "react-i18next";

const Pie = () => {
  const { activeMenu } = useStateContext();

  const { t } = useTranslation(["admin-panel"]);

  return (
    <>
      <div className="flex relative dark:bg-main-dark-bg">
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div
          className={
            activeMenu
              ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
              : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
          }
        >
          <div>
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
              <ChartsHeader category="Fixture" title={t("FixtureStageParticipants")} />
              <div className="w-full">
                <PieChart/>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pie;
