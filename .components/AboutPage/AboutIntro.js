import Image from "next/image";
import React from "react";

function AboutIntro() {
  return (
    <div className=" w-screen flex flex-col md:flex-row flex-wrap py-9  ">
      <div className="flex-[5] bg-white  ">
        <div className="p-20  font-[roboto condenced] ">
          <div className="md:pl-12 ml-[-15px] md:ml-0">
            <h1 className="text-[#810102] text-5xl font-sans font-bold pb-5 ">
              We are ECFF
            </h1>

            <p>
              The Environment and Coffee Forest Forum (ECFF), is a local Civil
              Society Organization registered and licenced in Ethiopia
              (registration No. 0378), and focuses on developing strategies for
              sustainable use and conservation of the environment in general,
              and the coffee forests in particular, through thematic research on
              conservation planning, education and pilot implmentation of
              research findings.
            </p>
            <br />

            <p>
              ECFF provides services including conservation planning, practical
              implmentation of scientifically proven concepts, environmental
              education and capacity building and climate change mitigation.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-[5] flex items-start justify-start flex-col relative  ">
        <div className="md:pt-20 md:pl-16 px-5  ">
          <div className="w-fit shadow-[-10px_-10px_rgba(0,0,0,0.3)]">
            <Image
              loader={() =>
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh6FVMxqJZyVe1Ze17ykisgyPmFaTJLV7EIA&usqp=CAU"
              }
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh6FVMxqJZyVe1Ze17ykisgyPmFaTJLV7EIA&usqp=CAU"
              alt=""
              srcset=""
              width={450}
              height={270}
            />
          </div>
        </div>
        <div className="hidden md:block absolute bottom-0 right-20 ml-15 mb-5  w-2/4 ">
          <div className="w-fit shadow-[10px_10px_rgba(0,0,0,0.3)]">
            <Image
              loader={() =>
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7wXyVxIE3jekQMgblF1uEfibZXUZYpeuR4w&usqp=CAU"
              }
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7wXyVxIE3jekQMgblF1uEfibZXUZYpeuR4w&usqp=CAU"
              alt=""
              srcset=""
              width={450}
              height={280}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutIntro;
