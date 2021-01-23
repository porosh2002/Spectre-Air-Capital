import React from "react";
import { MdAirplanemodeActive } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
export default function Exp() {
  return (
    <div className="EXP">
      <div className="ExpCards">
        <div className="ExpCard">
          <div >
            <MdAirplanemodeActive />
            <p className="ExpTitle">Aircraft</p>
          </div>
          <div className='ExpNum'> 310 +</div>
        </div>
        <div className="ExpCard">
          <div >
            <FaUserFriends />
            <p className="ExpTitle">Customers</p>
          </div>
          <div className='ExpNum'>105 + </div>
        </div>
        <div className="ExpCard">
          <div >
            <GiWorld />
            <p className="ExpTitle">Countries</p>
          </div>
          <div className='ExpNum'>10 + </div>
        </div>
      </div>
    </div>
  );
}
