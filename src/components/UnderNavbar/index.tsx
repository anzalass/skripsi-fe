import React, { useState } from "react";

export default function UnderNavbar() {
  const [active, setActive] = useState(0);
  return (
    <div className="w-[85%] mx-auto mt-3 mb-3 h-[60px] p-1">
      <div className="flex">
        <div
          onClick={() => setActive(0)}
          className={`${
            active === 0 ? "bg-black text-white" : "null"
          } cursor-pointer rounded-xl  border-[3px]  px-3 py-2`}
        >
          Beranda
        </div>
        <div
          onClick={() => setActive(1)}
          className={` ${
            active === 1 ? "bg-black text-white" : "null"
          } cursor-pointer  rounded-xl border-[3px] px-3 ml-3 py-2`}
        >
          Layanan
        </div>
        <div
          onClick={() => setActive(2)}
          className={`${
            active === 2 ? "bg-black text-white" : "null"
          } cursor-pointer  rounded-xl border-[3px] px-3 ml-3 py-2`}
        >
          Produk Kami
        </div>
        <div
          onClick={() => setActive(3)}
          className={` ${
            active === 3 ? "bg-black text-white" : "null"
          } cursor-pointer rounded-xl border-[3px] px-3 ml-3 py-2`}
        >
          Tentang Kami
        </div>
        <div
          onClick={() => setActive(4)}
          className={` ${
            active === 4 ? "bg-black text-white" : "null"
          } cursor-pointer rounded-xl border-[3px] px-3 ml-3 py-2`}
        >
          Hubungi Kami
        </div>
      </div>
    </div>
  );
}
