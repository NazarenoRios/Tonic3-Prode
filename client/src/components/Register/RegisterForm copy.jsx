import React, { useEffect } from "react";
import { useState } from "react";
import Modal from "../../common/Modal";
import Cookies from "js-cookie";

import { FormBackground } from "./StyledComponents";
import BackgroundVideo from "../../assets/videos/FormBackground.mp4"


function RegisterForm() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setName(sessionStorage.getItem("name"));
    setLastname(sessionStorage.getItem("lastname"));
    setEmail(sessionStorage.getItem("email"));
    setPassword(sessionStorage.getItem("password"));
  }, []);

  return (
    <>
      {email ? (
        <div className="flex h-screen">
          <FormBackground autoPlay muted alt="" src={BackgroundVideo} />
          <div className="m-auto">
            <form className="w-full max-w-lg">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="relative uppercase tracking-wide text-white text-xs font-bold mb-2"
                  >
                    First Name
                  </label>
                  <input
                    className="appearance-none relative w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:opacity-90 focus:border-2 "
                    id="grid-first-name"
                    type="text"
                    placeholder={name}
                    disabled
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="relative uppercase tracking-wide text-white text-xs font-bold mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    className="appearance-none relative w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:opacity-90 focus:border-2"
                    id="grid-last-name"
                    type="text"
                    placeholder={lastname}
                    disabled
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="relative uppercase tracking-wide text-white text-xs font-bold mb-2"
                  >
                    Password
                  </label>
                  <input
                    className="appearance-none relative w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:opacity-90 focus:border-2"
                    id="grid-password"
                    type="password"
                    placeholder="******************"
                    disabled
                  />
                  <p className="text-gray-600 text-xs italic">
                    Make it as long and as crazy as you'd like
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="relative uppercase tracking-wide text-white text-xs font-bold mb-2"
                  >
                    City
                  </label>
                  <input
                    className="appearance-none relative w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:opacity-90 focus:border-2"
                    id="grid-city"
                    type="text"
                    placeholder="Albuquerque"
                  />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="relative uppercase tracking-wide text-white text-xs font-bold mb-2"
                  >
                    State
                  </label>
                  <div className="relative">
                    <select
                      className="relative appearance-none w-full bg-transparent border border-gray-200 text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:opacity-90 focus:border-2"
                      id="grid-state"
                    >
                      <option>New Mexico</option>
                      <option>Missouri</option>
                      <option>Texas</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="relative uppercase tracking-wide text-white text-xs font-bold mb-2"
                  >
                    Zip
                  </label>
                  <input
                    className="appearance-none relative w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:opacity-90 focus:border-2"
                    id="grid-zip"
                    type="text"
                    placeholder="90210"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <Modal />
      )}
    </>
  );
}

export default RegisterForm;
