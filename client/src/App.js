import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";

import Homepage from "./pages/Homepage";
import { getUser } from "./state/user";
import Profile from "./pages/Profile";

// Admin Section

import { Orders, Calendar, Employees, Dashboard, Customers, Kanban, Line, Area, Bar, Pie, ColorMapping, Tournaments} from "./pages/AdminPanel";
import Prode from "./pages/Prode";
import Register from "./pages/Register";
import Registered from "./pages/Registered";

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
          <Route path="/profile" element={<Profile />} />
          <Route path="/prode" element={<Prode />} />
          <Route path="/register" element={<Register/>} />

          {/* Admin Section */}

          {/* dashboard  */}
          <Route path="/admin-panel" element={<Dashboard />} />

          {/* pages  */}
          <Route path="/orders" element={<Orders />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/customers" element={<Customers />} />

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

  // return (
  //   <>
  //     <Routes>
  //         {/* User Section */}
  //         <Route path="/" element={<Homepage />} />
  //         <Route path="/prode" element={<Prode />} />
  //         <Route path="/register" element={<Register/>} />

  //         {/* Admin Section */}

  //         {/* dashboard  */}
  //         <Route path="/admin-panel" element={<Dashboard />} />

  //         {/* pages  */}
  //         <Route path="/orders" element={<Orders />} />
  //         <Route path="/employees" element={<Employees />} />
  //         <Route path="/customers" element={<Customers />} />

  //         {/* apps  */}
  //         <Route path="/kanban" element={<Kanban />} />
  //         <Route path="/tournaments" element={<Tournaments />} />
  //         <Route path="/calendar" element={<Calendar />} />

  //         {/* charts  */}
  //         <Route path="/line" element={<Line />} />
  //         <Route path="/area" element={<Area />} />
  //         <Route path="/bar" element={<Bar />} />
  //         <Route path="/pie" element={<Pie />} />
  //         <Route path="/color-mapping" element={<ColorMapping />} />
  //       </Routes>
  //   </>
  // );
}

export default App;
