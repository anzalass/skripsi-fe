import { berandaadmin } from "./berandaadmin";
import { Poppins } from "next/font/google";

const popins = Poppins({
  weight: ["500"],
  subsets: ["latin"],
  variable: "--font--poppins",
});

export default function BerandaAdmin() {
  return (
    <div
      className={` ${popins.className} w-full grid xl:grid-cols-3  lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-x-5 mx-auto mt-[20px]`}
    >
      {berandaadmin.map((d, i) => (
        <div
          key={i}
          className={`xl:w-[370px] lg:w-[280px] md:-[150px] mr-2 ml-2 p-0 mx-auto flex h-[120px] gap-1  mb-3 rounded-sm relative shadow-xl border-[1px] ${d.warna}`}
        >
          <div className="w-[50%]">
            <h1 className="xl:text-[15px] lg:text-[15px] md:text-[14px] text-[11px] ml-4 text-black mt-[13px] font-[500]">
              {d.name}
            </h1>
          </div>
          <div className="w-[50%]">
            <h1 className="xl:text-[30px] lg:text-[20px] md:text-[18px] text-[20px] ml-8 text-black mt-[10px] font-[500]">
              {d.jumlah}
            </h1>
          </div>
          <img
            src={d.image}
            className="absolute w-[50px] bottom-0 right-0 opacity-50"
            alt=""
          />
        </div>
      ))}
    </div>
  );
}
