import React from "react";
import { useStateContext } from "../../../contexts/ContextProvider";

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  SplineAreaSeries,
  Legend,
} from "@syncfusion/ej2-react-charts";

import {
  ChartsHeader,
  Footer,
  Navbar,
  Sidebar,
} from "../../../components/AdminPanel";
import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../../../utils/dummy";

const Area = () => {
  const { currentMode, activeMenu } = useStateContext();

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
                category="Area"
                title="Inflation Rate in percentage"
              />
              <div className="w-full">
                <ChartComponent
                  id="charts"
                  primaryXAxis={areaPrimaryXAxis}
                  primaryYAxis={areaPrimaryYAxis}
                  chartArea={{ border: { width: 0 } }}
                  background={currentMode === "Dark" ? "#33373E" : "#fff"}
                  legendSettings={{ background: "white" }}
                >
                  <Inject services={[SplineAreaSeries, DateTime, Legend]} />
                  <SeriesCollectionDirective>
                    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                    {areaCustomSeries.map((item, index) => (
                      <SeriesDirective key={index} {...item} />
                    ))}
                  </SeriesCollectionDirective>
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

export default Area;
