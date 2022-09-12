import React from "react";

function TableItems({person,top}) {
  return (
    <tr className="flex w-full mb-4">
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-blueGray-700  text-center w-1/3">
        {top}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center w-1/3">
        {person.name}
      </td>
      <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center w-1/3">
        {person.points}
      </td>
    </tr>
  );
}

export default TableItems;
