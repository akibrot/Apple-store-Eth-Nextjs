import Link from "next/link"
import { useSelector } from "react-redux"
import Cartitems from "../components/Cartitems"
import React from 'react'

function Cart() {
  const state = useSelector((state) => state.cart)

  return (
    <div className="bg-[#e7ecee] w-screen relative pt-16 flex flex-col px-[10rem] ">
      <h1 className="text-4xl mt-10 opacity-90 font-bold">Review your bag.</h1>
      <h1 className="pl-1 pt-4 mb-8">Free delivery and free returns. </h1>
      <div className={state.length == 0 ? "block" : "hidden"}>
        <div className=" mt-3 bg-gradient-to-r from-pink-600 to-pink-500 w-fit  rounded flex items-center justify-center" >
          <Link href={"/"}>
            <h1 className="p-3 text-white text-xl font-bold cursor-pointer">Continue Shopping</h1>

          </Link>
        </div>
      </div>
      <div >
        {
          state.map((data) => {
            return <Cartitems key={data.id} data={data} />
          })
        }

      </div>
      <div className=" flex flex-col justify-between  pl-28 border-b-[1px] border-gray-300 mt-3">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>$3,497.00</p>
        </div>
        <div className="flex justify-between border-b-[1px] border-gray-300 pb-5">
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between font-bold text-2xl mt-4">
          <p>Total</p>
          <p>$595959</p>
        </div>
        <div className="flex justify-start font-bold text-xl mt-8 font-roboto pb-10">
          <p>How would you like to check out?</p>
          
        </div>
        <div className="flex gap-8 font-bold  mt-4 items-center justify-center pb-5">
          <div className="bg-[#e5e7eb] w-2/6 h-2/5 flex flex-wrap gap-1">
            <div className="box w-32 h-32 bg-white flex items-center justify-center border-red-800 border-2 cursor-pointer">telebirr</div>
            <div className="box w-32 h-32 bg-white flex items-center justify-center cursor-pointer">Cbe-birr</div>
            <div className="box w-32 h-32 bg-white flex items-center justify-center cursor-pointer">Yene-pay</div>
            <div className="box w-32 h-32 bg-white flex items-center justify-center cursor-pointer">amole</div>
            
          </div>
          <div className="bg-[#e5e7eb] w-2/6 gap-8 flex flex-col">
            <p className="text-xl" >Full price $1234</p>
            <div className="w-full text-white text-xl
             h-12 bg-gradient-to-r from-pink-300 to-pink-500 flex items-center justify-center cursor-pointer"><Link href={"/checkout"}><p>check out</p></Link></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart