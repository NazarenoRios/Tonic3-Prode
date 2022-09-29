import React, { useEffect, useState } from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';
import axios from 'axios'
// import RegisteredUsersLine from '../../../jsons/RegisteredUsersLine.json'

function SparkLine({id, height, width, color, type, currentColor}) {

  const [RegisteredUsers,setRegisteredUsers] = useState([])

  useEffect(() => {
    axios.get("/metrics/register_summary").then(res => setRegisteredUsers(res.data))
  },[RegisteredUsers.length])

  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      tooltipSettings={{
        visible: true,
        // eslint-disable-next-line no-template-curly-in-string
        format: '${month} : users ${users}',
        trackLineSettings: {
          visible: true,
        },
      }}
      markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
      dataSource={RegisteredUsers.num_file}
      xName="month"
      yName="users"
      type={type}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
}

export default SparkLine


