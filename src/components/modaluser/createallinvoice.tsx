import { RenderTableUser } from "@/context/renderTableUser";
import { server } from "@/server";
import axios from "axios";
import { useContext, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import Swal from "sweetalert2";

export default function CreateAllInvoice(props: { setOpen: any }) {
  const [bulan, setBulan] = useState("");
  const [tahun, setTahun] = useState(0);
  const { render, setRender } = useContext(RenderTableUser);

  const CreateAllInvoice = async () => {
    setRender(false);
    Swal.fire({
      title: "Are you sure?",
      text: "Ingin membuat invoice bulan  ini?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Iya",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post(`${server}createallinvoice`, {
            bulan: bulan,
            tahun: tahun,
          })
          .then((response) => {
            Swal.fire({
              title: "Berhasil!",
              text: "membuat invoice bulan ini.",
              icon: "success",
            });
            setRender(true);
          })
          .catch((err) => {
            Swal.fire({
              title: "Gagal!",
              text: "Membuat invoice bulan ini",
              icon: "error",
            });
          });
      }
    });
    setRender(false);
  };

  return (
    <div className="w-[90%]  fixed left-20 z-10 mx-auto h-screen   top-0 ">
      <div className="w-[30%] shadow-xl p-3 relative rounded-lg bg-slate-200 h-[50vh] z-10 mx-auto mt-[150px] ">
        <FaWindowClose
          onClick={() => props.setOpen(false)}
          className="absolute right-2"
          size={25}
        />
        <h1 className="text-xl mt-4 font-[500]">Buat Invoice </h1>
        <h1>{}</h1>
        <div className="w-full p-3 mt-5">
          <div className="mb-5">
            <input
              onChange={(e: any) => setBulan(e.target.value)}
              type="text"
              value={bulan}
              className="h-[45px] rounded-lg w-full pl-3"
              placeholder="Bulan"
            />
          </div>
          <div className="mb-5">
            <input
              onChange={(e: any) => setTahun(parseInt(e.target.value))}
              value={tahun}
              className="h-[45px] rounded-md w-full pl-2 pt-2"
              placeholder="Tahun"
            />
          </div>

          <div className="w-full">
            <button
              onClick={CreateAllInvoice}
              className="p-3 rounded-md border-2 bg-white border-black"
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
