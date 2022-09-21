import Link from "next/link";

function NavBar() {
  return (
    <div className="w-screen h-20 shadow-xl fixed z-[9999px] top-0 left-0 bg-white ">
      {/* normal wide screen */}
      <div className="flex w-full h-full items-center justify-center">
        <div className="logo flex-[3] flex items-center justify-center">logo</div>
        <div className="input flex-[3] items-center justify-center flex">
          <div className="w-3/4 bg-red-500 rounded">
            <input type="text" name="" id="" placeholder="search product" className="h-9 w-full outline-0 bg-transparent ml-2 placeholder:text-sm placeholder:text-gray-50 text-sm text-black" />
          </div>
        </div>
        <div className="items flex gap-8 flex-[3]">
          <ul><Link href={""}>Home</Link></ul>
          <ul><Link href={""}>Cart</Link></ul>
          <ul><Link href={""}>About</Link></ul>
          <ul><Link href={""}>Login</Link></ul>
          {/* <ul><Link href={""}>Sign up</Link></ul> */}
        </div>
      </div>
      {/* mobile menu */}
    </div>
  );
}

export default NavBar;
