import React, { useEffect, useState } from "react";
import { getRooms } from "../../api/roomApi";
import Container from "../../Shared/Container/Container";
import RoomCard from "./RoomCard";
import RingLoader from "react-spinners/RingLoader";
import CheckRoomCard from "./CheckRoomCard";

const Room = ({ setIsOpen, isOpen, rooms, setRooms, loading, setLoading }) => {
  useEffect(() => {
    setLoading(true);
    getRooms()
      .then((data) => {
        setRooms(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  }, []);



  return (
    <Container>
      {loading ? (
        <div
          className="
        h-[70vh]
        flex 
        flex-col 
        justify-center 
        items-center 
      "
        >
          <RingLoader size={100} color="red" />
        </div>
      ) : rooms?.length == 0 ? (
        <p className="text-center py-10 font-bold ">
          No Room Available <br /> Please try another category to find your room
        </p>
      ) : (
        <div
          onClick={() => setIsOpen(false)}
          className="pt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 z-0"
        >
          {rooms.map((room, index) => (
            <RoomCard
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              room={room}
              key={index}
            ></RoomCard>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Room;
