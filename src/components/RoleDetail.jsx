import { useParams, useNavigate } from "react-router-dom";
import Category from "../assets/Svg/category.svg";
import Profile from "../assets/Svg/profile-2user1.svg";
import CustomerTable from "./CustomerTable";
import { useState } from "react";
import Arrow from "../assets/Svg/arrow-down-red.svg";
import ArrowWhite from "../assets/Svg/arrow-downhite.svg";
import Circle from "../assets/Svg/add-circle.svg";

const RoleDetail = () => {
  const { companyId } = useParams();

  const [allRecords, setAllRecords] = useState(true);
  const [requests, setRequests] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-semibold capitalize cursor-pointer">
            {companyId.replace("-", " ")}
          </h2>
          <div className="text-gray-600 flex">
            <span
              className="flex cursor-pointer"
              onClick={() => navigate("/dashboard/nintendo")}
            >
              <img src={Category} alt="Dashboard" /> &nbsp; <p>Dashboard </p>{" "}
            </span>
            &nbsp; &#62; <img src={Profile} alt={companyId} />
            <p className="capitalize">{companyId}</p>
          </div>
        </div>
        <button
          variant="outlined"
          className="border bg-[#A93636] flex gap-2 rounded-lg py-1.5 px-3 border-red-600 text-white hover:bg-green-300"
        >
          <img src={Circle} alt="Circle" /> New Request
          <img src={ArrowWhite} alt="Arrow" />
        </button>
      </div>
      <div className="flex bg-white p-6 justify-between items-center mb-1">
        <div className="flex gap-10">
          <div className="flex bg-[#f6f6f6] rounded-lg px-1.5 items-center gap-2">
            <p
              className={`px-3 cursor-pointer py-2 rounded-lg ${
                allRecords ? "bg-white text-[#A93636]" : "text-[#606060]"
              }`}
              onClick={() => {
                setAllRecords(true);
                setRequests(false);
              }}
            >
              All Records
            </p>
            <p
              className={`px-3 cursor-pointer py-2 rounded-lg ${
                requests ? "bg-white text-[#A93636]" : "text-[#606060]"
              }`}
              onClick={() => {
                setRequests(true);
                setAllRecords(false);
              }}
            >
              Request
            </p>
          </div>
          <div className="flex border-l border-[#E8E8E8] px-8 flex-col">
            <p className="font-medium text-sx">All</p>
            <p className="flex mx-auto font-semibold text-[28px]">100</p>
          </div>
          <div className="flex border-l border-[#E8E8E8] px-8 flex-col">
            <p className="font-medium text-sx text-[#A93636]">Active</p>
            <p className="flex mx-auto font-semibold text-[28px]">90</p>
          </div>
          <div className="flex border-l border-[#E8E8E8] px-8 flex-col">
            <p className="font-medium text-sx">Liquidated</p>
            <p className="flex mx-auto font-semibold text-[28px]">143</p>
          </div>
        </div>

        <button
          variant="outlined"
          className="border flex gap-2 rounded-md py-1.5 px-3 border-red-600 text-red-600 hover:bg-red-50"
        >
          Created by System-wide
          <img src={Arrow} alt="Arrow" />
        </button>
      </div>
      <CustomerTable />
    </div>
  );
};

export default RoleDetail;
