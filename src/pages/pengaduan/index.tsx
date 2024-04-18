import { useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import axios from "axios";

import { server } from "@/server";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Link from "next/link";

type DetailPelanggan = {
  name: string;
  alamat: string;
  paket_langganan: string;
};

export default function PengaduanPage() {
  const { data } = useSession();
  const { push } = useRouter();
  const [waktu, setWaktu] = useState(0);
  const handleLabelClick = () => {
    const fileInput = document.getElementById("foto") as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [id, setId] = useState(0);
  const [detailPelanggan, setDetailPelanggan] = useState<DetailPelanggan[]>([]);
  const [detailPelangganCard, setDetailPelangganCard] =
    useState<DetailPelanggan>({
      name: "",
      alamat: "",
      paket_langganan: "",
    });

  const [alamat, setAlamat] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [foto, setFoto] = useState();
  const [whatsapp, setWhatsApp] = useState("");

  const HandleClick = () => {
    const { name, alamat, paket_langganan } = detailPelanggan[0] || {};
    if (name && alamat && paket_langganan) {
      setDetailPelangganCard({
        name: name,
        alamat: alamat,
        paket_langganan: paket_langganan,
      });
    }
    setDetailPelanggan([]);
  };

  const GetIDPelanggan = async () => {
    await axios
      .get(`${server}pelangganpengaduan/${id}`)
      .then((response) => {
        setDetailPelanggan(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const CreatePengaduan = async () => {
    Swal.fire({
      title: "Loading...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    const FormPengaduan = new FormData();
    FormPengaduan.append("id_pelanggan", id);
    FormPengaduan.append("nama", detailPelangganCard.name);
    FormPengaduan.append("alamat", detailPelangganCard.alamat);
    FormPengaduan.append("no_whatsapp", whatsapp);
    FormPengaduan.append("file", foto);
    FormPengaduan.append("email", data?.user?.email);
    FormPengaduan.append("deskripsi", deskripsi);
    FormPengaduan.append("waktu_kunjungan", selectedDate);

    await axios
      .post(`${server}create-pengaduan`, FormPengaduan)
      .then((res) => {
        Swal.close();
        Swal.fire("Berhasil", res?.data?.message);
        push("/");
      })
      .catch((err) => {
        console.log(err);
        Swal.close();
        Swal.fire("Error", err?.response?.data?.message);
      });
  };

  useEffect(() => {
    GetIDPelanggan();
  }, [id]);

  // Set minimum and maximum dates
  const minDate = new Date(); // Today's date
  const maxDate = new Date(); // Today's date plus 7 days
  maxDate.setDate(maxDate.getDate() + 3);
  return (
    <div className="w-full py-5">
      <div className="w-[97%] mx-auto min-h-screen p-3">
        <div className="relative lg:w-[60%] xl:w-[60%] md:w-[85%] w-[95%] sm:w-[90%]  mx-auto ">
          <h1 className="mx-auto text-[16px] text-start xl:block lg:block md:hidden hidden font-[500]">
            Pengaduan Gangguan Internet Pelanggan
            <div className="bg-black h-[1px] w-[60%] mt-1.5"></div>
          </h1>
          <Link href={"/pengaduan/riwayat-pengaduan"}>
            <button className="right-0 top-0 absolute px-2 py-2 border-[1px] rounded-md border-black hover:bg-black hover:text-white">
              Riwayat Pengaduan
            </button>
          </Link>
        </div>
        <div className="lg:w-[60%] xl:w-[60%] md:w-[85%] sm:w-[90%] w-11/12 mx-auto mt-10">
          <div className="w-[100%] mx-auto ">
            <h1 className="text-[13px] font-[500]">Masukan ID Pelanggan</h1>
            <input
              type="text"
              value={id}
              required={true}
              onChange={(e: any) => setId(e.target.value)}
              placeholder="ID Pelanggan"
              className="border-[1px] pl-3 mt-1.5 placeholder:text-[12px] rounded-md border-black w-full h-[37px]  "
            />
            {detailPelanggan.length > 0 ? (
              <div
                onClick={HandleClick}
                className="w-full cursor-pointer bg-zinc-50 rounded-md border-[1px] border-black p-3"
              >
                <h1 className="text-[14px] font-[500]">
                  {detailPelanggan[0]?.name}
                </h1>
                <h1 className="text-[13px] ">{detailPelanggan[0]?.alamat}</h1>
                <h1 className="text-[13px] ">
                  {detailPelanggan[0]?.paket_langganan}
                </h1>
              </div>
            ) : null}
          </div>
          <div className="lg:w-[50%] xl:w-[40%] md:w-[80%] w-[100%] mt-3">
            {detailPelangganCard.name !== "" &&
            detailPelangganCard.alamat !== "" &&
            detailPelangganCard.paket_langganan !== "" ? (
              <>
                <h1 className="text-[13px] font-[500]">Detail Pelanggan</h1>
                <div className="w-[100%] mt-1.5 rounded-md  border-[1px] bg-zinc-100  border-black h-[100px] p-2">
                  <h1 className="text-[13px] mt-2 font-[500]">
                    {detailPelangganCard.name}
                  </h1>
                  <h1 className="text-[11px] mt-1">
                    {detailPelangganCard.alamat}
                  </h1>
                  <h1 className="text-[11px] mt-1">
                    {detailPelangganCard.paket_langganan}
                  </h1>
                </div>
              </>
            ) : null}
          </div>
          <div className="w-[100%] mx-auto mt-3">
            <h1 className="text-[13px] font-[500]">Masukan Alamat Lengkap</h1>
            <textarea
              placeholder="Alamat Lengkap"
              value={alamat}
              required={true}
              onChange={(e: any) => setAlamat(e.target.value)}
              name=""
              id=""
              className="border-[1px] pl-3 mt-1.5 placeholder:text-[12px] rounded-md border-black w-full h-[80px]  "
            ></textarea>
          </div>

          <div className="w-[100%] mt-3 mx-auto ">
            <h1 className="text-[13px] font-[500]">No WhatsApp</h1>
            <input
              type="text"
              placeholder="No WhatsApp"
              required={true}
              value={whatsapp}
              onChange={(e: any) => setWhatsApp(e.target.value)}
              className="border-[1px] pl-3 mt-1.5 placeholder:text-[12px] rounded-md border-black w-full h-[37px]  "
            />
          </div>
          <div className="w-[100%]">
            <h1 className="text-[13px] mt-3">Masukan Foto Kondisi Terkini</h1>
            <div
              onClick={handleLabelClick}
              className="mt-3 cursor-pointer rounded-md w-full items-center justify-center border-[1px] border-black h-[50px]"
              id="label"
            >
              <FaCamera className="mx-auto mt-2.5" size={20} />
            </div>
            <input
              className="hidden"
              onChange={(e: any) => setFoto(e.target.files[0])}
              type="file"
              required={true}
              id="foto"
            />
          </div>
          {foto ? (
            <div className="w-full ">
              <img src={URL.createObjectURL(foto)} alt="" />
            </div>
          ) : null}

          <div className="w-[100%] mx-auto mt-3">
            <h1 className="text-[13px] font-[500]">Deskripsi</h1>
            <textarea
              placeholder="Deskripsi"
              name=""
              id=""
              required={true}
              value={deskripsi}
              onChange={(e: any) => setDeskripsi(e.target.value)}
              className="border-[1px] pl-3 mt-1.5 placeholder:text-[12px] rounded-md border-black w-full h-[80px]  "
            ></textarea>
          </div>
          <div className="w-[100%]">
            <h1 className="text-[13px] mt-3">Atur Waktu Kunjungan Petugas</h1>
            <div className="flex mt-1.5">
              <button
                onClick={() => setWaktu(0)}
                className="p-3 rounded-md border-[1px] bg-black text-white"
              >
                Sekarang
              </button>
              <button
                onClick={() => setWaktu(1)}
                className="p-3 ml-3 rounded-md border-[1px] border-black text-black"
              >
                Nanti
              </button>
            </div>

            {waktu === 1 ? (
              <div className="flex">
                <DatePicker
                  className="border-2 mt-3 p-3 w-[100px] text-[14px] font-[500] border-black rounded-md"
                  selected={selectedDate}
                  onChange={(date: any) => setSelectedDate(date)}
                  minDate={minDate}
                  value={selectedDate}
                  maxDate={maxDate}
                  dateFormat="dd/mm/yyyy HH:mm:ss"
                  id="kalender"
                />
                <FaRegCalendarAlt size={25} className="mt-5 ml-3" />
              </div>
            ) : null}
          </div>
          <button
            onClick={CreatePengaduan}
            className="hover:bg-black hover:text-white mt-3 w-full h-[40px] border-[1px] border-black rounded-md"
          >
            Kirim Pengaduan
          </button>
        </div>
      </div>
    </div>
  );
}
