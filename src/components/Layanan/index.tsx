import Image from "next/image";
import React from "react";
import { layanan } from "./layanan";
import Link from "next/link";

export default function Layanan() {
  return (
    <div className="w-11/12 mx-auto  mt-7 mb-[100px]  ">
      <h1 className="text-3xl text-center font-[500] mb-5">Layanan</h1>
      <div className="w-[85%] mx-auto sm:grid sm:grid-cols-2 md:grid md:grid-cols-4 lg:grid lg:grid-cols-4 grid grid-cols-2 xl:gap-[50px]  lg:gap-[50px] gap-[10px]  bg-white">
        {layanan.map((d, i) => (
          <div
            className="lg:w-[200px] xl:w-[250px] md:w-[150px] shadow-lg  xl:-ml-5 lg:-ml-5 md:-ml-2 sm:-ml-2   rounded-lg p-2 pb-[30px] xl:h-[250px] lg:h-[200px] md:h-[150px] h-[130px]  bg-white "
            key={i}
          >
            <Link href={d.navigasi || ""}>
              <div className="xl:p-7 lg:p-2 md:p-2 p-2 mt-2">
                <Image
                  height={100}
                  width={100}
                  src={d.logo}
                  alt="pemasangan"
                  className="mx-auto lg:h-[90px] xl:h-[120px] md:h-[70px] h-[50px] w-[50px]  xl:w-[120px] lg:w-[90px] md:w-[70px]"
                />
              </div>
              <div className="text-center">
                <h1 className="xl:text-xl lg:text-[16px] md:text-[15px] text-sm sm:text-[18px] font-[500]">
                  {d.name}
                </h1>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
