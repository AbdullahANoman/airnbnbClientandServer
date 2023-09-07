// import HeartButton from "../Button/HeartButton";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import { Link } from "react-router-dom";

const CheckRoomCard = ({ room, setIsOpen }) => {
  const {
    _id,
    image,
    location,
    availableCheckInDate,
    availableCheckInMonth,
    image1,
    image2,
    price,
  } = room || {};
  const styles = {
    slide: {
      padding: 15,
      minHeight: 100,
      color: "#fff",
    },
    slide1: {
      background: "#FEA900",
    },
    slide2: {
      background: "#B3DC4A",
    },
    slide3: {
      background: "#6AC0FF",
    },
  };
  return (
    // to={`/rooms/${_id}`}
    <Link>
      <div
        onClick={() => setIsOpen(false)}
        className="col-span-1 cursor-pointer group "
      >
        <div className="flex flex-col gap-2 w-full ">
          <div
            className="
           
          "
          >
            <SwipeableViews>
              <div style={Object.assign({}, styles.slide, styles.slide1)}>
                slide n°1
              </div>
              <div style={Object.assign({}, styles.slide, styles.slide2)}>
                slide n°2
              </div>
              <div style={Object.assign({}, styles.slide, styles.slide3)}>
                slide n°3
              </div>
            </SwipeableViews>
          </div>
          <div className="font-semibold text-lg">{location}</div>
          <div className="font-light text-neutral-500">
            {availableCheckInDate && [availableCheckInDate?.length - 1]} nights
            . {availableCheckInMonth && availableCheckInMonth}{" "}
            {availableCheckInDate && availableCheckInDate[0]} -{" "}
            {availableCheckInDate &&
              availableCheckInDate[availableCheckInDate?.length - 1]}
          </div>
          <div className="flex flex-row items-center gap-1">
            <div className="font-semibold">$ {price}</div>
            <div className="font-light">night</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CheckRoomCard;
