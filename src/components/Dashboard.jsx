import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom"; // ✅ import useLocation
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import DashboardContent from "./DashboardContent";
import { roleData } from "./constants";

const Dashboard = () => {
  const location = useLocation(); // ✅ hook to get current route
  const isHomeRoute = location.pathname === "/"; // ✅ condition for greeting

  const [branchOpen, setBranchOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState("Ikoyi Branch");

  const [profileOpen, setProfileOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState("Eric Alawoya");

  const getFormattedDate = () => {
    const now = new Date();
    const options = {
      weekday: "short",
      month: "short",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    };
    return new Intl.DateTimeFormat("en-US", options).format(now);
  };

  const currentDate = getFormattedDate();

  return (
    <div className="h-screen flex overflow-hidden font-sans">
      <Sidebar />

      <div className="ml-64 w-[calc(100%-16rem)] bg-[#F9F9F9] h-screen overflow-y-auto">
        <div className="sticky top-0 z-10 bg-[#F9F9F9]">
          <TopBar
            currentDate={currentDate}
            selectedBranch={selectedBranch}
            setSelectedBranch={setSelectedBranch}
            branchOpen={branchOpen}
            setBranchOpen={setBranchOpen}
            selectedProfile={selectedProfile}
            setSelectedProfile={setSelectedProfile}
            profileOpen={profileOpen}
            setProfileOpen={setProfileOpen}
          />
        </div>

        {/*Only show greeting on the dashboard home route */}
        {isHomeRoute && (
          <section className="px-6 py-6 border-b border-gray-100">
            <h1 className="text-3xl font-semibold">Hello Eric Omotolani</h1>
            <p className="text-sm text-gray-500">Welcome to your dashboard</p>
          </section>
        )}

        {/* Nested route content here */}
        <div className="h-[calc(100%-10rem)] overflow-y-auto px-6 py-6 scrollbar-hidden">
          {isHomeRoute ? <DashboardContent roleData={roleData} /> : <Outlet />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
