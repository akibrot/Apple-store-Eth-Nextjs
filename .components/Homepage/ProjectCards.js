import Image from "next/image"

function ProjectCards({data}) {
  return (
    <div className="relative w-[21rem] h-[29.1rem]  border-[c6c3af] border-[5px] border-solid  flex flex-col justify-end  items-center ">
                    <div className=" absolute left-0 top-0 h-[100%] w-[100%] z-0">

                        <Image loader={()=>data.image} src={data.image} alt="" className=" h-[28.4rem] w-[100%]" height={100} width={"100%"} layout="fill"/>
                    </div>
                    <div className=" absolute left-0 top-0 h-[100%] w-[100%] bg-gradient-to-t from-[#000000cc]  to-[#01010171]">
                      
                  </div>
                    <div className="z-10 text-white text-center">
                        <h1 className="text-3xl font-bold  font-sans" >{data.title}</h1>
                        <p className="px-10 py-3 text-center ">{data.description}</p>
                        <div className="uppercase cursor-pointer border-solid border-white border-[1px] mb-6 bg-transparent mx-24 font-sans font-bold text-sm " ><p className="p-[0.3px]">read more</p></div>
                    </div>


                </div>
  )
}

export default ProjectCards