import React from "react";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { GiSmartphone } from "react-icons/gi";
import { IoMdLaptop } from "react-icons/io";
import { BsRouter } from "react-icons/bs";
import { FaRegCheckSquare } from "react-icons/fa";
import { PiTelevisionThin } from "react-icons/pi";

type HomeProductType = {
  id: number;
  name: string;
  fitur: [];
  text: string;
  harga: string;
};
export default function Cards2({ data }: { data: HomeProductType }) {
  return (
    <div className="w-[400px] 1300px:w-[300px] 1000px:w-[230px] 900px:w-[260px] 800px:w-[300px] 600px:w-[260px] 400px:w-[350px]  mx-auto p-2 border-[1px] rounded-md border-gray-900 ">
      <div className="text-center w-full">
        <h1 className="text-2xl font-[700] mt-4">{data.name}</h1>
        <h1 className="text-[15px] font-[700]">{data.text}</h1>
        <div className="flex w-full mt-6 items-center justify-center ">
          <PiTelevisionThin className="mr-1 ml-1 " size={20} />
          <BsRouter className="mr-1 ml-1 " size={20} />
          <IoMdLaptop className="mr-1 ml-1 " size={20} />
          <GiSmartphone className="mr-1 ml-1 " size={20} />
          <HiOutlineComputerDesktop className="mr-1 ml-1 " size={20} />
        </div>
      </div>
      <div className="w-[70%] mx-auto mt-10">
        {data.fitur.map((f, i) => (
          <div className="flex mx-auto mt-3">
            <FaRegCheckSquare color="green" />
            <h1 className="font-[500]  -mt-1 ml-3 text-[13px]">{f}</h1>
          </div>
        ))}
      </div>
      {data?.harga !== "" ? (
        <div className="w-full text-center mt-10">
          <h1>
            Rp <span className="font-[700] text-2xl">{data.harga}</span>/Bulan
          </h1>{" "}
        </div>
      ) : null}

      <div className="w-[50%] mx-auto  justify-center items-center mt-7 mb-4 ">
        <button className="rounded-l-full border-[1px] w-full rounded-md hover:bg-black hover:text-white mx-auto rounded-r-full border-gray-800 px-5 text-[13px] font-[500] py-2">
          Pasang
        </button>
      </div>
      <h1 className="font-[500] text-[13px] text-center italic text-gray-500">
        {data?.text2}
      </h1>
    </div>
  );
}
