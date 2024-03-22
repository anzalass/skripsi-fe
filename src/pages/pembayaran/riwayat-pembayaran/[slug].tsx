import { useRouter } from "next/router";
import React from "react";
import QRCode from "react-qr-code";

export default function BuktiPembayaran() {
  const router = useRouter();
  console.log(router.query.slug);

  return (
    <div className="w-full min-h-screen">
      <div className="w-[80%] h-[500px] mx-auto border-[1px] mt-5 border-black">
        <div className="w-full relative">
          <div className="absolute right-[50px] h-[100px]">
            <img
              src="https://mediagrasi.net/wp-content/uploads/2023/02/Asset-2@2x-2-e1676605352394.png"
              className="h-[80px] "
              alt="Flowbite Logo"
            />
          </div>
          <h1 className="text-2xl mt-6 font-[600] text-center">
            Bukti Pembayaran
          </h1>
          <div className="w-[90%] font-[400] mx-auto mt-6">
            <div className="w-[80%]">
              <div className="flex  ">
                <h1 className="w-[20%] ">ID Pembayaran </h1>
                <h1 className="ml-2">: abd24-rf32-404l2-34od2</h1>
              </div>
              <div className="flex mt-2">
                <h1 className="w-[20%]">Telah terima dari </h1>
                <h1 className="ml-2">: Muhamad Gempar Anzalas</h1>
              </div>
              <div className="flex mt-2">
                <h1 className="w-[20%]">Alamat</h1>
                <h1 className="ml-2">
                  : Perum Griya Rajeg Lestari Blok B no 14 RT 16 RW 006
                </h1>
              </div>
            </div>
          </div>
          <div className="h-[2px] bg-black w-[90%] mx-auto mt-3"></div>

          <div className="w-[90%] mx-auto mt-5">
            <div className="w-full flex justify-between">
              <div className="w-[25%]">
                <div className="font-[500]">Paket Internet</div>
                <div className="mt-2">5mbps</div>
              </div>
              <div className="w-[25%]">
                <div className="font-[500]">Harga</div>
                <div className="mt-2">Rp.166.500.00</div>
              </div>
              <div className="w-[40%]">
                <div className="font-[500]">Periode Pemakaian</div>
                <div className="mt-2">
                  ID2JANUARI2024 ID2FEBRUARI2024 ID2FEBRUARI2024 ID2FEBRUARI2024
                </div>
              </div>
              <div className="w-[15%]">
                <div className="font-[500]">Subtotal</div>
                <div className="mt-2">Rp.200.000.00</div>
              </div>
            </div>
          </div>
          <div className="h-[2px] bg-black w-[90%] mx-auto mt-3"></div>
          <div className="flex justify-between w-[90%] mx-auto">
            <div className="w-[50%]">
              <QRCode
                size={200}
                className="w-[150px] h-[150px] mt-5 "
                value={"abd24-rf32-404l2-34od2"}
                viewBox={`0 0 256 256`}
              />
            </div>
            <div className="w-[50%]">
              <img
                src="/lunas.png"
                className="ml-[300px] w-[200px] h-[200px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
