import { Oswald } from "next/font/google";

const Roboto_font = Oswald({
  subsets: ["latin"],
});
const Page = () => {
  return (
    <div className="w-full justify-self-center min-h-screen py-10 2xl:px-20">
      <div
        className={`text-white font-medium md:text-5xl text-3xl text-center ${Roboto_font.className} pb-6`}
      >
        About Us
      </div>
      <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-3 min-h-[800px] px-6">
        <div className=" flex 2xl:items-center items-start lg:py-15 py-8 justify-center">
          <div className=" relative">
            <div className="w-full absolute top-0 rounded-xl  h-full bg-black/40"></div>
            <img src="about.jpg" className="rounded-xl" alt="" />
          </div>
        </div>
        <div className="px-5 py-5">
          <div
            className={`text-white font-medium md:text-4xl text-2xl ${Roboto_font.className} pb-6`}
          >
            Introduction
          </div>
          <div className="text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, nemo
            consequatur. Quia, quasi sapiente, voluptas, non nihil voluptates
            vitae ratione eum aliquam quaerat sed omnis maiores mollitia debitis
            deleniti? Deserunt reiciendis repudiandae officia iusto! Adipisci
            labore explicabo molestias ipsa. Quos dolorum quas exercitationem
            nam tenetur velit dolorem reiciendis ipsam amet. Porro natus ipsam
            adipisci eos quae nulla saepe eveniet fugiat aut quam suscipit magni
            reiciendis placeat beatae a, libero totam rem fuga iusto voluptatem
            hic? Voluptate eligendi eaque at id dicta distinctio esse natus
            soluta, perferendis aliquam dignissimos eveniet placeat delectus
            dolorum quam optio neque ipsum officiis quidem voluptatum non earum.
            Consectetur fugit, vel sapiente eius minus placeat numquam quod
            voluptates corporis, voluptatum nostrum odio soluta quibusdam
            obcaecati velit asperiores. Fugiat hic velit ea esse nostrum
            asperiores facere? Iusto, quo nam eveniet, at ea aspernatur delectus
            laborum laudantium quisquam quia ducimus est hic? At totam aperiam
            mollitia necessitatibus nisi, earum molestiae deleniti provident
            culpa illo fugiat tenetur ad enim ipsam nihil cum laborum aut quae
            ipsa? Nobis ut id quo. Voluptate ducimus ea dolorum quam mollitia
          </div>
          <div
            className={`text-white font-medium md:text-4xl text-2xl ${Roboto_font.className} py-6`}
          >
            Our Mission
          </div>
          <div className="text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, nemo
            consequatur. Quia, quasi sapiente, voluptas, non nihil voluptates
            vitae ratione eum aliquam quaerat sed omnis maiores mollitia debitis
            deleniti? Deserunt reiciendis repudiandae officia iusto! Adipisci
            labore explicabo molestias ipsa. Quos dolorum quas exercitationem
            nam tenetur velit dolorem reiciendis ipsam amet. Porro natus ipsam
            adipisci eos quae nulla saepe eveniet fugiat aut quam suscipit magni
            reiciendis placeat beatae a, libero totam rem fuga iusto voluptatem
            hic? Voluptate eligendi eaque at id dicta distinctio esse natus
            soluta, perferendis aliquam dignissimos eveniet placeat delectus
            dolorum quam optio neque ipsum officiis quidem voluptatum non earum.
            Consectetur fugit, vel sapiente eius minus placeat numquam quod
            voluptates corporis, voluptatum nostrum odio soluta quibusdam
            obcaecati velit asperiores. Fugiat hic velit ea esse nostrum
            asperiores facere? Iusto, quo nam eveniet, at ea aspernatur delectus

          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
