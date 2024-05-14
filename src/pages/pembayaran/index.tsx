import { server } from "@/server";
import axios from "axios";
import { fetchData } from "next-auth/client/_utils";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

export default function Pembayaran() {
  const { data } = useSession();
  const { push } = useRouter();
  const [checkbox, setCheckbox] = useState(false);
  const [id_pelanggan, setId_pelanggan] = useState<string>("");
  const [tagihan, setTagihan] = useState<any[]>([]);
  const [pemakaian, setPemakaian] = useState<any[]>([]);
  const [subTotal, setSubTotal] = useState<any>(0);
  const [idbayar, setIdbayar] = useState("");
  // const [namabayar, setNamabayar] = useState("");
  // const

  const SubTotal = () => {
    let totalHargaLangganan = 0;

    // Iterasi melalui setiap objek data dan menambahkan harga langganan
    tagihan?.forEach((item) => {
      totalHargaLangganan += item.harga_langganan;
    });

    setSubTotal(totalHargaLangganan);
  };

  useEffect(() => {
    SubTotal();
  }, [tagihan]);

  const BayarMidtrans = async (e: any) => {
    await axios
      .post(`${server}getsnap`, formData)
      .then((res) => {
        window.location.href = res.data.data;
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(formData);
  };

  // useEffect(() => {
  async function fetchData() {
    const dataa = await fetch(`${server}tagihan/${id_pelanggan}`);
    const res = await dataa.json();
    const combined = res?.data
      ?.map((item: any) => item.periode_pemakaian)
      .join(" ");
    let totalHargaLangganan = 0;

    // Iterasi melalui setiap objek data dan menambahkan harga langganan
    res?.data?.forEach((item: any) => {
      totalHargaLangganan += item.harga_langganan;
    });
    setTagihan(res.data);
    setFormData({
      id_pelanggan: res?.data[0]?.id_pelanggan,
      periode_pemakaian: combined || "",
      email: data?.user?.email,
      name: res?.data[0]?.name,
      paket_langganan: res?.data[0]?.paket_langganan,
      harga_langganan: res?.data[0]?.harga_langganan,
      alamat: res?.data[0]?.alamat,
      total_amount: totalHargaLangganan,
      url: res?.data[0]?.url,
    });
    setPemakaian(res.data.pemakaian);
  }

  const [formData, setFormData] = useState({
    id_pelanggan: 0,
    id_akun: 0,
    id_pembayaran: "",
    email: "",
    name: "",
    paket_langganan: "",
    harga_langganan: 0,
    alamat: "",
    total_amount: 0,
    url: "",
  });

  // }, [id_pelanggan]);

  return (
    <div className="w-full min-h-screen mb-[50px]">
      <div className="xl:w-[50%] lg:w-[60%] md:w-[70%] w-[90%] mx-auto flex justify-between mt-[70px]">
        <Link href={"/"}>
          <div className="">
            <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              {" "}
              Kembali
            </button>
          </div>
        </Link>
        <Link href={"/pembayaran/riwayat-pembayaran"}>
          <div className="">
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Riwayat Pembayaran
            </button>
          </div>
        </Link>
      </div>
      <div className="xl:w-[50%] lg:w-[60%] md:w-[70%] w-[90%] p-5 mx-auto mt-[20px] rounded-md bg-zinc-300">
        <h1 className="text-xl ml-0 font-[500]">Periksa Tagihan</h1>
        <div className=" mt-3 flex relative">
          <input
            type="text"
            onChange={(e: any) => setId_pelanggan(e.target.value)}
            value={id_pelanggan}
            min={1}
            className="px-3 w-[90%] h-[50px] rounded-md border-[1px] border-black "
            placeholder="Masukan ID Pelangganmu..."
          />
          <button
            onClick={fetchData}
            className="px-3 h-[50px] w-[15%] bg-blue-500 rounded-md text-white"
          >
            <IoSearchSharp className="absolute top-[16px] " size={20} />{" "}
            <span className="ml-3 font-[500] hidden md:block lg:block xl:block">
              Cari
            </span>
          </button>
        </div>
      </div>
      {tagihan?.length > 0 ? (
        <div className="xl:w-[50%] lg:w-[60%] md:w-[70%] w-[90%] mt-10 mx-auto border-[1px] border-black rounded-md ">
          <div className="w-full bg-zinc-300 h-[50px] p-3">
            <h1 className="font-bold">Detail Tagihan</h1>
          </div>

          <div className="p-5">
            <div className="">
              <div className="px-3 mt-3 flex justify-between ">
                <div className="w-[30%]">
                  <h1 className="font-[500] text-start">ID Pelanggan</h1>
                </div>
                <div className="w-[70%]">
                  <p className="text-end">{tagihan[0]?.id_pelanggan}</p>
                  <p className="text-end">{formData.url}</p>
                </div>
              </div>
              <hr className="px-5 mt-3 mx-auto w-[97%]" />
            </div>
            <div className="px-3 mt-4">
              <h1 className="font-[500]">Nama Pelanggan</h1>
              <p>{tagihan[0]?.name}</p>
              <hr className="mt-1" />
            </div>
            <div className="px-3 mt-4">
              <h1 className="font-[500]">Alamat Pelanggan</h1>
              <p>{tagihan[0]?.alamat}</p>
              <hr className="mt-1" />
            </div>
            <div className="px-3 mt-4">
              <h1 className="font-[500]">Paket Internet</h1>
              <p>{tagihan[0]?.paket_langganan}</p>
              <hr className="mt-1" />
            </div>
            <div className="px-3 mt-4">
              <h1 className="font-[500]">Periode Pemakaian</h1>
              {tagihan?.map((d, i) => (
                <p key={i}>{d.periode_pemakaian}</p>
              ))}

              <hr className="mt-1" />
            </div>
            <div className="px-3 mt-4">
              <h1 className="font-[500]">Sub Total</h1>
              <h1 className="text-2xl font-bold">
                {subTotal.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </h1>
              <hr className="mt-1" />
            </div>
            <div className="px-3 mt-3 flex">
              <input
                type="checkbox"
                name="manual"
                id="manual"
                className="mr-3"
                onChange={() => setCheckbox(!checkbox)}
              />
              <p>{checkbox}</p>
              <label htmlFor="manual"> bayar menggunakan bukti transfer</label>
            </div>
            {checkbox ? (
              <div className="px-3 mt-5">
                <input type="file" />
              </div>
            ) : null}

            {checkbox ? (
              <div className="px-3 mt-5 rounded-md bg-blue-900 text-white  text-center">
                <button className="w-full p-3">Bayar Manual</button>
              </div>
            ) : (
              <div className="px-3 mt-5 rounded-md bg-blue-900 text-white  text-center">
                <button onClick={BayarMidtrans} className="w-full p-3">
                  Bayar Midtrans
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="xl:w-[50%] lg:w-[60%] md:w-[70%] w-[90%] mt-10 mx-auto border-[1px]  border-black rounded-md">
          <div className="w-full bg-zinc-300 h-[50px] p-3">
            <h1 className="font-bold">Detail Tagihan</h1>
          </div>
          <div className="text-center w-full h-[200px]  pt-[80px]">
            <h1 className="">Tidak Ada Tagihan </h1>
          </div>
        </div>
      )}
    </div>
  );
}
