import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
function Timeline({ direction, data }) {
  // love building my own timeline component ):3
  //   const [windowsize, setwindowsize] = useState();
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  useEffect(() => {
    animation_handler();
  }, []);
  const animation_handler = () => {
    let width = document.documentElement.scrollWidth;
    if (width < 541) {
      return "";
    } else {
      if (direction == "right") {
        return "fade-right";
      } else if (direction == "left") {
        return "fade-left";
      }
    }
    console.log(direction, width);
  };
  return (
    <div className=" md:w-screen  flex items-center justify-center  ">
      <div className="h-[52vh] flex items-center justify-center">
        <div className="w-[2px] h-full bg-[#F3F1E7] flex items-center justify-center relative">
          <div className=" bg-white border-2 border-solid border-red-400 w-6 h-6 rounded-[50%] absolute  flex items-center justify-center">
            <div className="w-1/2 h-1/2 bg-red-500 rounded-[50%]"> </div>
          </div>
          <div
            className={
              direction == "left"
                ? " bg-[#F3F1E7] w-[110px] left-4 h-[2px] absolute flex items-center justify-center"
                : " bg-[#F3F1E7] w-[110px] right-4 h-[2px] absolute flex items-center justify-center"
            }
          ></div>
          <div
            className={
              direction == "left"
                ? "p-4 px-6 bg-[#F3F1E7] w-[4rem] right-12 h-7 rounded-full absolute flex items-center justify-center"
                : "p-4 px-6 bg-[#F3F1E7] w-[4rem] left-12 h-7 rounded-full absolute flex items-center justify-center"
            }
          >
            <p className="py-10 font-roboto">{data.date}</p>
          </div>
          <div
            data-aos={direction == "right" ? "fade-right" : "fade-left"}
            
            className={
              direction == "left"
                ? " w-[150px] md:w-[400px] left-5 md:left-[160px] h-[150px] md:h-[300px]  absolute flex-col flex items-center justify-center"
                : " w-[150px] md:w-[400px] right-5 md:right-[160px] h-[150px] md:h-[300px] flex-col absolute flex items-center justify-center"
            }
          >
            <div className="flex-[8]  w-full">
              <Image
                loader={() => data.image}
                src={data.image}
                alt=""
                srcset=""
                width={400}
                height={300}
              />
            </div>
            <div className="flex-[2] w-full font-bold flex items-end">
              <p>{data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
