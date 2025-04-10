import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";

const RoleCard = ({ title, description, image }) => {
  const navigate = useNavigate();
  const { companyId } = useParams(); // get company name from URL

  const handleClick = () => {
    const roleSlug = title.toLowerCase().replace(/\s+/g, "-");
    navigate(`/dashboard/${companyId}/role/${roleSlug}`);
  };
  return (
    <Card
      onClick={handleClick}
      variant="outlined"
      className={`rounded-xl border shadow-sm transition-all cursor-pointer duration-200 hover:shadow-md hover:bg-[#F9E9E9] hover:border-[#A93636]`}
    >
      <CardContent className="p-4 space-y-2">
        <img
          className="bg-[#e8e8e8] w-fit p-2 rounded-full"
          src={image}
          alt={title}
        />
        <h6 className="font-semibold text-xl">{title}</h6>
        <Typography
          variant="body2"
          color="textSecondary"
          className="line-clamp-2 text-[#606060]"
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const DashboardContent = ({ roleData }) => {
  if (!Array.isArray(roleData)) {
    return <p>No data available</p>;
  }
  return (
    <section className="px-6 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {roleData.map((role, idx) => (
        <RoleCard
          key={`${role}-${idx}`}
          title={role.name}
          image={role.src}
          description={role.description}
        />
      ))}
    </section>
  );
};

export default DashboardContent;
