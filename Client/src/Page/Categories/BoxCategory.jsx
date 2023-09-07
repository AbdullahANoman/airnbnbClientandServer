import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { findCategory } from "../../api/roomApi";

const BoxCategory = ({ label, icon: Icon, rooms, setRooms, setLoading }) => {

  const handleCategory = (type) => {
    setLoading(true);
    findCategory(type)
      .then((data) => {
        setRooms(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  };



  return (
    <div
      onClick={() => handleCategory(label)}
      className={`flex mb-3 flex-col ${
        rooms[0]?.category === label &&
        "border-black border-b-2 w-16 text-black font-extrabold"
      }  items-center justify-center hover:text-neutral-800 text-neutral-500 gap-2`}
    >
      <Icon
        size={26}
        className={`${rooms[0]?.category == label && "text-black"}`}
      ></Icon>
      <p
        className={`text-sm  ${
          rooms[0]?.category == label && "text-black"
        } font-bold`}
      >
        {label}
      </p>
    </div>
  );
};

export default BoxCategory;
