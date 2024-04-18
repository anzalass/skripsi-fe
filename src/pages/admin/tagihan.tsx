import Sidebar from "@/components/sidebar";
import TabelTagihan from "@/components/tabeltagihan";
import { RenderTableUser } from "@/context/renderTableUser";
import { server } from "@/server";
import { useContext, useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

type TagihanType = {
  no: number;
  id: number;
  id_pelanggan: number;
  name: string;
  status: string;
  alamat: string;
  paket_langganan: string;
  harga_langganan: number;
  bulan: string;
  tahun: string;
  periode_pemakaian: string;
  created_at: string;
};

export default function Tagihan(props: { tagihan: TagihanType[] }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(4);
  const { render, setRender } = useContext(RenderTableUser);
  const [tagihan, setTagihan] = useState(props.tagihan);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${server}all-tagihan`);
      const response = await res.json();
      setTagihan(response.data);
    }
    fetchData();
  }, [render]);

  console.log(tagihan);

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
          <h1 className="text-xl font-[500] pl-3 mt-2">Tagihan</h1>
          <div className="w-full mt-[60px]">
            {tagihan ? <TabelTagihan tagihan={tagihan} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
