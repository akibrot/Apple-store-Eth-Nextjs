import Link from 'next/link'

function Landing() {
  return (
    <div className="mt-28 md:mt-[10rem]  md:pr-[4.8rem]  flex flex-col items-center md:items-end justify-center ">
        <div className=" md:float-right px-10 md:px-0 leading-10  text-white text-3xl  font-[Montserrat Alternates] font-bold md:text-end">
          <p className="font-sans text-[1.6rem] tracking-wide  ">Sustainability is Our Core Principle</p>
          <div className="mt-7 md:mt-0 text-left md:px-0 md:w-[40%] md:text-right md:float-right  float-left">
            <p className=" text-sm  md:text-right tracking-wider font-roboto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget vitae nisl ultricies at sagittis ultrices. Ultricies fringilla diam adipiscing a.
            </p>
          </div>
        </div>
        <div>
        </div>
        <div className=" text-white underline uppercase mt-20 md:mt-5 font-bold font-sans  md:text-end text-sm ">
          <Link href={""}>Learn more</Link>
        </div>
      </div>
  )
}

export default Landing