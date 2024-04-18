import Sidebar from "@/components/sidebar";
import TabelPengaduan from "@/components/tabelpengaduan";
import { RenderTableUser } from "@/context/renderTableUser";
import { server } from "@/server";
import { useContext, useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

type PengaduanType = {
  no: number;
  id: number;
  nama: string;
  email: string;
  no_whatsapp: string;
  status: string;
  alamat: string;
  paket_langganan: string;
  waktu_kunjungan: string;
  created_at: string;
};

export default function AdminPengaduan(props: { pengaduan: PengaduanType[] }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(5);
  const { render, setRender } = useContext(RenderTableUser);
  const [pengaduan, setPengaduan] = useState(props.pengaduan);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${server}pengaduan`);
      const response = await res.json();
      setPengaduan(response.data);
    }
    fetchData();
  }, [render]);

  return (
    <div className="w-full">
      {/*  Template admin*/}
      {open ? null : (
        <div className="relative">
          <RxHamburgerMenu
            onClick={() => setOpen(true)}
            className="absolute left-3 top-3 "
            size={25}
          />
        </div>
      )}

      {open ? <Sidebar open={open} setOpen={setOpen} active={active} /> : null}
      {/* Template Admin */}

      <div className="w-[94%] mx-auto  h-[100vh] pt-3">
        <div className="w-[97%] mx-auto  h-[70px]  p-3  border-b-[1px] border-black">
          <h1 className="text-xl font-[500] pl-3 mt-2">Pengaduan</h1>
          <div className="w-full mt-[40px]">
            {pengaduan ? (
              <TabelPengaduan pengaduan={pengaduan} />
            ) : (
              <p>Tidak ada data pengaduan.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
