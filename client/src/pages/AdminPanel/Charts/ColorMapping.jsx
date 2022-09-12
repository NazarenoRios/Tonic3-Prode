import React from "react";
import { useStateContext } from "../../../contexts/ContextProvider";

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Category,
  Tooltip,
  Legend,
  RangeColorSettingsDirective,
  RangeColorSettingDirective,
} from "@syncfusion/ej2-react-charts";

import {
  colorMappingData,
  ColorMappingPrimaryXAxis,
  ColorMappingPrimaryYAxis,
  rangeColorMapping,
} from "../../../utils/dummy";
import {
  ChartsHeader,
  Footer,
  Navbar,
  Sidebar,
} from "../../../components/AdminPanel";

const ColorMapping = () => {
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
                category="Color Mappping"
                title="USA CLIMATE - WEATHER BY MONTH"
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
                      dataSource={colorMappingData[0]}
                      name="USA"
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
                    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
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
