import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram,faFacebook,faTwitter,} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";

export default function NavBar2() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav
      className="w-full fixed"
      style={{
        background:
          "linear-gradient(45deg, #adadad,#bab7b7, #f1f3f8, #bab7b7, #adadad)",
          zIndex:'9000000'
      }}
    >
      <div
        className="justify-between  mx-auto lg:max-w-7xl md:flex mr-3 py-2"
        style={{ paddingBottom: "1px", paddingTop: "1px" }}
      >
        <div>
          <div
            className="flex items-center justify-left md:block md:absolute md:left-2"
            style={{ marginTop: "6px" }}
          >
            <Link to="/">
              <h2
                className="font-bold text-m ml-2"
                style={{ marginTop: "1.5px" }}
              >
                PRODE.COM
              </h2>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:flex md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center space-y-8 md:flex md:space-x-6 md:space-y-0 ml-2">
              <li className="text-black text-xl hover:text-blue-600">
                {navbar ? (
                  <Link to="/">
                    <FontAwesomeIcon icon={faInstagram} /> Instagram
                  </Link>
                ) : (
                  <Link to="/">
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                )}
              </li>
              <li className="text-black text-xl hover:text-blue-600">
                {navbar ? (
                  <Link to="/">
                    <FontAwesomeIcon icon={faFacebook} /> Facebook
                  </Link>
                ) : (
                  <Link to="/">
                    <FontAwesomeIcon icon={faFacebook} />
                  </Link>
                )}
              </li>
              <li className="text-black text-xl hover:text-blue-600">
                {navbar ? (
                  <Link to="/">
                    <FontAwesomeIcon icon={faTwitter} /> Twitter
                  </Link>
                ) : (
                  <Link to="/">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                )}
              </li>
              <li>
                <DropDown navbar={navbar} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
