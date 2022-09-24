import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { IoPersonOutline } from 'react-icons/io5'
import { useSelector } from "react-redux";

import logo from '../public/images/logo.webp'
function NavBar() {
  const state = useSelector((state)=>state.cart)
  return (
    <div className="w-screen h-16   fixed z-10 top-0 left-0 bg-[#e7ecee] pl-32 flex items-center">
      <div > <Link href={"/"}><Image src={logo} width={19} height={20} color="#e7ecee" className="cursor-pointer transition duration-200 opacity-60 hover:opacity-100" /></Link></div>
      <div className="center flex gap-7 pl-[29%] text-[15px] ">
        <ul className="opacity-60 hover:opacity-90 duration-200">
          <Link href={""}>Product</Link>
        </ul>
        <ul className="opacity-60 hover:opacity-90 duration-200">
          <Link href={""}>Explore</Link>
        </ul>
        <ul className="opacity-60 hover:opacity-90 duration-200">
          <Link href={""}>Support</Link>

        </ul>
        <ul className="opacity-60 hover:opacity-90 duration-200">
          <Link href={""}>Business</Link>

        </ul>

      </div>
      <div className="end flex gap-2 items-center pl-[22%]">
        <div className="cursor-pointer opacity-75 duration-200 hover:opacity-90"><FaSearch size={19}/></div>
        <div className="relative cursor-pointer opacity-75 duration-200 hover:opacity-90"><Link href={"/cart"}><HiOutlineShoppingBag size={23} /></Link>

          <div className={state.length==0?"hidden":" flex items-center justify-center absolute top-[-6px] right-[-5px] bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full w-4 h-4 "}>
            <p className="text-white text-sm">{state.length}</p>
          </div>

        </div>
        <div className="cursor-pointer opacity-88 duration-200 hover:opacity-100"><Link href={"/signup"}><IoPersonOutline size={20} /></Link></div>

      </div>
    </div>
  );
}

export default NavBar;
