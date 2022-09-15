import React from "react";

import { Header } from "../../../components/AdminPanel";
import { DataManager, Query } from "@syncfusion/ej2-data";
import { DropDownList } from "@syncfusion/ej2-dropdowns";

import {
  getTournaments,
  addTournament,
  deleteTournament,
  editTournament,
} from "./TournamentFunctions.ts";

import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Edit,
  Toolbar,
  Inject,
} from "@syncfusion/ej2-react-grids";

export default class TournamentModel extends React.Component {
  constructor() {
    super(...arguments);

    this.template = this.gridTemplate;

    this.editOptions = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
    };
    this.toolbarOptions = [
      "Add",
      "Edit",
      "Delete",
      "Update",
      "Cancel",
      "Search",
    ];

    this.teamParams = {
      create: () => {
        this.teamElem = document.createElement("input");
        return this.teamElem;
      },
      destroy: () => {
        this.teamObj.destroy();
      },
      read: () => {
        return this.teamObj.text;
      },
      write: () => {
        this.teamObj = new DropDownList({
          change: () => {
            this.stateObj.enabled = true;
            const tempQuery = new Query().where(
              "teamId",
              "equal",
              this.teamObj.value
            );
            this.stateObj.query = tempQuery;
            this.stateObj.text = "";
            this.stateObj.dataBind();
          },
          dataSource: new DataManager(this.team),
          fields: { value: "teamId", text: "quantityTeams" },
          floatLabelType: "Never",
          placeholder: "Select how many teams",
        });
        this.teamObj.appendTo(this.teamElem);
      },
    };
    this.phaseParams = {
      create: () => {
        this.stateElem = document.createElement("input");
        return this.stateElem;
      },
      destroy: () => {
        this.stateObj.destroy();
      },
      read: () => {
        return this.stateObj.text;
      },
      write: () => {
        this.stateObj = new DropDownList({
          dataSource: new DataManager(this.phase),
          enabled: false,
          fields: { value: "phaseId", text: "phaseName" },
          floatLabelType: "Never",
          placeholder: "Select phase",
        });
        this.stateObj.appendTo(this.stateElem);
      },
    };
    this.team = [
      { quantityTeams: 2, teamId: "1" },
      { quantityTeams: 4, teamId: "2" },
      { quantityTeams: 8, teamId: "3" },
      { quantityTeams: 16, teamId: "4" },
      { quantityTeams: 32, teamId: "5" },
      { quantityTeams: 64, teamId: "6" },
    ];
    this.phase = [
      { phaseName: "Final", teamId: "1", phaseId: "101" },
      { phaseName: "Semifinal ", teamId: "2", phaseId: "102" },
      { phaseName: "Cuartos de Final", teamId: "3", phaseId: "103" },
      { phaseName: "Octavos de Final", teamId: "4", phaseId: "104" },
      { phaseName: "16vos de Final ", teamId: "5", phaseId: "105" },
      { phaseName: "32vos de Final", teamId: "6", phaseId: "106" },
    ];
  }
  

  state = {
    tournaments: [],
  };

  gridTemplate(props) {
    return (
      <img
      className="rounded-full w-10 h-10 ml-6 sm:m-auto"
      src={props.logo}
      alt="logo"
    />
    );
  }

  RefreshGrid() {
    getTournaments().then((data) => {
      this.setState({ tournaments: data });
    });
  }

  dataSourceChanged(state) {
    if (state.action === "add") {
      addTournament({ tournament: state.data });
    } else if (state.action === "edit") {
      editTournament({ id: state.data.id, tournament: state.data });
    } else if (state.requestType === "delete") {
      deleteTournament({ id: state.data[0].id });
    }
  }

  componentDidMount() {
    this.RefreshGrid();
  }

  componentDidUpdate(pP, pS) {
    if (pS.tournaments !== this.state.tournaments) {
      this.RefreshGrid();
    }
  }

  render() {
    return (
      <>
        <Header category="Page" title="Tournaments" />
        <GridComponent
          width="auto"
          allowPaging
          allowSorting
          pageSettings={{ pageCount: 5 }}
          editSettings={this.editOptions}
          toolbar={this.toolbarOptions}
          dataSource={this.state.tournaments}
          dataSourceChanged={this.dataSourceChanged}
        >
          <ColumnsDirective>
            <ColumnDirective
              headerText="Logo"
              width="150"
              textAlign="Center"
              field="logo"
              template={this.template}
            />
            <ColumnDirective
              headerText="Name"
              width="170"
              textAlign="Center"
              field="name"
            />
            <ColumnDirective
              field="participants"
              headerText="Teams"
              width="135"
              textAlign="Center"
              editType="dropdownedit"
              edit={this.teamParams}
            />
            <ColumnDirective
              field="phase"
              headerText="Phase"
              width="120"
              textAlign="Center"
              editType="dropdownedit"
              edit={this.phaseParams}
            />

            <ColumnDirective
              headerText="State"
              width="120"
              textAlign="Center"
              field="state"
            />
          </ColumnsDirective>
          <Inject services={[Edit, Toolbar]} />
        </GridComponent>
      </>
    );
  }
}
