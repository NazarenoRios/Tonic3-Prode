import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { useStateContext } from "../../contexts/ContextProvider";

import { Stacked,DashPie,Button,SparkLine,Navbar,Footer,Sidebar } from "../../components/AdminPanel";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Btn from "../../common/Btn/Btn";


const Dashboard = () => {

  const { currentColor, activeMenu } = useStateContext();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/api/user/").then((res) => setUsers(res.data));
  }, []);

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
              ? "bg-[#f1f3f8] min-h-screen md:ml-72 w-full  "
              : "bg-[#f1f3f8] w-full min-h-screen flex-2 "
          }
        >
          <div>
            <div
              style={{ top: "0" }}
              className="fixed md:static bg-[#f1f3f8] dark:bg-main-dark-bg navbar w-full "
            >
              <Navbar />
            </div>
            <div className="mt-24 bg-[#f1f3f8]">
              <div className="flex gap-10 flex-wrap justify-center">
                
                <div className="bg-white m-3 p-4 rounded-2xl md:w-780">
                  <div className="flex justify-between">
                    <p className="font-semibold text-xl">{t("UsersStats")}</p>
                    <div className="flex items-center gap-4">
                      <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                        <span>
                          <GoPrimitiveDot />
                        </span>
                        <span>{t("Users")}</span>
                      </p>
                    </div>
                  </div>
                  <div className="mt-10 flex gap-10 flex-wrap justify-center">
                    <div className=" border-r-1 border-color m-4 pr-10">
                      <div>
                        <p>
                          <span className="text-3xl font-semibold">
                            {/* {users.length} */}
                            526
                          </span>
                        </p>
                        <p className="text-gray-500 mt-1">{t("Users")}</p>
                      </div>

                      <div className="mt-5">
                        <SparkLine
                          currentColor={currentColor}
                          id="line-sparkLine"
                          type="Line"
                          height="80px"
                          width="250px"
                          color={currentColor}
                        />
                      </div>
                      <div className="mt-10">
                        <Button
                          color="white"
                          bgColor={currentColor}
                          text="Download Report"
                          borderRadius="10px"
                        />
                      </div>
                    </div>
                    <div>
                      <Stacked width="320px" height="360px" />
                    </div>

                    <div className="text-center">
                      <h2>{t("GoToUserPanel")}</h2>
                      <br/>
                      <span>{t("ToGiveAdminOrDeleteUsers")}</span>
                      <br/>
                      <br/>
                      <br/>
                      <div className="text-center">
                        <Btn/>
                      </div>
                    </div>
                  </div>
                </div>
                

                <div>
                  <div
                    className=" rounded-2xl md:w-400 p-4 m-3"
                    style={{ backgroundColor: currentColor }}
                  >
                    <div className="flex justify-between items-center ">
                      <p className="font-semibold text-white text-2xl">
                      {t("Users")}
                      </p>

                      <div>
                        <p className="text-2xl text-white font-semibold mt-8">
                          104
                        </p>
                        <p className="text-gray-200">Weekly registers</p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <SparkLine
                        currentColor={currentColor}
                        id="column-sparkLine"
                        height="100px"
                        type="Column"
                        width="320"
                        color="rgb(242, 252, 253)"
                      />
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
                    <div className="w-40">
                      <DashPie
                        id="pie-chart"
                        legendVisiblity={false}
                        height="160px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
