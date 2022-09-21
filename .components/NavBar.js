import Link from "next/link";
import { GiCircleClaws } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from 'react'
function NavBar() {
  const [opennav, setopennav] = useState(false)
  return (
    <div
      className="flex items-center leading-6  justify-between md:px-[3.5rem] px-10 mb-4
    "
    >
      <div className="text-white text-4xl flex my-10 md:my-0 ">
        <p className="font-bold md:pl-5   ">E</p>
        <GiCircleClaws />
        <p>FF</p>
      </div>
      <div className="md:hidden">
        <AiOutlineMenu color="white" size={25} onClick={() => setopennav(!opennav)} />
      </div>
      <div onClick={() => setopennav(!opennav)} className={opennav ? "menu md:hidden fixed w-full h-full bg-black/70 top-0 left-0 flex flex-col justify-center items-center text-white text-2xl uppercase gap-4" : "hidden"}>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/"}>Projects</Link>
        <Link href={"/"}>Publications</Link>
        <Link href={"/"}>Partners</Link>
        <Link href={"/"}>Contact us</Link>
      </div>
      <div className=" hidden  my-10 text-white  md:flex gap-6  uppercase text-sm items-center font-Roboto font-bold mr-3 ">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/"}>Projects</Link>
        <Link href={"/"}>Publications</Link>
        <Link href={"/"}>Partners</Link>
        <Link href={"/"}>Contact us</Link>
      </div>
    </div>
  );
}

export default NavBar;
