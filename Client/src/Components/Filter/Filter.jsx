import React, { useEffect, useState } from "react";
import { FaSliders } from "react-icons/fa6";
import FilterModal from "./FilterModal";
import { getRooms } from "../../api/roomApi";
const Filter = ({ rooms, setRooms }) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalHandler = (data) => {
    closeModal();
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const fetchRooms = () => {
    getRooms().then((data) => setRooms(data));
  };

  const checkFilterData = (check) => {
    const filteredRooms = rooms.filter(
      (room) =>
        (check.propertyType.length === 0 ||
          check.propertyType.includes(room.propertyType)) &&
        (check.type === "Any type" || check.type === room.type) &&
        room.price >= check.priceRange[0] &&
        room.price <= check.priceRange[1] &&
        (check.bedrooms.length === 0 ||
          check.bedrooms.includes(room.bedrooms)) &&
        (check.beds.length === 0 || check.beds.includes(room.beds)) &&
        (check.bathrooms.length === 0 ||
          check.bathrooms.includes(room.bathrooms))
    );

    setIsOpen(false);
    setRooms(filteredRooms);
  };
  return (
    <div onClick={() => fetchRooms()}>
      <div
        onClick={() => setIsOpen(true)}
        className=" text-sm border border-gray-400 rounded-xl py-3 px-2  cursor-pointer mb-3 hover:border-black"
      >
        <div
          className="flex items-center gap-1 text-gray-600 hover:text-black "
          style={{ fontWeight: "500" }}
        >
          <FaSliders></FaSliders>
          Filter
        </div>
      </div>
      <FilterModal
        modalHandler={modalHandler}
        closeModal={closeModal}
        isOpen={isOpen}
        rooms={rooms}
        checkFilterData={checkFilterData}
      />
    </div>
  );
};

export default Filter;
