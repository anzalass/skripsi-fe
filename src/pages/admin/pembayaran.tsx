import Sidebar from "@/components/sidebar";
import TabelPemayaran from "@/components/tabelpembayaran";
import { server } from "@/server";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

type PembayaranType = {
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

export default function Pembayaran(props: { pembayaran: PembayaranType[] }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(2);
  const [pembayaran, setPembayaran] = useState(props.pembayaran);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${server}all-pembayaran`);
      const response = await res.json();
      setPembayaran(response.data);
    }
    fetchData();
  }, []);
  console.log(pembayaran);

  return (
    <div className="w-full">
      {/*  Template admin*/}
      {open ? null : (
        <div className="relative z-50">
          <RxHamburgerMenu
            onClick={() => setOpen(true)}
            className="absolute left-3 top-3 z-50"
            size={25}
          />
        </div>
      )}

      {open ? <Sidebar open={open} setOpen={setOpen} active={active} /> : null}
      {/* Template Admin */}
      <div className="w-[94%] mx-auto  h-[100vh] pt-3">
        <div className="w-[97%] mx-auto  h-[70px]  p-3  border-b-[1px] border-black">
          <h1 className="text-xl font-[500] pl-3 mt-2">Pembayaran</h1>
          <div className="w-full mt-[20px]">
            {pembayaran ? (
              <TabelPemayaran pembayaran={pembayaran} />
            ) : (
              <h1>Tidak Ada Data</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
