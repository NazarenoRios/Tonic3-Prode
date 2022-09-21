import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {getToken, onMessage} from "firebase/messaging"
import {messaging} from "./firebase"
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

import "./App.css";

import Homepage from "./pages/Homepage";
import { getUser } from "./state/user";


// Admin Section
import { Calendar,Dashboard, Kanban, Line, Area, Bar, Pie, ColorMapping, Tournaments, Teams, Players, Users} from "./pages/AdminPanel";
import Prode from "./pages/Prode";
import Register from "./pages/Register";
import Registered from "./pages/Registered";

//User Section
import CustomUser from "./pages/UserPanel/EditUser";
import Matches from "./pages/AdminPanel/Matches";
import TablePoints from "./pages/UserPanel/TablePoints";




function App() {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
  }, [user.id]);

  return (
    <>
      {user.isVerified ? (
        

        <Routes>
          {/* User Section */}
          <Route path="/" element={<Homepage />} />
          <Route path="/prode" element={<Prode />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/Edit-User" element={<CustomUser/>} />

        

          <Route path="/TablePoints-User" element={<TablePoints/>} />


          {/* Admin Section */}

          {/* dashboard  */}
          <Route path="/admin-panel" element={<Dashboard />} />

          {/* pages  */}
          <Route path="/Tournaments" element={<Tournaments />} />
          <Route path="/Teams" element={<Teams />} />
          <Route path="/Matches" element={<Matches/>} />
          <Route path="/Players" element={<Players />} />
          <Route path="/Users" element={<Users />} />

          {/* apps  */}
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/calendar" element={<Calendar />} />

          {/* charts  */}
          <Route path="/line" element={<Line />} />
          <Route path="/area" element={<Area />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/pie" element={<Pie />} />
          <Route path="/color-mapping" element={<ColorMapping />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/registered" element={<Registered />} />
        </Routes>
      )}
    </>
  );
}

export default App;
