import React from "react";
import { useStateContext } from "../../../contexts/ContextProvider";

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Tooltip,Legend,RangeColorSettingsDirective,RangeColorSettingDirective,
} from "@syncfusion/ej2-react-charts";

import {ChartsHeader,Footer,Navbar,Sidebar} from "../../../components/AdminPanel";

import UserRegisterPerUse from '../../../jsons/UserRegisterPerUse.json'
import { useTranslation } from "react-i18next";

const ColorMapping = () => {

  const { currentMode, activeMenu } = useStateContext();

  const rangeColorMapping = [
    { start: "1", end: "20", colors: ['#FFFF99'] },
    { start: "21",end: "40",colors: ['#FFA500']},
    { start: "41",end: "100",colors: ['#FF4040'],},
  ];

  const ColorMappingPrimaryXAxis = {
    valueType: "Category",
    majorGridLines: { width: 0 },
  };
  
  const ColorMappingPrimaryYAxis = {
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
    labelFormat: "{value} users",
  };

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
              <ChartsHeader
                category={t("Users")}
                title={t("RegistrationOfUsersByUser")}
              />
              <div className="w-full">
                <ChartComponent
                  id="charts"
                  primaryXAxis={ColorMappingPrimaryXAxis}
                  primaryYAxis={ColorMappingPrimaryYAxis}
                  chartArea={{ border: { width: 0 } }}
                  legendSettings={{ mode: "Range", background: "white" }}
                  tooltip={{ enable: true }}
                  background={currentMode === "Dark" ? "#33373E" : "#fff"}
                >
                  <Inject
                    services={[ColumnSeries, Tooltip, Category, Legend]}
                  />
                  <SeriesCollectionDirective>
                    <SeriesDirective
                      dataSource={UserRegisterPerUse}
                      name="Users per day"
                      xName="x"
                      yName="y"
                      type="Column"
                      cornerRadius={{
                        topLeft: 10,
                        topRight: 10,
                      }}
                    />
                  </SeriesCollectionDirective>
                  <RangeColorSettingsDirective>
                    {rangeColorMapping.map((item, index) => (
                      <RangeColorSettingDirective key={index} {...item} />
                    ))}
                  </RangeColorSettingsDirective>
                </ChartComponent>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorMapping;
