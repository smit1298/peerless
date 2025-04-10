import React from "react";
import TextField from "@mui/material/TextField";
import Search from "../assets/Svg/search-normal.svg";
import Notification from "../assets/Svg/notification.svg";
import Arrow from "../assets/Svg/arrow-down.svg";
import User from "../assets/Svg/user-square.svg";
import Building from "../assets/Svg/building.svg";

const TopBar = ({
  currentDate,
  selectedBranch,
  setSelectedBranch,
  branchOpen,
  setBranchOpen,
  selectedProfile,
  setSelectedProfile,
  profileOpen,
  setProfileOpen
}) => {
  const handleBranchSelect = (branch) => {
    setSelectedBranch(branch);
    setBranchOpen(false);
  };

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile);
    setProfileOpen(false);
  };

  return (
    <header className="p-6 border-b border-gray-200 bg-white flex items-center justify-between">
      <div className="relative w-96">
        <img className="absolute top-2 left-3 z-10" src={Search} alt="Search" />
        <TextField
          placeholder="Search Parameter & Params"
          variant="outlined"
          size="small"
          fullWidth
          InputProps={{ style: { paddingLeft: 32 } }}
        />
      </div>

      <div className="flex items-center gap-6 text-sm text-gray-600">
        <div>
          {currentDate} | <strong>Business Date:</strong> {currentDate}
        </div>
        <div className="relative bg-[#F4F4F4] rounded-full p-2 flex">
          <img src={Notification} alt="notification" />
          <span className="absolute bg-[#F00404] w-1.5 h-1.5 top-2.5 right-3 rounded-full"></span>
        </div>

        <Dropdown
          icon={Building}
          label={selectedBranch}
          isOpen={branchOpen}
          toggle={() => {
            setBranchOpen(!branchOpen);
            setProfileOpen(false);
          }}
          options={["Ikoyi Branch", "Lekki Branch", "Victoria Island"]}
          onSelect={handleBranchSelect}
        />

        <Dropdown
          icon={User}
          label={selectedProfile}
          isOpen={profileOpen}
          toggle={() => {
            setProfileOpen(!profileOpen);
            setBranchOpen(false);
          }}
          options={["Profile", "Settings", "Logout"]}
          onSelect={handleProfileSelect}
        />
      </div>
    </header>
  );
};

const Dropdown = ({ icon, label, isOpen, toggle, options, onSelect }) => (
  <div
    className="relative bg-[#F4F4F4] p-2 rounded-2xl cursor-pointer"
    onClick={toggle}
  >
    <div className="flex items-center gap-1">
      <img src={icon} alt="icon" /> <span>{label}</span>
      <span className="text-xs">
        {isOpen ? "▲" : <img src={Arrow} alt="arrow" />}
      </span>
    </div>
    {isOpen && (
      <div className="absolute right-0 top-10 mt-1 bg-white border border-gray-200 shadow-md rounded-md w-48 z-50">
        {options.map((option) => (
          <div
            key={option}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => onSelect(option)}
          >
            {option}
          </div>
        ))}
      </div>
    )}
  </div>
);

export default TopBar;
