import React, { useEffect, useState } from "react";
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
// import FixtureStageParticipants from "../../../jsons/FixtureStageParticipants.json";

import axios from 'axios'

const Doughnut = () => {

  const [FixtureStageParticipants,setFixtureStageParticipants] = useState([])

  useEffect(() => {
    axios.get("/metrics/tournament_summary/").then(res => setFixtureStageParticipants(res.data))
  },[FixtureStageParticipants.length])


  return (
    <AccumulationChartComponent  tooltip={{enable:true}} >
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