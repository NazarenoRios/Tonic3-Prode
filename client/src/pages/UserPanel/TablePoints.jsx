import React from 'react'
import NavBar2 from '../../components/Navbar/NavBar2.jsx';

import GeneralTable from '../../components/Prode/GeneralTable/GeneralTable.jsx'
import PhaseTable from '../../components/Prode/PhasesTables/PhaseTable.jsx';
import {TableTitle} from "../../components/Prode/StyledComponents";

const TablePoints = () => {
  return (
  <>
    <NavBar2/>
    <div className="bg-[#172236]">
        {/* <img style={{height:"120vh", width:"100vw"}} src="https://img.uefa.com/imgml/uefacom/ucl/2021/backgroundDark01L.jpg" alt="" className="absolute"/> */}
        <img style={{height:"100vh", width:"100vw"}} src="https://pbs.twimg.com/media/FCFz1faUUAAQKcC?format=jpg&name=large" alt="" className="fixed"/>
      <div className="flex justify-center">
        <TableTitle className="text-center mt-12 z-10">
          TABLE POINTS
        </TableTitle>
      </div>
      <div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-2 mt-6 align-middle content-center text-white h-auto font-bold"
      >
        <PhaseTable />
        <GeneralTable/>
      </div>
    </div>
    </>
  )
}

export default TablePoints