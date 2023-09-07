import {
  GiBoatFishing,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import Container from "../../Shared/Container/Container";
import BoxCategory from "./BoxCategory";

const categories = [
  {
    label: "Beach",
    icon: TbBeach,
  },
  {
    label: "Windmills",
    icon: GiWindmill,
  },
  {
    label: "Countryside",
    icon: TbMountain,
  },
  {
    label: "Pools",
    icon: TbPool,
  },
  {
    label: "Islands",
    icon: GiIsland,
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
  }
];


const Categories = ({ rooms, setRooms, setIsOpen, setLoading }) => {
  return (
    <div
      onClick={() => setIsOpen(false)}
      className="flex flex-row justify-center  gap-20 py-5 overflow-x-auto cursor-pointer"
    >
      {categories.map((item, index) => (
        <BoxCategory
          key={index}
          setLoading={setLoading}
          icon={item?.icon}
          rooms={rooms}
          setRooms={setRooms}
          label={item?.label}
        ></BoxCategory>
      ))}
    </div>
  );
};

export default Categories;
