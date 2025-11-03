import { Oswald } from "next/font/google";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Roboto_font = Oswald({
  subsets: ["latin"],
});
const Footer = () => {
  return (
    <div className="bg-slate-950 w-full border-t border-slate-800 py-10 px-5">
      <div className="2xl:w-[1532px] w-full text-slate-400 justify-self-center grid md:grid-cols-3 xs:grid-cols-2 grid-cols-1 md:gap-3 gap-8">
        <div className="flex flex-col gap-4 items-center">
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
          <ul className=" flex flex-col gap-6 justify-center">
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
            <li>
              <Link href={"contact/demo"}>
                <button className="px-4 py-2.5 md:block hidden bg-[#4d0fdb] rounded-2xl cursor-pointer hover:bg-[#4d0fdb]/70 hover:scale-104 transition-all">
                  Book a Demo
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <div className="space-y-4">
            <div className="text-xl">Subscribe to stay Update</div>
            <div className="space-y-0.5">
              <div>Email</div>
              <input
                type="text"
                className="w-[200px] py-1.5 px-3 border border-slate-500 rounded-lg"
              />
            </div>
            <div>
              <button className="py-1.5 px-8 rounded-lg border border-slate-500 hover:bg-slate-700 cursor-pointer transition-all">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:h-full h-[150px] justify-between">
          <div className="space-y-2">
            <div>Fowllow Us on:</div>
            <div className="flex gap-3">
              <Link href={"#"}>
                <FaFacebookSquare size={40} />
              </Link>
              <Link href={"#"}>
                <FaLinkedin size={40} />
              </Link>
              <Link href={"#"}>
                <FaSquareXTwitter size={40} />
              </Link>
            </div>
          </div>
          <div className="md:w-[200px] text-center">
            Cppyright-2025 Codrix Solutions- All rights reserved!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
