import Image from 'next/image'
import Link from 'next/link'
function HomeAbout() {
  return (
    <div className="flex items-end justify-end bg-[#F3F1E7] relative mb-12 pb-12  ">
    <div className="absolute top-[2rem] boxsh  shadow-[10px_10px_rgb(129,1,2)] left-0 md:left-20 w-[50%] bg-red-700 mt-10 hidden md:h-[110%] mb-10  md:flex items-end justify-center">
        <Image loader={()=>"/imagehome.png"} src="/imagehome.png" alt="" height={"100%"} width={"100%"} layout="fill" />
        
    </div>
    <div className="md:w-2/4 flex flex-col md:mt-12 p-10 md:pl-40 items-center md:items-start ">
        <h1 className="font-sans text-[#810102] text-[50px] leading-[78px] font-bold md:pt-12 ">About us</h1>
        <div>
            <p className="px-20 md:px-0 md:mr-20 md:py-2 md:w-2/3 py-20 ">

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis id nunc vitae gravida. Aenean quis velit ante. Vestibulum porttitor lorem pretium porta ornare. Sed eget laoreet nibh. Donec vitae faucibus nulla, ut dictum urna.
            </p>
        </div>
        <Link href={""} className="pt-2"><p className="text-[#810102] text-xl  mb-3 uppercase w-fit border-b-2 border-solid border-black cursor-pointer font-bold font-sans " >learn more</p></Link>
    </div>
</div>
  )
}

export default HomeAbout