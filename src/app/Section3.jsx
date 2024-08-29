import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Section3 = () => {
  const heroPills = [
    {
      id: "1",
      name: "Ac viverra sed risus praesent vulputate. ",
    },
    {
      id: "2",
      name: "Natoqu consectetur pulvinar. ",
    },
    {
      id: "3",
      name: "Sollicitudin ornare tempus nulla varius pulvinar.",
    },
    {
      id: "4",
      name: "Varius pulvinar",
    },
    {
      id: "5",
      name: "Pellentesque Tempus Varius pulvinar",
    },
    {
      id: "6",
      name: "Mauris Fermentum Praesent",
    },
  ];

  return (
    <div>
      <div
        className="h-auto bg-black slanted-div sm:px-16 sm:pt-20  px-5 pt-16"
        style={{ paddingBottom: "200px" }}
      >
        <div className="grid grid-cols-12 gap-6 xl:m-20 sm:m-10 m-5 h-auto ">
          <div className="xl:col-span-6 col-span-12 mt-20 space-y-10">
            <p className="text-yellowDark">
              Quisque porttitor vitae vel amet neque scelerisque mattis.
              Consectetur nibh velit magna consectetur leo.
            </p>
            <h1 className="font-extrabold text-[50px] text-white">
              Cursus Integer Conseq Aliquam Tristique.
            </h1>

            <Button className="flex flex-row py-6 items-center gap-3 bg-white sm:w-[250px] w-[200px] text-black rounded-3xl hover:opacity-90 hover:bg-white">
              <span>Lorem Ipsum</span>
              <FaArrowRightLong />
            </Button>
          </div>
          <div className="xl:col-span-6   col-span-12 h-auto w-full mb-10">
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <div className="">
                <div className="custom-card bg-white ">
                  <Image
                    src="/join.svg"
                    alt="join image"
                    width={40}
                    height={30}
                  />
                  <p className="text-[50px] font-extrabold mt-10">1.</p>
                  <p className="text-3xl font-bold">Phasellus Vitae</p>
                  <p className="text-xl font-bold ">Quisque</p>
                  <p className="text-xl mt-10">Porttitor vitae vel amet </p>
                </div>
                <div className="custom-card bg-yellowDark mt-6">
                  <Image
                    src="/support.svg"
                    alt="support image"
                    width={40}
                    height={30}
                  />
                  <p className="text-[50px] font-extrabold mt-10">3.</p>
                  <p className="text-3xl font-bold">Eleifend Pulvinar </p>
                  <p className="text-xl font-bold ">Vitae</p>
                  <p className="text-xl mt-10">Consectetur nibh velit </p>
                </div>
              </div>
              <div className="sm:mt-20 mt-6">
                <div className="custom-card bg-yellowDark ">
                  <Image
                    src="/infinity.svg"
                    alt="join image"
                    width={40}
                    height={30}
                  />
                  <p className="text-[50px] font-extrabold mt-10">2.</p>
                  <p className="text-3xl font-bold">Phasellus Vitae</p>
                  <p className="text-xl font-bold ">Quisque</p>
                  <p className="text-xl mt-10">Porttitor vitae vel amet </p>
                </div>
                <div className="custom-card bg-white mt-6">
                  <Image
                    src="/yoga.svg"
                    alt="yoga image"
                    width={40}
                    height={30}
                  />
                  <p className="text-[50px] font-extrabold mt-10">4.</p>
                  <p className="text-3xl font-bold">Eleifend Pulvinar </p>
                  <p className="text-xl font-bold ">Vitae</p>
                  <p className="text-xl mt-10">Consectetur nibh velit </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-auto bg-yellowDark slanted-div sm:px-16 sm:pt-20  px-5 pt-16">
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
              src="/illustration3.svg"
              alt="illustration 3"
              layout="responsive"
              width={700}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
