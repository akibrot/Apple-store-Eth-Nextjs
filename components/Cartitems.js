import Image from "next/image";
import Link from "next/link";
import { FaArrowDown, FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import mac5 from "../public/images/13.webp";
import { removefromcart } from "../Redux/cartSlice";

function Cartitems({ data }) {
  const dispatch = useDispatch();
  const handledelete = () => {
    dispatch(removefromcart(data));
  };
  return (
    <div className=" border-b-[1px] border-gray-300 w-full h-[12rem] flex items-center">
      <div className="pl-10 flex-[2] flex justify-center  ">
        <Image src={data.image} width={150} height={138} alt=""/>
      </div>
      <div className="pl-16 h-[70%] flex-[4] ">
        <p className="text-xl font-bold">{data.name}</p>

        <span className="flex items-center">
          <p className="text-[#7eabf2] cursor-pointer">Show product details </p>{" "}
          <FaArrowDown className="text-[#7eabf2] pl-[2px]" />
        </span>
      </div>
      <div className=" flex  font-bold justify-start gap-6 pl-16 h-[70%] flex-[1]">
        <select name="" id="">
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </select>
      </div>
      <div className="pl-[30%] h-[70%] flex-[3]">
        <p className="text-xl font-bold">${data.price}</p>

        <span className="flex items-center  ">
          <button onClick={handledelete}>
          <p className="text-[#7eabf2] cursor-pointer" >remove</p>{" "}

          </button>
          <FaTrash className="text-red pl-[5px]" />
        </span>
      </div>
    </div>
  );
}

export default Cartitems;
