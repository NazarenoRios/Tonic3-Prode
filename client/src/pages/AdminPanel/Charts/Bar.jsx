import React from "react";
import { useStateContext } from "../../../contexts/ContextProvider";

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel,
} from "@syncfusion/ej2-react-charts";

import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../../utils/dummy";
import {
  ChartsHeader,
  Footer,
  Navbar,
  Sidebar,
} from "../../../components/AdminPanel";

const Bar = () => {
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
              <ChartsHeader category="Bar" title="Olympic Medal Counts - RIO" />
              <div className=" w-full">
                <ChartComponent
                  id="charts"
                  primaryXAxis={barPrimaryXAxis}
                  primaryYAxis={barPrimaryYAxis}
                  chartArea={{ border: { width: 0 } }}
                  tooltip={{ enable: true }}
                  background={currentMode === "Dark" ? "#33373E" : "#fff"}
                  legendSettings={{ background: "white" }}
                >
                  <Inject
                    services={[
                      ColumnSeries,
                      Legend,
                      Tooltip,
                      Category,
                      DataLabel,
                    ]}
                  />
                  <SeriesCollectionDirective>
                    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                    {barCustomSeries.map((item, index) => (
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

export default Bar;
