import React, { useEffect } from "react";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import {getToken, onMessage} from "firebase/messaging"
import {messaging} from "../../firebase"
import { editUser, firebaseToken } from "../../state/user";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";



const AllowNotifications = () => {
  const dispatch = useDispatch();

  const activateNotifications = () => {
    getToken(messaging,{vapidKey:"BI6BCOqKrdnUw9AGExq8oNkusRdhwfNzgutkTIocRXCstzaxwCZ5JZyTrEysvGbQb78ezfpASgRBk3jslP6maw0"})
    .then((token)=>{
      if(token) {
        dispatch(firebaseToken({registrationToken: token}))
        console.log(token)
      }
    })
  } 

  useEffect(()=>{
    onMessage(messaging, message=>{
      console.log("tu mensaje", message)
      toast(message.notification.title)
    })
  },[])

  const { t } = useTranslation(["edit_profile"]);

  return (
    <>
      <ToastContainer/>
      <div class="flex items-center dark:border-gray-700 mb-4">
        <input onClick={activateNotifications}
          id="bordered-checkbox-1"
          type="checkbox"
          value=""
          name="bordered-checkbox"
          class="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="bordered-checkbox-1"
          class="py-4 ml-2 w-full text-sm font-medium text-white dark:text-gray-300"
        >
          {t("notif_checkbox")}
        </label>
      </div>
    </>
  );
};

export default AllowNotifications;
