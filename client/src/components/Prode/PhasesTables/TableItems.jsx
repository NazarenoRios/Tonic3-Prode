import React from "react";
import { useSelector } from "react-redux";
function TableItems({ torneo }) {


  const user = useSelector((state) => state.user);
  useEffect(() => {
    axios
      .get(`api/user/user/${person.userId}`)
      .then((res) => setPersonData(res.data));
  }, []);

  const torneoData = useSelector((state) => state.tournament);

  return (
    <tr className="flex w-full mb-4">
        <>
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center w-1/3">
            {torneoData?.name}
          </td>
          <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center w-1/3">
            {torneo?.fase}
          </td>
          <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-center w-1/3">
            {torneo?.points}
          </td>
        </>
    </tr>
  );
}

export default TableItems;