import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import React from "react";

// icons
import { FcServices } from "react-icons/fc";
import { PiMonitorFill } from "react-icons/pi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdOutlinePayments } from "react-icons/md";
import { VscInspect } from "react-icons/vsc";
import { LuWrench } from "react-icons/lu";
import { GrInstallOption } from "react-icons/gr";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const tellerList = [
  {
    id: 1,
    name: "Pay Bills",
    icon: <MdOutlinePayments />,
  },
  {
    id: 2,
    name: "Consultation",
    icon: <VscInspect />,
  },
  {
    id: 3,
    name: "Repair",
    icon: <LuWrench />,
  },
  {
    id: 4,
    name: "Installation",
    icon: <GrInstallOption />,
  },
];

const Header = () => {
  const [teller, setTeller] = useState(null);
  const navigate = useNavigate();

  const [dropDown, setDropDown] = useState(false);
  const [activeTeller, setActiveTeller] = useState(null);

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  const handleActiveTeller = (id) => {
    setActiveTeller(id);
    setTeller(id);
    setDropDown(!dropDown);
  };

  useEffect(() => {
    if (teller) {
      navigate(`/teller-${teller}`);
    }
  }, [teller]);
  return (
    <div className="z-50 fixed flex flex-col w-fit lg:w-[250px] h-screen gap-1 p-4 shadow bg-white">
      <div className="hidden lg:block">
        <h1 className="text-center text-3xl font-semibold py-3">
          QUEUE SYSTEM
        </h1>
        <hr className="text-slate-300" />
      </div>
      <NavLink to="/">
        <div className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-lg">
          <FcServices />
          <p className="hidden lg:block">Service</p>
        </div>
      </NavLink>
      <NavLink to="/monitor">
        <div className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-lg">
          <PiMonitorFill /> <p className="hidden lg:block">Monitor</p>
        </div>
      </NavLink>

      {/* Dropdown Button */}
      <div className="relative">
        <div
          onClick={handleDropDown}
          className={`flex items-center justify-between gap-2 p-2 ${
            dropDown ? "bg-slate-100" : "bg-transparent"
          } hover:bg-gray-200 rounded-lg`}
        >
          <div className="flex items-center gap-2">
            <BsFillPersonLinesFill /> <p className="hidden lg:block">Tellers</p>
          </div>
          <MdOutlineKeyboardArrowRight
            className={`hidden lg:block${
              dropDown ? "transform rotate-90 duration-100" : "text-slate-600"
            }`}
          />
        </div>
        {/* Dropdown Options */}
        {dropDown && (
          <div className="absolute z-[9999] top-10 lg:ml-6 bg-white shadow p-3">
            {tellerList.map((teller) => (
              <div key={teller.id}>
                <NavLink to={`/teller-${teller.id}`}>
                  <button
                    onClick={() => handleActiveTeller(teller.id)}
                    className={`flex w-full gap-2 items-center p-2 ${
                      activeTeller === teller.id
                        ? "bg-slate-200"
                        : "bg-transparent"
                    } hover:bg-slate-200 rounded-lg`}
                  >
                    {teller.icon}
                    {teller.name}
                  </button>
                </NavLink>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
