import { server } from "@/server";
import { log } from "console";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";

type RiwayatPembayaranType = {
  id: number;
  id_pelanggan: number;
  id_pembayaran: string;
  email: string;
  name: string;
  status: string;
  alamat: string;
  url: string;
  periode_pemakaian: string;
  paket_langganan: string;
  harga_langganan: number;
  total_amount: number;
  metode_pembayaran: number;
  created_at: string;
  tanggal_bayar: string;
};

export default function BuktiPembayaran() {
  const router = useRouter();
  const [transaksi, setTransaksi] = useState<RiwayatPembayaranType>();
  const [tgl, setTgl] = useState<any>();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `${server}riwayatbyidpembayaran/${router.query.slug}`
      );
      const response = await res.json();
      setTransaksi(response.data);
    }
    fetchData();
    FormattedDate();
  }, [router?.query?.slug]);

  const FormattedDate = () => {
    const isoString = transaksi?.tanggal_bayar || "";
    const date = new Date(isoString);

    const formattedDate: string = date.toLocaleString("id-ID", {
      year: "numeric",
      month: "long",
      day: "2-digit",
      // hour: "2-digit",
      // minute: "2-digit",
      // second: "2-digit",
      hour12: false,
      timeZone: "Asia/Jakarta", // Sesuaikan zona waktu dengan kebutuhan Anda
    });
    setTgl(formattedDate);
  };

  return (
    <div className="w-full min-h-screen">
      <div className="xl:w-[80%] lg:w-[90%] md:w-[90%] w-[95%] overflow-x-auto h-[550px] mx-auto border-[1px] mt-5 border-black">
        <div className="w-[1000px]  ">
          <h1 className="text-2xl mt-6 font-[600] text-center">
            BUKTI PEMBAYARAN
          </h1>
          <div className="w-[900px] font-[400] mx-auto mt-6  flex">
            <div className="w-[800px]">
              <div className="flex  ">
                <h1 className="w-[200px] ">ID Pembayaran </h1>
                <h1 className="ml-2">: {transaksi?.id_pembayaran}</h1>
              </div>
              <div className="flex mt-2 ">
                <h1 className="w-[200px] ">Tanggal Bayar </h1>
                <h1 className="ml-2">: {tgl}</h1>
              </div>
              <div className="flex mt-2">
                <h1 className="w-[200px]">Telah terima dari </h1>
                <h1 className="ml-2">: {transaksi?.name}</h1>
              </div>
              <div className="flex mt-2">
                <h1 className="w-[200px]">Alamat</h1>
                <h1 className="ml-2">: {transaksi?.alamat}</h1>
              </div>
            </div>
            <div className=" right-[50px] h-[100px]">
              <img
                src="https://mediagrasi.net/wp-content/uploads/2023/02/Asset-2@2x-2-e1676605352394.png"
                className="h-[60px] "
                alt="Flowbite Logo"
              />
            </div>
          </div>
          <div className="h-[2px] bg-black w-[900px] mx-auto mt-3"></div>

          <div className="w-[900px] mx-auto mt-5">
            <div className="w-full flex justify-between">
              <div className="w-[25%]">
                <div className="font-[500]">Paket Internet</div>
                <div className="mt-2">{transaksi?.paket_langganan}</div>
              </div>
              <div className="w-[25%]">
                <div className="font-[500]">Harga</div>
                <div className="mt-2">
                  {transaksi?.harga_langganan.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </div>
              </div>
              <div className="w-[40%]">
                <div className="font-[500]">Periode Pemakaian</div>
                <div className="mt-2">{transaksi?.periode_pemakaian}</div>
              </div>
              <div className="w-[15%]">
                <div className="font-[500]">Subtotal</div>
                <div className="mt-2">
                  {transaksi?.total_amount.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </div>
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
