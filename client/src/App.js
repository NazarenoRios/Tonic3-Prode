import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cookies from 'js-cookie';


import Homepage from "./pages/Homepage";
import { getUser } from "./state/user";
import Modal from "./common/Modal";

function App() {

  const dispatch = useDispatch();
  
  const user = useSelector((state) => state.user);
  // const [user,setUser] = useState({})

  useEffect(() => {
    dispatch(getUser())
  }, [user.id]);

  console.log(Cookies.get("token"))

  return (
    <>
      {Cookies.get("token") !== undefined ? (
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      ) : (
        <Modal/>
      )}
    </>
  );
}

export default App;
