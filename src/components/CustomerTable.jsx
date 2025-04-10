import React, { useState } from "react";
import { Button, TextField, Chip, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Arrow from "../assets/Svg/arrow-downBlack.svg";
import Refresh from "../assets/Svg/refresh-2.svg";
import Download from "../assets/Svg/document-download.svg";
import Check from "../assets/Svg/check.svg";
import Pause from "../assets/Svg/pause.svg";
import Menu from "../assets/Svg/menu.svg";
import Filter from "../assets/Svg/filter-edit.svg";
import { Tabledata } from "./constants";





export default function CustomerTable() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredData = searchTerm
      ? Tabledata.filter(
          (item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.alias.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : Tabledata;


      const handleDownload = () => {
        const headers = [
          "Customer Name/ID",
          "Customer Category",
          "Principal",
          "User Alias",
          "Status",
          "Last Updated"
        ];
        const rows = Tabledata.map((item) => [
          `${item.name} / ${item.id}`,
          item.category,
          item.principal,
          `${item.alias} / ${item.secondary}`,
          item.status,
          item.date
        ]);

        const csvContent =
          "data:text/csv;charset=utf-8," +
          [headers, ...rows].map((e) => e.join(",")).join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "customer_table.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };


  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <button
            variant="outlined"
            className="border flex gap-2 rounded-lg p-2 border-[#D2D2D2] text-[#1c1c1c] bg-[#faf8f7]"
          >
            Table Search Query <img src={Arrow} alt="Arrow" />
          </button>
          <input
            className="border rounded-lg pl-5"
            placeholder="Search Parameter"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <button
            variant="outlined"
            className="border flex gap-2 rounded-lg p-2 border-[#A9363612] text-[#A93636] bg-[#f9f1f1]"
          >
            <img src={Refresh} alt="Arrow" /> Refresh Table
          </button>
          <button
            onClick={handleDownload}
            variant="outlined"
            className="border flex gap-2 rounded-lg p-2 border-[#A9363612] text-[#A93636] bg-[#f9f1f1]"
          >
            <img src={Download} alt="Arrow" /> Download Table
          </button>
        </div>
      </div>

      <div className="overflow-auto rounded-xl border">
        <table className="min-w-full text-sm">
          <thead className="bg-white text-left">
            <tr>
              <th className="p-3 text-sm font-medium">Customer Name/ID</th>
              <th className="p-3 text-sm font-medium flex gap-2 items-center">
                Customer Category <img src={Filter} alt="Menu" />
              </th>
              <th className="p-3 text-sm font-medium">Principal</th>
              <th className="p-3">
                <div className="flex gap-2 items-center">
                  User Alias <img src={Filter} alt="Menu" />
                </div>
              </th>
              <th className="p-3 text-sm font-medium">
                <div className="flex gap-2 items-center">
                  Status <img src={Filter} alt="Menu" />
                </div>
              </th>
              <th className="p-3 text-sm font-medium">
                <div className="flex gap-2 items-center">
                  Last Updated <img src={Filter} alt="Menu" />
                </div>
              </th>
              <th className="p-3 text-sm font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr
                key={index}
                className={`border-t ${
                  index % 2 === 0 ? "bg-[#faf8f7]" : "bg-white"
                }`}
              >
                <td className="p-3">
                  <div>{item.name}</div>
                  <div className="text-xs text-gray-500">{item.id}</div>
                </td>
                <td className="p-3">{item.category}</td>
                <td className="p-3">{item.principal}</td>
                <td className="p-3">
                  <div>{item.alias}</div>
                  <div className="text-xs text-gray-500">{item.secondary}</div>
                </td>
                <td className="p-3">
                  <div
                    className={`flex items-center p-3 rounded-[30px] w-fit gap-2 ${
                      item.status === "Active"
                        ? "bg-[#f4eae9] border-[#A93636]"
                        : "bg-[#e8e8e8] border-[#494949]"
                    }`}
                  >
                    <img
                      src={item.status === "Active" ? Check : Pause}
                      alt={item.status}
                      className="w-4 h-4"
                    />
                    {item.status}
                  </div>
                </td>
                <td className="p-3">{item.date}</td>
                <td className="p-3">
                  <IconButton size="small">
                    <img src={Menu} alt="Menu" />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
