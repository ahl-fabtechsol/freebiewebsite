import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";

const Section2 = () => {
  return (
    <div className="h-auto bg-yellowDark slanted-div sm:px-16 sm:pt-20  px-5 pt-16">
      <div className="grid grid-cols-12 gap-6 xl:m-20 sm:m-10 m-5 h-auto">
        <div className="lg:col-span-6 col-span-12 mt-20 space-y-10">
          <h1 className="font-extrabold text-[50px] ">
            Phasellus a vitae iaculis magna eleifend pulvinar velit odio.
          </h1>

          <p>
            Vulputate et vulputate suspendisse natoque! Euismod magna id purus
            eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum
            at mauris enim pulvinar duis etiam duis vulputate et vulputate
            suspendisse natoque id tellus consectetur pulvinar et.{" "}
          </p>

          <Button className="flex flex-row py-6 items-center gap-3 bg-black sm:w-[250px] w-[200px] text-white rounded-3xl hover:opacity-90 hover:bg-black">
            <span>Lorem Ipsum</span>
            <FaArrowRightLong />
          </Button>
        </div>
        <div className="lg:col-span-6 col-span-12 relative lg:h-full h-auto mb-10">
          <Image
            src="/illustration1.svg"
            alt="illustration 1"
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

export default Section2;
