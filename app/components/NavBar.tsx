"use client";
import { Menu, X } from "lucide-react";
import { Oswald } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
const Roboto_font = Oswald({
  subsets: ["latin"],
});
const NavBar = () => {
  const [Ham, setHam] = useState(false);
  return (
    <>
      <div className=" sticky top-0 z-10 px-4 text-white w-full py-4 bg-slate-950/60 backdrop-blur-lg border-b border-slate-800">
        <div className="2xl:w-[1532px] w-full justify-self-center flex justify-between items-center gap-3">
          <Link href={"/"}>
            <div
              className={`${Roboto_font.className} text-3xl font-bold flex gap-3 items-center`}
            >
              <img src="codrix_logo.svg" className="w-[50px] h-[50px]" alt="" />
              <div>
                Codrix <span className="lg:inline hidden">solutions</span>
              </div>
            </div>
          </Link>
          <ul className="md:flex gap-5 hidden">
            <Link href={"/services"}>
              <li className="hover:underline underline-offset-4 cursor-pointer hover:text-[#855ce4] transition-all">
                Services
              </li>
            </Link>

            <Link href={"/about"}>
              <li className="hover:underline underline-offset-4 cursor-pointer hover:text-[#855ce4] transition-all">
                About us
              </li>
            </Link>
            <Link href={"/join"}>
              <li className="hover:underline underline-offset-4 cursor-pointer hover:text-[#855ce4] transition-all">
                Join our Team
              </li>
            </Link>
            <Link href={"/contact/simple"}>
              <li className="hover:underline underline-offset-4 cursor-pointer hover:text-[#855ce4] transition-all">
                Contact
              </li>
            </Link>
          </ul>
          <Link href={"contact/demo"}>
            <button className="px-4 py-2.5 md:block hidden bg-[#4d0fdb] rounded-2xl cursor-pointer hover:bg-[#4d0fdb]/70 hover:scale-104 transition-all">
              Book a Demo
            </button>
          </Link>
          <div
            onClick={() => setHam(true)}
            className="md:hidden block cursor-pointer"
          >
            <Menu size={40} color="white" />
          </div>
        </div>
      </div>
      <div
        className={` ${
          Ham ? "top-0" : "-top-[100vh]"
        } transition-all duration-400 fixed z-40 text-white w-full bg-slate-950/60 backdrop-blur-lg   border-b border-slate-800 py-5 px-5 h-[95vh]`}
      >
        <div onClick={() => setHam(false)}>
          <X size={32} />
        </div>
        <ul className=" flex flex-col w-full gap-6 items-center justify-center text-xl">
          <Link href={"/services"}>
            <li
              onClick={() => setHam(false)}
              className="hover:underline underline-offset-4 cursor-pointer hover:text-[#855ce4] transition-all"
            >
              Services
            </li>
          </Link>
          <Link href={"/about"}>
            <li
              onClick={() => setHam(false)}
              className="hover:underline underline-offset-4 cursor-pointer hover:text-[#855ce4] transition-all"
            >
              About us
            </li>
          </Link>
          <Link href={"/join"}>
            <li
              onClick={() => setHam(false)}
              className="hover:underline underline-offset-4 cursor-pointer hover:text-[#855ce4] transition-all"
            >
              Join our Team
            </li>
          </Link>
          <Link href={"/contact/simple"}>
            <li
              onClick={() => setHam(false)}
              className="hover:underline underline-offset-4 cursor-pointer hover:text-[#855ce4] transition-all"
            >
              Contact
            </li>
          </Link>
          <li>
            <Link href={"contact/demo"}>
              <button
                onClick={() => setHam(false)}
                className="px-6 py-2.5 bg-[#4d0fdb] rounded-2xl cursor-pointer hover:bg-[#4d0fdb]/70 hover:scale-104 transition-all"
              >
                Book a Demo
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
