import React, { useState } from "react";

const SearchDestination = ({
  stay,
  setHidden,
  hidden,
  setTitle,
  checkInDate,
  setCheckInDate,
  checkOutDate,
  setCheckOutDate,
}) => {
  const [activeSearch, setActiveSearchText] = useState(false);
  const [toggle, setToggle] = useState("");

  const { title, placeholder, addTitle, icon: Icon, searchText } = stay || {};

  const handleToggle = (check) => {
    setToggle(!toggle);
    setHidden(hidden);
    setTitle(check);
  };

  console.log(checkInDate, checkOutDate);
  return (
    <div
      onClick={() => handleToggle(title)}
      className={`hover:bg-[#EBEBEB]  px-4 py-2 ${
        toggle && "bg-[#EBEBEB]"
      } rounded-3xl `}
    >
      <div
        onClick={() => setActiveSearchText(true)}
        className="flex  gap-10 items-center  "
      >
        <div>
          <p className="text-[13px] font-bold">{title}</p>
          {placeholder ? (
            <input className="font-thin" placeholder={placeholder} />
          ) : (
            ""
          )}

          {addTitle ? (
            <p className="text-gray-500 font-thin ">{addTitle}</p>
          ) : (
            ""
          )}
        </div>
        {Icon ? (
          <div className=" bg-rose-500 rounded-full px-2 py-1 text-white flex  justify-between ">
            <div>
              <Icon size={26} />
            </div>
            <div>{activeSearch ? <p>{searchText}</p> : ""}</div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SearchDestination;
