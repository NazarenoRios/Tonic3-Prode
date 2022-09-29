import React, { useEffect, useState } from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';

// import RegisteredUsers from '../../../jsons/RegisteredUsers.json'
import axios from 'axios'

const Stacked = ({ width, height }) => {

  const [RegisteredUsers,setRegisteredUsers] = useState([])

  useEffect(() => {
    axios.get("/metrics/register_summary").then(res => setRegisteredUsers(res.data))
  },[RegisteredUsers.length])


 const stackedPrimaryXAxis = {
    majorGridLines: { width: 0 },
    minorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
    interval: 1,
    lineStyle: { width: 0 },
    labelIntersectAction: "Rotate45",
    valueType: "Category",
  };
  
  const stackedPrimaryYAxis = {
    lineStyle: { width: 0 },
    minimum: 1,
    maximum: 20,
    interval: 2,
    majorTickLines: { width: 0 },
    majorGridLines: { width: 1 },
    minorGridLines: { width: 1 },
    minorTickLines: { width: 0 },
    labelFormat: "{value}",
  };

  const stackedCustomSeries = [
    {
      dataSource: RegisteredUsers.str_file,
      xName: "month",
      yName: "users",
      name: "Users",
      type: "StackingColumn",
      background: "blue",
    },
  ]

  return (
    <ChartComponent
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      width={width}
      height={height}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background="#fff"
      legendSettings={{ background: 'white' }}
    >
      <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries?.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;
