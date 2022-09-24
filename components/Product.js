import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addtocart } from "../Redux/cartSlice";

function Product({ data }) {
  const dispatch = useDispatch();
  const addtocarthandler = (e) => {
    console.log(e);
    dispatch(addtocart(data));
  };
  return (
    <div className="bg-[#35383c] w-[25rem] h-[30rem] rounded-xl flex flex-col">
      <div className="flex-[7] flex items-center justify-center">
        <Image src={data.image} width={340} height={270} />
      </div>
      <div className="flex-[3]  flex items-center text-white font-bold">
        <div className="flex flex-col px-8 gap-3 pb-5 text-2xl flex-[6]">
          <p>{data.name}</p>
          <p>${data.price}</p>
        </div>
        <div className="flex-[5] flex justify-center items-center  h-full ">
          <div
            className="bg-gradient-to-r from-pink-400 to-pink-700 rounded-full"
            onClick={() => addtocarthandler(data)}
          >
            <FaShoppingCart
              size={40}
              title="add to cart"
              className="m-7  cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
