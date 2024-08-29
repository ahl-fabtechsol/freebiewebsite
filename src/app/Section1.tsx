import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Section1 = () => {
  const heroPills = [
    {
      id: "1",
      name: "Cursus Integer",
    },
    {
      id: "2",
      name: "Integer Consequat ",
    },
    {
      id: "3",
      name: "Tellus Euismod Pellentesque",
    },
    {
      id: "4",
      name: "Aliquot Tristique",
    },
    {
      id: "5",
      name: "Pellentesque Tempus",
    },
    {
      id: "6",
      name: "Mauris Fermentum Praesent",
    },
  ];

  return (
    <div className="h-auto bg-yellowLight slanted-div sm:px-16 sm:pt-20 2xl:pt-32  px-5 pt-16">
      <div className="rounded-3xl bg-white sm:p-4 p-2 w-full flex items-center justify-center">
        <Image src="/paintLogo.svg" alt="painLogo" width={70} height={70} />
      </div>
      <div className="grid grid-cols-12 gap-6 xl:m-20 sm:m-10 m-5 h-auto">
        <div className="lg:col-span-6 col-span-12">
          <p className="capitalize text-lg font-bold text-yellowDark">
            risus praesent vulputate.{" "}
          </p>
          <h1 className="font-extrabold mt-6 text-[50px]">
            Cursus Integer Consequat Tristique.
          </h1>

          <div className="flex flex-wrap gap-5 mt-10">
            {heroPills.map((item, index) => (
              <div
                key={index}
                className="flex flex-row w-full md:w-auto gap-2 items-center sm:px-8 sm:py-5 px-4 py-2.5  rounded-full bg-white"
              >
                <FaRegCheckCircle className="text-yellowDark" />
                <p className="whitespace-nowrap">{item.name}</p>
              </div>
            ))}
          </div>

          <Button className="flex flex-row py-6 items-center gap-3 bg-yellowDark mt-10 sm:w-[250px] w-[200px] text-black rounded-3xl hover:opacity-90 hover:bg-yellowDark">
            <span>Lorem Ipsum</span>
            <FaArrowRightLong />
          </Button>
        </div>
        <div className="lg:col-span-6 col-span-12 relative lg:h-full h-auto mb-10">
          <Image
            src="/illustration2.svg"
            alt="illustration 2"
            layout="responsive"
            width={700}
            height={500}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
