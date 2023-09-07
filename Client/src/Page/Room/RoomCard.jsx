// import HeartButton from "../Button/HeartButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";

import { EffectCreative, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const RoomCard = ({ room, setIsOpen }) => {
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

  return (
    // to={`/rooms/${_id}`}
    <Link>
      <div
        onClick={() => setIsOpen(false)}
        className="col-span-1 cursor-pointer group z-0 "
      >
        <div className="flex flex-col gap-2 w-full z-0">
          <div
            className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
          >
            <Swiper
              grabCursor={true}
              effect={"creative"}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: ["-20%", 0, -1],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              modules={[Autoplay, EffectCreative]}
              className="mySwiper3 w-full h-full"
            >
              <SwiperSlide className="w-full h-full">
                <img
                  className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
              relative
              z-0
              
            "
                  src={image}
                  alt="Room"
                />
                <div
                  className="
            absolute
            top-3
            right-3
          "
                >
                  {/* <HeartButton /> */}
                </div>
              </SwiperSlide>
              {image1 && (
                <SwiperSlide>
                  <img
                    className="
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
            
              "
                    src={image1}
                    alt="Room"
                  />
                  <div
                    className="
              absolute
              top-3
              right-3
            "
                  >
                    {/* <HeartButton /> */}
                  </div>
                </SwiperSlide>
              )}
              {image2 && (
                <SwiperSlide>
                  <img
                    className="
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              "
                    src={image2}
                    alt="Room"
                  />
                  <div
                    className="
              absolute
              top-3
              right-3
            "
                  >
                    {/* <HeartButton /> */}
                  </div>
                </SwiperSlide>
              )}
            </Swiper>
          </div>
          <div className="font-semibold text-lg">{location}</div>
          <div className="font-light text-neutral-500">
            {availableCheckInDate && [availableCheckInDate?.length - 1]} nights . {availableCheckInMonth && availableCheckInMonth}{" "}
            {availableCheckInDate && availableCheckInDate[0]} - {availableCheckInDate && availableCheckInDate[availableCheckInDate?.length - 1]}
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

export default RoomCard;
