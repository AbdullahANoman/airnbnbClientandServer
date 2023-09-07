import React, { useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Room from "./Room/Room";
import Categories from "./Categories/Categories";
import Filter from "../Components/Filter/Filter";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [rooms, setRooms] = useState([]);
  return (
    <div>
      <Navbar
        setRooms={setRooms}
        className="relative"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      ></Navbar>
      <div className="flex justify-center gap-10 items-center ">
        <Categories
          setLoading={setLoading}
          setIsOpen={setIsOpen}
          rooms={rooms}
          setRooms={setRooms}
        ></Categories>
        <Filter rooms={rooms} setRooms={setRooms} />
      </div>
      <Room
        setLoading={setLoading}
        loading={loading}
        className="relative"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        rooms={rooms}
        setRooms={setRooms}
      />
      {/* <Rooms></Rooms> */}
    </div>
  );
};

export default Home;
