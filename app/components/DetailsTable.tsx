import React from "react";
import { DotBackgroundDemo } from "./dotsBackground";
import { cn } from "@/lib/utils";
import { CloudDownloadIcon } from "lucide-react";
const DetailsTable = () => {
  return (
    <div className="w-full lg:px-10  xs:px-4 md:h-[700px] h-[1100px] py-4">
      <div className="relative 2xl:w-[1532px] justify-self-center w-full h-full  flex md:flex-row flex-col bg-slate-950">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="relative lg:w-[40%] md:w-[35%] w-full md:h-full h-[400px] md:text-left text-center px-3 border-t md:border-b border-b-0 border-l md:border-r-0 border-r border-slate-800 text-slate-200 flex items-center justify-center flex-col gap-3">
          <div className=" text-3xl font-medium w-full lg:w-[300px] px-3">
            Lets Build your dream site with us
          </div>
          <div className="w-full px-3 lg:w-[300px] text-slate-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            iusto quibusdam ea! Distinctio, dignissimos. Laudantium illum, ullam
            repellendus libero reiciendis nemo amet sequi illo impedit, aperiam
            enim corporis voluptatum nostrum!
          </div>
        </div>
        <div className=" relative lg:w-[60%] md:w-[65%] w-full h-full border border-slate-800 flex justify-center md:items-start items-center gap-7">
          <div className="lg:w-[456px] md:w-[415px] w-full relative flex item justify-center gap-4">
            <div className="md:absolute top-[-50px] left-0 lg:w-[220px] xs:w-[200px] w-[45%] h-full flex flex-col gap-4">
              <div className="w-full bg-slate-900 shadow-xl h-[342px] border-2  rounded-lg px-5 py-5 flex flex-col justify-between">
                <CloudDownloadIcon size={70} color="#4d0fdb" />
                <div>
                  <div className="text-[#958dac] xs:text-2xl text-lg font-medium">
                    Cloud Techmologies
                  </div>
                  <div className="text-slate-400">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis, ad!
                  </div>
                  <div className=" h-1 mt-2 bg-slate-400"></div>
                </div>
              </div>
              <div className="w-full bg-slate-900 h-[342px] shadow-xl rounded-lg flex flex-col px-5 py-5 justify-between">
                <CloudDownloadIcon size={70} color="#4d0fdb" />
                <div>
                  <div className="text-[#958dac] xs:text-2xl text-lg font-medium">
                    Cloud Techmologies
                  </div>
                  <div className="text-slate-400">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis, ad!
                  </div>
                  <div className=" h-1 mt-2 bg-slate-400"></div>
                </div>
              </div>
            </div>
            <div className="md:absolute top-[50px] lg:w-[220px] xs:w-[200px] w-[45%] right-0 h-full flex flex-col gap-4">
              <div className="w-full bg-slate-900 h-[342px] shadow-xl rounded-lg flex flex-col px-5 py-5 justify-between">
                <CloudDownloadIcon size={70} color="#4d0fdb" />
                <div>
                  <div className="text-[#958dac] xs:text-2xl text-lg font-medium">
                    Cloud Techmologies
                  </div>
                  <div className="text-slate-400">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis, ad!
                  </div>
                  <div className=" h-1 mt-2 bg-slate-400"></div>
                </div>
              </div>
              <div className="w-full bg-slate-900 h-[342px] shadow-xl rounded-lg flex flex-col px-5 py-5 justify-between">
                <CloudDownloadIcon size={70} color="#4d0fdb" />
                <div>
                  <div className="text-[#958dac] xs:text-2xl text-lg font-medium">
                    Cloud Techmologies
                  </div>
                  <div className="text-slate-400">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis, ad!
                  </div>
                  <div className=" h-1 mt-2 bg-slate-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsTable;
