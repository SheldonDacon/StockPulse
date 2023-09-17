import React from "react";
import Card from "./Card";

const Details = ({ details }) => {

  const  fieldsToDisplay = {
    "related": "Name",
    "headline": "Headline",
    "source": "source",
    "url": "link"
  };

  const headlineTextStyle = {
    marginLeft: "10px", // Adjust this value to move the text further to the left
  };



  const dataToShow = details.slice(0, 3);

  return (
    <div>
      <h1>Company Details</h1>
      {dataToShow.map((item, index) => (
        <Card key={index}>
          <ul className="w-full h-full flex flex-col justify-between divide-y-1">
            <li className="flex-1 flex justify-between items-center">
              <span>Company Name:</span>
              <span className="font-bold">{item.related}</span>
            </li>
            <li className="flex-1 flex justify-between items-center">
              <span>Headline:</span>
              <span className="font-bold mt-2" style={headlineTextStyle}>
                {item.headline}
              </span>
            </li>
            <li className="flex-1 flex justify-between items-center">
              <span>Source:</span>
              <span className="font-bold">{item.source}</span>
            </li>
          </ul>
        </Card>
      ))}
    </div>
  );
};

export default Details;

