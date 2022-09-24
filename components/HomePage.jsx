import Image from "next/image"
import homepage from '../public/images/homepage.webp'
function HomePage() {
    return (
        <div className="homepage w-screen h-screen bg-[#e7ecee] sticky  flex items-center ">
            <div className="pl-16 text-7xl font-bold ">
                <h1 className="font-bold text-transparent opacity-100 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Powered</h1> <h1 className="opacity-80">By Intellect </h1><h1 className="opacity-80">Driven By Values</h1>
                <div className="text-sm mt-10 flex items-center gap-7">
                    <div className=" rounded h-10 w-fit items-center justify-center flex bg-gradient-to-r from-pink-400 to-purple-400">
                        <p className="py-6 px-8  text-white">Buy Now</p>
                    </div>
                    <div className="hover:border-b-2 border-black duration-200 cursor-pointer">
                        <p>learn more</p>
                    </div>
                </div>
            </div>
            <div className="image absolute top-0 right-0 w-[45%]">
                <Image src={homepage} />
            </div>

        </div>
    )
}

export default HomePage
