import StatusPengaduan from "@/components/statuspengaduan";
import { server } from "@/server";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { SiWhatsapp } from "react-icons/si";

type CardPengaduan = {
  id: number;
  foto: string;
  nama: string;
  deskripsi: string;
  alamat: string;
  status: string;
};

export default function DetailPengaduanPage() {
  const { data } = useSession();
  const router = useRouter();
  const [pengaduan, setPengaduan] = useState<CardPengaduan>();

  const GetPengaduanDetail = async () => {
    await axios
      .get(`${server}pengaduan/${router.query.slug}`)
      .then((res) => {
        setPengaduan(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    GetPengaduanDetail();
  }, [router.query.slug]);

  return (
    <div className="w-full min-h-screen">
      <div className="xl:w-[60%] lg:w-[65%] md:w-[85%] w-[94%] mx-auto mt-[50px]  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="space-y-6 mx-auto w-[11/12]">
          <div className="flex w-full p-1 relative ">
            <Link href={"/pengaduan/riwayat-pengaduan"}>
              <div className="">
                <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-2 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                  {" "}
                  <IoArrowBackOutline size={20} />
                </button>
              </div>
            </Link>
            <h1 className=" pt-2  font-[600]  text-white">Detail Pengaduan</h1>
          </div>
          <div className="">
            <img
              src={pengaduan?.foto}
              className="object-cover rounded-md"
              alt=""
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nama
            </label>
            <input
              type="email"
              name="email"
              disabled={true}
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              value={pengaduan?.nama}
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Alamat
            </label>
            <div className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
              {pengaduan?.alamat}
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Deskripsi
            </label>
            <div className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
              {pengaduan?.deskripsi}
            </div>
          </div>
          <div className="">
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Status
            </label>
          </div>
          <div className="w-full rounded-md bg-slate-50 p-1">
            <StatusPengaduan status={pengaduan?.status || ""} />
          </div>

          {pengaduan?.status === "diproses" ? (
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Batalkan Pengaduan
            </button>
          ) : null}
          <div className="flex items-start"></div>
        </div>
      </div>
    </div>
  );
}
