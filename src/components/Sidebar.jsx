import React from "react";
import Peerless from "../assets/Svg/peerless.svg";
import Info from "../assets/Svg/info-circle.svg";
import Logout from "../assets/Svg/logout.svg";
import { SideBarLinks } from "./constants";

const SidebarItem = ({ name, isActive, src }) => (
  <div
    className={`px-6 py-3 text-sm font-medium cursor-pointer rounded-md mx-3 transition-colors duration-200 ${
      isActive ? "bg-[#A93636] text-white" : "text-white hover:bg-gray-800"
    }`}
  >
    <div className="flex items-center gap-[25px]">
      <img src={src} alt={name} />
      <p className="text-[14px]">{name}</p>
    </div>
  </div>
);

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-65 bg-black z-40">
      <aside className="w-64 bg-black text-white flex flex-col justify-between h-full">
        <div className="flex flex-col">
          <img className="flex pb-10" src={Peerless} alt="Logo" />
          {SideBarLinks.map((item, idx) => (
            <SidebarItem
              key={item.text}
              src={item.src}
              name={item.text}
              isActive={idx === 0}
            />
          ))}
        </div>

        <div className="p-4 text-sm border-t border-gray-800">
          <div className="flex items-center gap-2 cursor-pointer mb-2">
            <img src={Info} alt="info" /> IBM
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={Logout} alt="logout" /> Log Out
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
