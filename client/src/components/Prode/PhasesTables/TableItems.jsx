import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
function TableItems({ person, top }) {
  const [personData, setPersonData] = useState();

  const user = useSelector((state) => state.user);

  console.log('ESTO ES PERSON', person)
  console.log('ESTO ES USER', user)

  useEffect(() => {
    axios
      .get(`api/user/user/${person.userId}`)
      .then((res) => setPersonData(res.data));
  }, []);

  return (
    <tr className="flex w-full mb-4">
      {user.id === person.userId ? (
        <>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-blueGray-700  text-center w-1/3 bg-white bg-opacity-25 ">
            {top}
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center w-1/3 bg-white bg-opacity-25">
            {personData?.name}
          </td>
          <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center w-1/3 bg-white bg-opacity-25">
            {person.points}
          </td>
          <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center w-1/3 bg-white bg-opacity-25">
            {person.points}
          </td>
        </>
      ) : (
        <>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-blueGray-700  text-center w-1/3">
            {top}
          </td>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center w-1/3">
            {personData?.name}
          </td>
          <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center w-1/3">
            {person.points}
          </td>
          <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center w-1/3">
            {person.points}
          </td>
        </>
      )}
    </tr>
  );
}

export default TableItems;