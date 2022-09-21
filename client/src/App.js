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
import CustomUser from "./pages/UserPanel/EditUser";



function App() {


  

  const activarMensaje = async() => {
    Notification.requestPermission()
    .then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        // TODO(developer): Retrieve a registration token for use with FCM.
        // ...
      } else {
        console.log('Unable to get permission to notify.');
      }
    });

    const token = await getToken(messaging,{vapidKey:"BI6BCOqKrdnUw9AGExq8oNkusRdhwfNzgutkTIocRXCstzaxwCZ5JZyTrEysvGbQb78ezfpASgRBk3jslP6maw0"})
    .catch(error => console.log("error generar token", error))
    if(token) console.log("este es tu token", token)
    if(!token) console.log("no hay token")
  }

  useEffect(()=>{
    onMessage(messaging, message=>{
      console.log("tu mensaje", message)
      toast(message.notification.title)
    })
  },[])

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
  }, [user.id]);

  return (
    <>
      <div>
            <h1>Wenas</h1>
            <ToastContainer/>
            <button onClick={activarMensaje} >token</button>
          </div>
      {user.isVerified ? (
        

        <Routes>
          {/* User Section */}
          <Route path="/" element={<Homepage />} />
          <Route path="/prode" element={<Prode />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/Edit-User" element={<CustomUser/>} />
        
          {/* Admin Section */}

          {/* dashboard  */}
          <Route path="/admin-panel" element={<Dashboard />} />

          {/* pages  */}
          <Route path="/Tournaments" element={<Tournaments />} />
          <Route path="/Teams" element={<Teams />} />
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
