import React, { useEffect } from "react";
import { useState } from "react";
import Modal from "../../common/Modal";

function RegisterForm() {

  const [data,setData] = useState("")

  useEffect(() => {
    setData(sessionStorage.getItem("email"))
  }, []);

  console.log(data)

  return (
    <>
      {data ? (
        <div className="container flex flex-col justify-center content-center">
          <h1>asd</h1>
          <h1>asd</h1>
          <h1>asd</h1>
          <h1>asd</h1>
          <h1>asd</h1>
          <h1>asd</h1>
          <h1>asd</h1>
          <h1>asd</h1>
          <h1>asd</h1>
          <button>button</button>
        </div>
      ) : (
        <Modal />
      )}
    </>
  );
}

export default RegisterForm;
