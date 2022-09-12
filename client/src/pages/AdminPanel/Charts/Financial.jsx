import React from "react";
import { useStateContext } from "../../../contexts/ContextProvider";

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  HiloSeries,
  Tooltip,
  DateTime,
  Zoom,
  Logarithmic,
  Crosshair,
} from "@syncfusion/ej2-react-charts";

import {
  financialChartData,
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
} from "../../../utils/dummy";
import { ChartsHeader, Footer, Navbar, Sidebar } from "../../../components/AdminPanel";

const date1 = new Date("2017, 1, 1");

// eslint-disable-next-line consistent-return
function filterValue(value) {
  if (value.x >= date1) {
    // eslint-disable-next-line no-sequences
    return value.x, value.high, value.low;
  }
}
const returnValue = financialChartData.filter(filterValue);

const Financial = () => {
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
              <ChartsHeader category="Financial" title="AAPLE Historical" />
              <div className="w-full">
                <ChartComponent
                  id="charts"
                  primaryXAxis={FinancialPrimaryXAxis}
                  primaryYAxis={FinancialPrimaryYAxis}
                  chartArea={{ border: { width: 0 } }}
                  tooltip={{ enable: true, shared: true }}
                  crosshair={{
                    enable: true,
                    lineType: "Vertical",
                    line: { width: 0 },
                  }}
                  background={currentMode === "Dark" ? "#33373E" : "#fff"}
                >
                  <Inject
                    services={[
                      HiloSeries,
                      Tooltip,
                      DateTime,
                      Logarithmic,
                      Crosshair,
                      Zoom,
                    ]}
                  />
                  <SeriesCollectionDirective>
                    <SeriesDirective
                      dataSource={returnValue}
                      xName="x"
                      yName="low"
                      name="Apple Inc"
                      type="Hilo"
                      low="low"
                      high="high"
                    />
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

export default Financial;