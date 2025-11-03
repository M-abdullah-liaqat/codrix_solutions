"use client";
import { Oswald } from "next/font/google";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
const Roboto_font = Oswald({
  subsets: ["latin"],
});
const Page = () => {
  const conTactForm = useRef<HTMLFormElement>(null);
  const [RolType, setRolType] = useState<string>();
  const [FirstName, setFirstName] = useState<string>();
  const [LastName, setLastName] = useState<string>();
  const [Email, setEmail] = useState<string>();
  const [Frontend, setFrontend] = useState<string>();
  const [Backend, setBackend] = useState<string>();
  useEffect(() => {
    console.log(RolType);
  }, [RolType]);
  const onSubmit = () => {
    // const messageDoc = {
    //   type: RolType,
    //   fullName: `${FirstName} ${LastName}`,
    //   email: Email,
    //   message: Message,
    // };
    // console.log(messageDoc);
    conTactForm.current?.reset();
    toast("Application Submitted");
  };
  return (
    <div className="2xl:w-[1532px] w-full min-h-screen justify-self-center px-5 py-10">
      <div className="space-y-3">
        <div
          className={`text-white font-medium md:text-5xl text-3xl ${Roboto_font.className}`}
        >
          Join our global Team
        </div>
        <div className="text-slate-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          exercitationem quos ipsam corporis reprehenderit magnam pariatur,
          officiis assumenda impedit nobis, magni deleniti, facilis illo
          laudantium officia nisi aspernatur atque dicta odio voluptatum soluta
          nesciunt! Laudantium facere perspiciatis dolorum libero deleniti saepe
          culpa quod velit voluptate minus? Harum iure, quo animi autem
          necessitatibus quas maiores ratione architecto culpa temporibus
          delectus quis repellat, fugiat natus odit. Cumque earum, ad
          repudiandae ratione exercitationem sunt natus rerum soluta praesentium
          amet atque quidem illum harum, dicta eligendi in unde officiis
          voluptate velit eos maxime asperiores ullam nihil! Unde sint molestias
          laboriosam doloribus quibusdam incidunt corrupti illum earum eum
          consequuntur et nihil nisi aliquam tempore architecto nobis ipsam iste
          saepe hic officia a minima, reprehenderit temporibus esse. Minus nulla
          neque beatae cumque minima quibusdam ab ipsam odio, expedita assumenda
          ea optio soluta maiores reprehenderit commodi sequi odit sunt quas
          deserunt voluptate omnis voluptatem vero possimus! Expedita itaque
          ipsa laudantium necessitatibus! Repellendus id obcaecati voluptatibus
          odit enim facere, commodi quo necessitatibus nemo sequi, animi eaque
          provident tempora harum illo eius delectus unde numquam inventore ab!
          Non nulla culpa, magnam illum harum perspiciatis fugiat consequuntur
          accusantium inventore adipisci sint, error voluptate rem eveniet eum
          laboriosam sunt ad laudantium.
        </div>
      </div>
      <div className="pt-10">
        <div
          className={`text-white font-medium md:text-4xl text-3xl ${Roboto_font.className}`}
        >
          Fill this form
        </div>
        <div>
          <div className="grid w-full max-w-sm items-center gap-3 py-8">
            <Label htmlFor="picture">Select Your Role</Label>
            <Select onValueChange={setRolType}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="frontendDeveloper">
                  Frontend Developer
                </SelectItem>
                <SelectItem value="backendDeveloper">
                  Backend Developer
                </SelectItem>
                <SelectItem value="fullStackDeveloper">
                  Full-stack Developer
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <form
            ref={conTactForm}
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
            className="flex flex-col gap-3 w-[full]"
          >
            {" "}
            <div className="flex gap-3 ">
              <div className="grid w-full max-w-[400px] items-center gap-3">
                <Label htmlFor="email">First Name</Label>
                <Input
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  id="email"
                  placeholder="Jhon"
                />
              </div>
              <div className="grid w-full max-w-[400px] items-center gap-3">
                <Label htmlFor="email">Last Name</Label>
                <Input
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  id="email"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className={`max-w-[812px] w-full items-center gap-3 ${RolType==="frontendDeveloper" || RolType === "fullStackDeveloper" ? "grid" : "hidden"}`}>
              <Label htmlFor="email">Frontend Stack</Label>
              <Input
                onChange={(e) => setFrontend(e.target.value)}
                type="email"
                id="email"
                placeholder="React, Vue js"
              />
            </div>
            <div className={`grid max-w-[812px] w-full items-center gap-3 ${RolType==="backendDeveloper" || RolType === "fullStackDeveloper" ? "grid" : "hidden"}`}>
              <Label htmlFor="email">Backend Stack</Label>
              <Input
                onChange={(e) => setBackend(e.target.value)}
                type="text"
                id="email"
                placeholder="Node js, python"
                className=""
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label htmlFor="email">Upload Resume</Label>
              <Input type="file" id="email" placeholder="Email" />
            </div>
            <div>
              <Button
                disabled={
                  !FirstName || !LastName || !Email || !RolType
                }
                type="submit"
                className="cursor-pointer"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
