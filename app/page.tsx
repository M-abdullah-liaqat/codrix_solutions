"use client";
import Image from "next/image";
import { Oswald } from "next/font/google";
import DetailsTable from "./components/DetailsTable";
import { CloudDownloadIcon } from "lucide-react";
import { InfiniteMovingCards } from "./components/infiniteMovingCards";
import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const clients = [...new Array(8)].map((client, index) => ({
  url: `/Logos/${index + 1}.png`,
  text: `Image no ${index}`,
}));

const Roboto_font = Oswald({
  subsets: ["latin"],
});

export default function Home() {
  const magneticText = useRef<HTMLDivElement>(null);
  const movingText = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (magneticText.current) {
      magneticText.current.addEventListener("mousemove", (e) => {
        if (magneticText.current) {
          const rect = magneticText.current.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          // move text slightly toward cursor
          if (movingText.current) {
            movingText.current.style.transform = `translate(${x * 0.04}px, ${
              y * 0.04
            }px)`;
          }
        }
      });
    }
  }, [magneticText]);
    useGSAP(() => {
    gsap.to(movingText.current, {
      scale: 1,
      duration: 2,
      ease: "power4.out",
    });
  });
  return (
    <div className="">
      <div
        ref={magneticText}
        className="w-full md:h-[800px] h-[600px] grid md:grid-cols-2 grid-cols-1 text-white"
      >
        <div className="flex justify-center items-center">
          <div
            ref={movingText}
            className="2xl:w-[700px] w-[500px] px-3 flex flex-col gap-8 scale-0"
          >
            <div
              className={`2xl:text-8xl text-7xl w-full font-bold  ${Roboto_font.className} md:text-left text-center text-slate-200`}
            >
              At <span className="text-[#4d0fdb]">Codrix</span> we build the
              quality
            </div>
            <div className="w-full text-slate-400 md:text-left text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              facilis perferendis ad quaerat quisquam in recusandae quod!
              Dignissimos accusantium rem repudiandae eum similique minus illum
              nemo ea, veritatis ex quibusdam.
            </div>
            <div className="flex items-center md:justify-start justify-center">
              <Link href={"contact/demo"}>
                <button className="px-12 py-3 text-xl font-medium bg-[#4d0fdb] rounded-2xl cursor-pointer hover:bg-[#4d0fdb]/70 hover:scale-104 transition-all">
                  Book a Demo
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:flex hidden items-center justify-center lg:px-0 px-3">
          <div className="relative 2xl:w-[750px] xl:w-[600px] lg:w-[470px] w-full 2xl:h-[580px]  xl:h-[450px] lg:h-[380px] h-[300px] bg-amber-500 rounded-r-full overflow-hidden">
            <div className=" absolute top-0 bg-black/30 w-full h-full rounded-r-full overflow-hidden object-center"></div>
            <img src="Image.jpg" className="h-full object-cover" alt="" />
          </div>
        </div>
      </div>
      <DetailsTable />
      <div className="mt-10 pt-10 pb-15 2xl:w-[1532px] w-full px-4 justify-self-center flex items-center justify-center flex-col gap-5">
        <div
          className={`text-white font-medium md:text-5xl text-3xl ${Roboto_font.className}`}
        >
          We Take Pride in Our Numbers
        </div>
        <div className="grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 w-full px-4">
          <div className=" flex flex-col items-center justify-center gap-3 h-[200px]">
            <div className="md:text-8xl text-6xl font-medium text-[#4d0fdb]">
              7+
            </div>
            <div className="text-slate-400"> Years of expernence</div>
            <div className=" h-1 mt-2 w-[80%] bg-slate-400"></div>
          </div>
          <div className=" flex flex-col items-center justify-center gap-3 h-[200px]">
            <div className="md:text-8xl text-6xl font-medium text-[#4d0fdb]">
              40+
            </div>
            <div className="text-slate-400"> Senior Developers</div>
            <div className=" h-1 mt-2 w-[80%] bg-slate-400"></div>
          </div>
          <div className=" flex flex-col items-center justify-center gap-3 h-[200px]">
            <div className="md:text-8xl text-6xl font-medium text-[#4d0fdb]">
              60+
            </div>
            <div className="text-slate-400"> Clients</div>
            <div className=" h-1 mt-2 w-[80%] bg-slate-400"></div>
          </div>
          <div className=" flex flex-col items-center justify-center gap-3 h-[200px]">
            <div className="md:text-8xl text-6xl font-medium text-[#4d0fdb]">
              10M+
            </div>
            <div className="text-slate-400"> Yearly Revenue</div>
            <div className=" h-1 mt-2 w-[80%] bg-slate-400"></div>
          </div>
          <div className=" flex flex-col items-center justify-center gap-3 h-[200px]">
            <div className="md:text-8xl text-6xl font-medium text-[#4d0fdb]">
              19+
            </div>
            <div className="text-slate-400"> Countries work with</div>
            <div className=" h-1 mt-2 w-[80%] bg-slate-400"></div>
          </div>
        </div>
      </div>
      <div className="pb-15 flex items-center justify-center flex-col gap-10 overflow-hidden">
        <div
          className={`text-white font-medium md:text-5xl text-3xl ${Roboto_font.className}`}
        >
          Our Clients
        </div>
        <InfiniteMovingCards items={clients} speed="normal" />
      </div>
    </div>
  );
}
