import Cards from "@/components/cards";
import { server } from "@/server";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

type CardPengaduan = {
  id: number;
  foto: string;
  nama: string;
  deskripsi: string;
};

export default function RiwayatPengaduanPage() {
  const { data } = useSession();
  const [pengaduan, setPengaduan] = useState<CardPengaduan[]>([]);

  const GetPengaduanByEmail = async () => {
    await axios
      .get(`${server}pelanggan-pengaduan/${data?.user?.email}`)
      .then((res: any) => {
        setPengaduan(res.data.data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  useEffect(() => {
    GetPengaduanByEmail();
  }, [data]);

  return (
    <div className="w-full">
      <h1 className="text-center font-[500] mt-[50px]">Daftar Pengaduan</h1>
      <div className="mb-[50px] w-11/12 mx-auto grid 1000px:grid-cols-4 1100px:grid-cols-5 1300px:grid-cols-5 800px:grid-cols-3  400px:grid-cols-2 grid-cols-1  gap-3 mt-[50px]">
        {pengaduan?.map((p: any, index: any) => (
          <Cards pengaduan={p} />
        ))}
      </div>
    </div>
  );
}
