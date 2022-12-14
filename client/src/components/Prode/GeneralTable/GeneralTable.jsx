import React from "react";

import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import TableItems from "./TableItems";
import { useSelector } from "react-redux";
import axios from "axios";

function GeneralTable() {

  const [points , setPoints] = React.useState([])
  const tournament = useSelector((state) => state.tournament);

  const { t } = useTranslation(["table_points"]);

  useEffect(()=>{
   axios.get(`/api/point/tournaments/${tournament.id}`)
   .then((res)=> setPoints(res.data))
  },[tournament.id])

  console.log(points)

  return (
    <section className="py-1">
      <div className=" mb-12 xl:mb-0 px-4 mx-auto mt-24">
        <div className="relative flex flex-col min-w-0 break-words bg-transparent w-full mb-6 shadow-lg rounded border border-white">
          <div className="text-center py-3">{t("total_points")}</div>
          <div className="block w-full overflow-x-auto">
            <table className="items-center bg-transparent w-full border-collapse">
              <thead>
                <tr className="flex w-full mb-4">
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center w-1/3">
                  {t("top")}
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center w-1/3">
                  {t("Name")}
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center w-1/3">
                  {t("points")}
                  </th>
                </tr>
              </thead>

              <tbody class="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full" style={{ zIndex:"100000000"}}>
                 {points.length ? points?.map((person,i) => (
                  <TableItems key={i} person={person} top={i+1}/>
                )):''} 
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GeneralTable;
