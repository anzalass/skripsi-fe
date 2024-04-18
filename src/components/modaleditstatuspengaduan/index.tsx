import { RenderTableUser } from "@/context/renderTableUser";
import { server } from "@/server";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import Swal from "sweetalert2";

export default function EditStatusPengaduan(props: { setOpen: any; id: any }) {
  const { render, setRender } = useContext(RenderTableUser);
  const [status, setStatus] = useState("");
  const router = useRouter();

  useEffect(() => {
    const GetStatusPengaduan = async () => {
      await axios.get(`${server}statuspengaduan/${props.id}`).then((res) => {
        setStatus(res.data.data);
      });
    };
    GetStatusPengaduan();
  }, [props.id]);

  const EditStatusPengajuan = async () => {
    setRender(true);
    await axios
      .put(`${server}editstatuspengaduan/${props.id}`, {
        status: status,
      })
      .then((res) => {
        setRender(true);
        props.setOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
    setRender(false);
  };

  return (
    <div className="w-[90%]  fixed left-20 z-10 mx-auto h-screen   top-0 ">
      <div className="w-[50%] shadow-xl p-3 relative rounded-lg bg-slate-200 h-[30vh] z-10 mx-auto mt-[100px] ">
        <FaWindowClose
          onClick={() => props.setOpen(false)}
          className="absolute right-2"
          size={25}
        />
        <h1 className="text-xl mt-4 font-[500]">
          Edit Status Pengaduan {props.id}
        </h1>

        <div className="w-full p-3 mt-5 bg-slate-200">
          <div className="mb-5">
            <select
              name=""
              id=""
              onChange={(e: any) => setStatus(e.target.value)}
              value={status}
            >
              <option value="diproses">Diproses</option>
              <option value="dalam perjalanan">Dalam Perjalanan</option>
              <option value="sedang diperbaiki">Sedang Diperbaiki</option>
              <option value="selesai">Selesai</option>
            </select>
          </div>
          <div className="w-full">
            <button
              onClick={EditStatusPengajuan}
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
