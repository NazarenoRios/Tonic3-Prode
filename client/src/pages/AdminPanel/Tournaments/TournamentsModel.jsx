import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AddModal from "./AddModal";

import {
  GridComponent,
  Inject,
  ColumnsDirective,
  ColumnDirective,
  Search,
  Page,
} from "@syncfusion/ej2-react-grids";

import { tournamentGrid } from "../../../utils/dummy";
import { Header } from "../../../components/AdminPanel";

function TournamentsModel({ tournaments, setTournaments }) {
  
  const editing = { allowDeleting: true, allowEditing: true };
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ["Search","Delete","Add","Update","Cancel"];

  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <Header category="Page" title="Tournaments" />
      <GridComponent
        dataSource={tournaments}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {tournamentGrid.map((item, index) => (
            // <div></div>
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Search, Page]} />
      </GridComponent>
      {showModal ? (
        <AddModal setShowModal={setShowModal} setTournaments={setTournaments} />
      ) : null}
    </>
  );
}

export default TournamentsModel;
