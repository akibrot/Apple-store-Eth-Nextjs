import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addtocart } from "../Redux/cartSlice";

function Product({ data }) {
  const dispatch = useDispatch();
  const addtocarthandler = (e) => {
    console.log(e);
    dispatch(addtocart(data));
    //270h 340w
  };
  return (
    <div className="bg-[#35383c] sm:w-[25rem] sm:h-[30rem] w-[10rem] h-[12rem] rounded-xl flex flex-col">
      <div className="flex-[7] flex items-center justify-center">
        <div className="sm:w-[340px] w-[100px] ">
        <Image src={data.image}  layout="responsive" />

        </div>
      </div>
      <div className="flex-[3]  flex sm:items-center text-white font-bold ">
        <div className="flex flex-col pl-3 sm:px-8 gap-3 pb-5 sm:text-2xl flex-[6] text-[10px] ">
          <p>{data.name}</p>
          <p>${data.price}</p>
        </div>
        <div className="sm:flex-[5] flex-[2] pr-3 sm:pr-0 flex justify-center items-center  h-full ">
          <div
            className="bg-gradient-to-r from-pink-400 to-pink-700 rounded-full"
            onClick={() => addtocarthandler(data)}
          >
            <FaShoppingCart
              

              title="add to cart"
              className="sm:m-7 m-2 cursor-pointer sm:text-[40px] text-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
