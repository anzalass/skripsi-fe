import Image from "next/image";
import React from "react";
import { layanan } from "./layanan";
import Link from "next/link";

export default function Layanan() {
  return (
    <div className="w-11/12 mx-auto  mt-7 mb-[40px]  ">
      <h1 className="text-2xl text-center font-[700] mb-5">LAYANAN</h1>
      <div className="w-[90%] mx-auto grid grid-cols-2 bg-slate-50 400px:grid-cols-2 500px:grid-cols-2 700px:grid-cols-4 xl:gap-[50px]  lg:gap-[50px] gap-[10px]  ">
        {layanan.map((d, i) => (
          <div
            className=" w-[140px] 400px:w-[155px] 500px:w-[175px] 600px:w-[230px] 700px:w-[140px] 800px:w-[160px] 900px:w-[170px] 1000px:w-[180px] 1100px:w-[200px] 1300px:w-[250px] shadow-lg  mx-auto   rounded-lg p-2 pb-[30px] xl:h-[250px] lg:h-[200px] md:h-[150px] h-[130px]  bg-white "
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
                <h1 className="xl:text-xl lg:text-[16px] md:text-[15px] text-sm sm:text-[14px] font-[500]">
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
