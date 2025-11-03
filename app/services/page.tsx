import { Oswald } from "next/font/google";
import Link from "next/link";

const Roboto_font = Oswald({
  subsets: ["latin"],
});
const Page = () => {
  return (
    <div className="2xl:w-[1532px] w-full justify-self-center min-h-screen py-5 px-5">
      <div
        className={`text-white font-medium md:text-5xl text-3xl text-center ${Roboto_font.className} pb-6`}
      >
        Services
      </div>
      <div className="text-slate-300 md:text-left text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        veritatis minima dolorum consectetur error nihil repellendus architecto
        delectus recusandae adipisci assumenda velit hic molestiae doloribus
        reprehenderit, repellat maiores, natus nobis incidunt itaque unde?
        Ducimus laborum, eum facere quaerat architecto corporis reiciendis quas
        officiis perspiciatis, ut aliquam possimus sapiente laboriosam quia,
        veniam nobis temporibus quos cum ullam reprehenderit blanditiis dolorem.
        Porro, voluptas nesciunt quae et quam saepe soluta fuga. Veritatis,
        magnam cupiditate neque fugiat doloremque nam voluptatum dolorem
        assumenda animi, impedit et? Nobis aliquam libero provident quae
        accusamus sint nisi? Aliquam ipsum beatae praesentium consectetur, in
        quibusdam dignissimos laboriosam impedit provident doloribus quidem
        error.
      </div>
      <div className="py-6">
        <div
          className={`text-white font-medium md:text-4xl text-2xl ${Roboto_font.className} pb-6`}
        >
          Packages
        </div>
        <div className="w-full text-[#e7deff] grid xl:grid-cols-4 lg:grid-cols-3 xs:grid-cols-2 grid-cols-1  gap-4">
          <div className="bg-slate-900 rounded-2xl py-10 px-6 flex flex-col justify-between gap-10">
            <div className="space-y-2">
              <div className="text-[#e7deff] xs:text-2xl text-lg font-medium">
                Landing Page
              </div>
              <div className="text-5xl text-[#e7deff] font-bold">$100</div>
              <div>
                We build full working landing page in just $100 and feature with hearo section with CTA.
              </div>
              <ul className=" list-disc list-inside">
                <li>Fullly editable for 1 mounth</li>
                <li>Life time support</li>
                <li>Modren Ui</li>
              </ul>
            </div>
            <div>
              <div>
                <Link href={"/contact/demo"}>
                <button className="py-1.5 px-8 rounded-lg border border-slate-500 hover:bg-slate-700 cursor-pointer transition-all">
                  Request a Demo
                </button>                
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-slate-900 rounded-2xl py-10 px-6 flex flex-col justify-between gap-10">
            <div className="space-y-2">
              <div className="text-[#e7deff] xs:text-2xl text-lg font-medium">
                Basic Web
              </div>
              <div className="text-5xl text-[#e7deff] font-bold">$350</div>
              <div>
                Best for business and personal portfolio full website with multiple pages with routing and with customization.
              </div>
              <ul className=" list-disc list-inside">
                <li>Fullly editable for 1 mounth</li>
                <li>Life time support</li>
                <li>Multiple pages Routes</li>
              </ul>
            </div>
            <div>
              <div>
                <Link href={"/contact/demo"}>
                <button className="py-1.5 px-8 rounded-lg border border-slate-500 hover:bg-slate-700 cursor-pointer transition-all">
                  Request a Demo
                </button>                
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-slate-900 rounded-2xl py-10 px-6 flex flex-col justify-between gap-10">
            <div className="space-y-2">
              <div className="text-[#e7deff] xs:text-2xl text-lg font-medium">
                Advance Web
              </div>
              <div className="text-5xl text-[#e7deff] font-bold">$900</div>
              <div>
                Best for business app fro example E-Commerece app with modren featuures like auth and security.
              </div>
              <ul className=" list-disc list-inside">
                <li>Authentication</li>
                <li>Dynamic routes</li>
                <li>Admin Panal</li>
                <li>1 month free Maintenance</li>
              </ul>
            </div>
            <div>
              <div>
                <Link href={"/contact/demo"}>
                <button className="py-1.5 px-8 rounded-lg border border-slate-500 hover:bg-slate-700 cursor-pointer transition-all">
                  Request a Demo
                </button>                
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-slate-900 rounded-2xl py-10 px-6 flex flex-col justify-between gap-10">
            <div className="space-y-2">
              <div className="text-[#e7deff] xs:text-2xl text-lg font-medium">
                Pro Web
              </div>
              <div className="text-5xl text-[#e7deff] font-bold">$3000</div>
              <div>
                Full options feature rich app and powerfull for saas applications and represent something online.
              </div>
              <ul className=" list-disc list-inside">
                <li>Authentication + Authorization</li>
                <li>Dynamic routes</li>
                <li>Admin Panal</li>
                <li>3 month free Maintenance</li>
                <li>Large scale</li>
                <li>Payment Gateway</li>
              </ul>
            </div>
            <div>
              <div>
                <Link href={"/contact/demo"}>
                <button className="py-1.5 px-8 rounded-lg border border-slate-500 hover:bg-slate-700 cursor-pointer transition-all">
                  Request a Demo
                </button>                
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
