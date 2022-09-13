import React, { useEffect, useState } from "react";

import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page, ToolbarItems, EditSettingsModel, Edit, Toolbar, IEditCell } from "@syncfusion/ej2-react-grids";
import { DataManager, Query } from '@syncfusion/ej2-data';

import { teamsGrid } from "../../../utils/dummy";
import { Header } from "../../../components/AdminPanel";
import { getTeams, addTeam, deleteTeam, editTeam } from "./TeamsFunctions.ts";

function TeamsModel() {

  const [teams, setTeams] = useState({});

  function RefreshGrid() {
    getTeams()
      .then(data => {
        setTeams(data)
      })
  }

  useEffect(() => {
    RefreshGrid()
  }, []);


  function dataSourceChanged(state: any) {
    console.log(state)
    if (state.action === "add") {
        addTeam({team: state.data}).then(() => RefreshGrid())
    } else if (state.action === "edit") {
        editTeam({id:state.data.id, team:state.data}).then(() => RefreshGrid())
    } else if (state.requestType === "delete") {
        deleteTeam({id:state.data[0].id}).then(() => RefreshGrid())
    }
  }

  
  const editOptions: EditSettingsModel = {allowEditing: true, allowAdding: true, allowDeleting: true}
  // const toolbarOptions: ToolbarItems[] = ["Add","Edit","Delete", "Search"];
  const toolbarOptions: ToolbarItems[] = ["Add","Edit","Delete","Update","Cancel", "Search"];


  const teamsParams: IEditCell = {
    params: {
      actionComplete: () => false,
      allowFiltering: true,
      dataSource: new DataManager([
        {quantity: "64", quantityId: '1'},
        {quantity: "32", quantityId: '2'},
        {quantity: "16", quantityId: '3'},
        {quantity: "8", quantityId: '4'},
        {quantity: "4", quantityId: '5'},
        {quantity: "2", quantityId: '6'},
      ]),
      fields: { text: "quantity", value:"quantity" },
      query: new Query()
    }
  }


  return (
    <>
      <Header category="Page" title="Tournaments" />
      <GridComponent
        dataSource={teams}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editOptions}
        toolbar={toolbarOptions}
        dataSourceChanged={dataSourceChanged}
      >
        <ColumnsDirective>
          {/* <ColumnDirective headerText="Logo" width="150"  textAlign= "Center" field="logo"/>
          <ColumnDirective headerText="Name" width="170"  textAlign= "Center" field="name"/>
          <ColumnDirective headerText="Phase" width="120"  textAlign= "Center" field="phase"/>
          <ColumnDirective headerText="Teams" width="135"  textAlign= "Center" field="participants"/>

          <ColumnDirective headerText="Teams" width="135"  textAlign= "Center" field="participants" editType="dropdownedit" edit={teamsParams}/>
          <ColumnDirective headerText="State" width="120"  textAlign= "Center" field="state"/> */}

          {teamsGrid.map((item, i) => (
            <ColumnDirective key={i} {...item} />
          ))}
          
        </ColumnsDirective>
        <Inject services={[Search, Page, Edit, Toolbar]} />
      </GridComponent>
    </>
  );
}

export default TeamsModel;
