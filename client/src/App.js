import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";

import "./App.css";

import Homepage from "./pages/Homepage";
import { getUser } from "./state/user";
import Modal from "./common/Modal";

// Admin Section

import { Orders, Calendar, Employees, Dashboard, Customers, Kanban, Line, Area, Bar, Pie, ColorMapping, Tournaments} from "./pages/AdminPanel";

function App() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  // const [user,setUser] = useState({})

  useEffect(() => {
    dispatch(getUser());
  }, [user.id]);

  console.log(Cookies.get("token"));


  return (
    <>
      {Cookies.get("token") !== undefined ? (
        <Routes>
          {/* User Section */}
          <Route path="/" element={<Homepage />} />

          {/* Admin Section */}

          {/* dashboard  */}
          <Route path="/adminpanel" element={<Dashboard />} />

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
        <Modal />
      )}
    </>
  );
}

export default App;
