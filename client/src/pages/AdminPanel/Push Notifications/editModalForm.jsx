import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInput } from "../../../hooks/useInput";
import { DateTimePicker } from "@material-ui/pickers";
import { editNotification, getNotifications, getUsers } from "./NotificationsFunctions.ts";

const EditModalForm = ({ row, setNotifications , setShowModal }) => {

  const title = useInput("title");
  const info = useInput("logo");
  const userSelected = useInput("userSelected")

  const [users,setUsers] = useState([])
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleEdit = async (award) => {
    const editT = await editNotification(award)
    const closeModal = await setShowModal(false)
    const getall = await getNotifications().then((data) => setNotifications(data));
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    handleEdit({title: title.value,info: info.value, selectedDate, userSelected: userSelected.value, notification: row})
  };

  useEffect(() => {
    getUsers().then((data) => setUsers(data))
  },[])


  const { t } = useTranslation(["admin-panel"]);

  return (
    <div className="relative p-6 flex-auto">
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            {...title}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="size"
          >
            Info
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            type="text"
            {...info}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="size"
          >
            User/s
          </label>
          <select
           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
           id="winner"
           {...userSelected}
          >
            <option selected value="">All users</option>
            {users?.map((user,i) => 
              <option key={i} value={user.id}>{user.name}</option>
            )}
          </select>
        </div>

        <div className="mb-4">
          <h2 className="text-center mb-5 font-bold underline text-emerald-500 mt-12">
          {t("SelectADate")}
          </h2>

          <div className="text-center">
            <DateTimePicker value={selectedDate} onChange={setSelectedDate} />
          </div>
        </div>



        <button
          onSubmit={onSubmit}
          className="mt-6 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        >
          {t("SaveChanges")}
        </button>
      </form>
    </div>
  );
};

export default EditModalForm;
