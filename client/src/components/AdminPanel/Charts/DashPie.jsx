import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  PieSeries,
  AccumulationDataLabel,
  AccumulationLegend,
  AccumulationTooltip
} from "@syncfusion/ej2-react-charts";
import FixtureStageParticipants from "../../../jsons/FixtureStageParticipants.json";

const Doughnut = () => {
  return (
    <AccumulationChartComponent  tooltip={{enable:true}} legendSettings={{position:"Bottom"}} >
      <Inject services={[PieSeries, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip]}></Inject>
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          type="Pie"
          dataSource={FixtureStageParticipants}
          xName="name"
          yName="value"
          dataLabel={{ visible: true, name: "text", position: "Inside" }}
        ></AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default Doughnut;