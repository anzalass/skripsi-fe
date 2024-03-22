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
      className={` ${popins.className} w-full grid grid-cols-3 mx-auto mt-[20px]`}
    >
      {berandaadmin.map((d, i) => (
        <div
          key={i}
          className={`w-[390px] p-0 mx-auto flex h-[120px] gap-1 mb-3 rounded-sm relative shadow-xl border-[1px] ${d.warna}`}
        >
          <div className="w-[60%]">
            <h1 className="text-[15px] ml-4 text-black mt-[13px] font-[500]">
              {d.name}
            </h1>
          </div>
          <div className="w-[40%]">
            <h1 className="text-[30px] ml-8 text-black mt-[10px] font-[500]">
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
