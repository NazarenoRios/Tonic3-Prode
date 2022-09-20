import React from "react";
import axios from "axios";

import { useSelector } from "react-redux";
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from "../../contexts/ContextProvider";

import avatar from '../../assets/data/avatar.jpg';
import  UserProfile  from './UserProfile';


export default function DropDown() {
  const { handleClick, isClicked } = useStateContext();
  const user = useSelector((state)=>state.user)
  

  return (
    <div className="flex">
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-[#12c9e9] rounded-lg"
            onClick={() => handleClick('userProfile')}
          >
            <img
              className="rounded-full w-8 h-8"
              src={avatar}
              alt="user-profile"
            />
            <p>
              <span className="text-black text-14">Hi,</span>{' '}
              <span className="text-black font-bold ml-1 text-14">
                {user.name}
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-800 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.userProfile && (<UserProfile />)}
      </div>
  );
}
