import React from "react";
import {
  GridComponent,
  Inject,
  ColumnsDirective,
  ColumnDirective,
  Search,
  Page,
} from "@syncfusion/ej2-react-grids";

import { employeesData, employeesGrid } from "../../utils/dummy";
import { Footer, Header, Navbar, Sidebar } from "../../components/AdminPanel";
import { useStateContext } from "../../contexts/ContextProvider";

const Employees = () => {
  
  const toolbarOptions = ["Search"];
  const { activeMenu } = useStateContext();
  const editing = { allowDeleting: true, allowEditing: true };

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
              ? "bg-[#f1f3f8] min-h-screen md:ml-72 w-full  "
              : "bg-[#f1f3f8] w-full min-h-screen flex-2 "
          }
        >
          <div>
            <div style={{top:"0"}} className="fixed md:static bg-[#f1f3f8] dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
              <Header category="Page" title="Employees" />
              <GridComponent
                dataSource={employeesData}
                width="auto"
                allowPaging
                allowSorting
                pageSettings={{ pageCount: 5 }}
                editSettings={editing}
                toolbar={toolbarOptions}
              >
                <ColumnsDirective>
                  {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                  {employeesGrid.map((item, index) => (
                    <ColumnDirective key={index} {...item} />
                  ))}
                </ColumnsDirective>
                <Inject services={[Search, Page]} />
              </GridComponent>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};
export default Employees;
