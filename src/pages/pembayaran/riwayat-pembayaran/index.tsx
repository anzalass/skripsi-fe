import { server } from "@/server";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type RiwayatPembayaranType = {
  id: number;
  id_pelanggan: number;
  id_pembayaran: string;
  email: string;
  name: string;
  // status: string;
  // alamat: string;
  // url: string;
  // periode_pemakaian: string;
  // paket_langganan: string;
  // harga_langganan: number;
  // total_amount: number;
  // metode_pembayaran: number;
  // created_at: string;
  // tanggal_bayar: string;
};

export default function RiwayatPembayaran() {
  const [transaksi, setTransaksi] = useState<RiwayatPembayaranType[]>([]);
  const { data } = useSession();
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${server}riwayat/${data?.user?.email}`);
      const response = await res.json();
      setTransaksi(response.data);
    }
    fetchData();
  }, []);
  // console.log(transaksi);

  return (
    <div className="min-h-screen">
      <div className="w-full">
        <div className="w-[60%] mx-auto">
          <div className="w-[90%] mx-auto mt-5 text-xl font-[500] mb-5">
            <h1>Riwayat Pembayaran</h1>
          </div>
          {transaksi?.map((d: any, i: number) => (
            <div className="w-[90%] mx-auto p-6 bg-white  shadow-md  rounded-lg border-[1px] border-gray-200  dark:bg-white dark:border-gray-400">
              <img
                src="https://mediagrasi.net/wp-content/uploads/2023/02/Asset-2@2x-2-e1676605352394.png"
                className="h-12"
                alt="Flowbite Logo"
              />
              <a href="/pembayaran/riwayat-pembayaran/abca">
                <h5 className="mb-2 mt-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-black">
                  {d?.id_pembayaran}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                {d?.name}
              </p>
              <Link href={`/pembayaran/riwayat-pembayaran/${d?.id_pembayaran}`}>
                <div className="inline-flex font-medium items-center text-blue-600 hover:underline">
                  {" "}
                  Lihat Bukti Pembayaran
                  <svg
                    className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
