import React from "react";
import TableItems from "./TableItems";

function GeneralTable() {

  const persons = [
    {name:"Nazareno Rios", points: 112},
    {name:"Nazareno Rios", points: 112},
    {name:"Nazareno Rios", points: 112},
    {name:"Nazareno Rios", points: 112},
    {name:"Nazareno Rios", points: 112},
    {name:"Nazareno Rios", points: 112},
    {name:"Nazareno Rios", points: 112},
    {name:"Nazareno Rios", points: 112},
    {name:"Nazareno Rios", points: 112},
    {name:"Nazareno Rios", points: 112},
    {name:"Nazareno Rios", points: 112},
    {name:"Nazareno Rios", points: 112},
    {name:"Nazareno Rios", points: 112},
    {name:"Nazareno Rios", points: 112},
    {name:"Nazareno Rios", points: 112},
    {name:"Nazareno Rios", points: 112},
    {name:"Nazareno Rios", points: 112},
    {name:"Nazareno Rios", points: 112},
    {name:"Nazareno Rios", points: 112},
    {name:"Nazareno Rios", points: 112},
    {name:"Nazareno Rios", points: 112},
    {name:"Nazareno Rios", points: 112},
  ]


  return (
    <section className="py-1">
      <div className=" mb-12 xl:mb-0 px-4 mx-auto mt-24">
        <div className="relative flex flex-col min-w-0 break-words bg-transparent w-full mb-6 shadow-lg rounded border border-white">
          <div className="text-center py-3">Total Points</div>
          <div className="block w-full overflow-x-auto">
            <table className="items-center bg-transparent w-full border-collapse">
              <thead>
                <tr className="flex w-full mb-4">
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center w-1/3">
                    Top
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center w-1/3">
                    Name
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center w-1/3">
                    Points
                  </th>
                </tr>
              </thead>

              <tbody class="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full" style={{height:"50vh", zIndex:"100000000"}}>
                {persons.map((person,i) => (
                  <TableItems key={i} person={person} top={i}/>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GeneralTable;
