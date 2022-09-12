import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropDown({ navbar }) {
  const handleLogout = async () => {
    try {
      const logout = await axios.post("/api/user/logout");
      const clear = await sessionStorage.clear();
      const reload = await window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        {navbar ? (
          <Menu.Button className="inline-flex w-full justify-center px-0 py-2 text-xl font-medium text-black text-xl">
            <FontAwesomeIcon size="xm" icon={faUserAstronaut} />{" "}
            <span style={{ paddingLeft: "8px" }}> Profile</span>
          </Menu.Button>
        ) : (
          <Menu.Button className="inline-flex w-full justify-center px-0 py-2 text-m font-medium text-blue">
            <FontAwesomeIcon size="xl" icon={faUserAstronaut} />
          </Menu.Button>
        )}
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        style={{
          zIndex: "50000",
          background:
            "linear-gradient(45deg, #adadad,#bab7b7, #f1f3f8, #bab7b7, #adadad)",
        }}
      >
        <Menu.Items
          className={
            navbar
              ? "absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              : "absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          }
        >
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/profile"
                  className={classNames(
                    active ? "bg-gray-100 text-black" : "text-black",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Account settings
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/"
                  onClick={handleLogout}
                  className={classNames(
                    active ? "bg-gray-100 text-black" : "text-black",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Logout
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
