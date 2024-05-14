import Sidebar from "@/components/sidebar";
import { server } from "@/server";
import { DataGrid } from "@mui/x-data-grid";
import { log } from "console";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { BsTrash3 } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

type DaftarTagihan = {
  no: number;
  name: string;
  id: number;
  bulan: string;
  tahun: number;
  status: string;
  periode_pemakaian: string;
};

type DaftarPembayaran = {
  no: number;
  id_user: number;
  id: number;
  id_pembayaran: string;
  name: string;
  email: string;
  status: string;
  periode_pemakaian: string;
  total_amount: number;
  tanggal_bayar: string;
};

export default function DetailPengguna(props: {
  tagihan: DaftarTagihan[];
  pembayaran: DaftarPembayaran[];
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(3);
  const [gridKey, setGridKey] = useState(0);
  const [tagihan, setTagihan] = useState(props.tagihan || []);
  const [pembayaran, setPembayaran] = useState(props.pembayaran || []);
  const [rows1, setRows1] = useState([]);
  const [rows2, setRows2] = useState([]);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [paket_langganan, setPaketLangganan] = useState("");
  const [harga_langganan, setHargaLangganan] = useState(0);
  const [alamat, setAlamat] = useState("");
  const { query, push } = useRouter();

  const { data } = useSession();
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${server}detail-pelanggan/${query.slug}`);
      const response = await res.json();
      setTagihan(response?.data?.tagihan);
      setPembayaran(response?.data?.transaksi);
      setName(response?.data?.name);
      setId(response?.data?.id);
      setPaketLangganan(response?.data?.paket_langganan);
      setHargaLangganan(response?.data?.harga_langganan);
      setAlamat(response?.data?.alamat);
    }
    fetchData();
  }, [query.slug]);
  console.log(pembayaran);

  const columns = [
    {
      field: "no",
      headerName: "No",
      headerClassName: "bg-slate-200 text-center font-abc",
      minWidth: 50,
      flex: 0.5,
    },
    {
      field: "name",
      headerName: "Name",
      headerClassName: "bg-slate-200 text-center font-abc",
      minWidth: 150,
      flex: 0.7,
    },
    {
      field: "bulan",
      headerName: "Bulan",
      headerClassName: "bg-slate-200 text-center font-abc",
      minWidth: 150,
      flex: 0.7,
    },
    {
      field: "tahun",
      headerName: "Tahun",
      headerClassName: "bg-slate-200 text-center font-abc",
      minWidth: 150,
      flex: 0.7,
    },
    {
      field: "status",
      headerName: "Status",
      headerClassName: "bg-slate-200 text-center font-abc",
      minWidth: 150,
      flex: 0.7,
    },

    {
      field: "periode_pemakaian",
      headerName: "Periode Pemakaian",
      headerClassName: "bg-slate-200 text-center font-abc",
      minWidth: 150,
      flex: 0.7,
    },

    {
      field: "aksi",
      headerName: "Aksi",
      headerClassName: "bg-slate-200 text-center font-abc",
      flex: 0.7,
      minWidth: 150,

      sortable: false,
      renderCell: (params: any) => {
        return (
          <div className="flex">
            <button className="mr-4">
              <BsTrash3
                color="red"
                size={20}
                // onClick={() => HandleTrigerDelete(params.id)}
              />
            </button>
            <button className="">
              <BiEditAlt
                // onClick={() => HandleTrigerEdit(params.id)}
                color="blue"
                size={20}
              />
            </button>
          </div>
        );
      },
    },
  ];
  const columns2 = [
    {
      field: "no",
      headerName: "No",
      headerClassName: "bg-slate-200 text-center font-abc",
      minWidth: 50,
      flex: 0.5,
    },
    {
      field: "id",
      headerName: "ID User",
      headerClassName: "bg-slate-200 text-center font-abc",
      minWidth: 100,
      flex: 0.7,
    },
    {
      field: "id_pembayaran",
      headerName: "ID Pembayaran",
      headerClassName: "bg-slate-200 text-center font-abc",
      minWidth: 150,
      flex: 0.7,
    },
    {
      field: "name",
      headerName: "Name",
      headerClassName: "bg-slate-200 text-center font-abc",
      minWidth: 150,
      flex: 0.7,
    },
    {
      field: "email",
      headerName: "Email",
      headerClassName: "bg-slate-200 text-center font-abc",
      minWidth: 150,
      flex: 0.7,
    },
    {
      field: "status",
      headerName: "Status",
      headerClassName: "bg-slate-200 text-center font-abc",
      minWidth: 150,
      flex: 0.7,
    },

    {
      field: "periode_pemakaian",
      headerName: "Periode Pemakaian",
      headerClassName: "bg-slate-200 text-center font-abc",
      minWidth: 150,
      flex: 0.7,
    },
    {
      field: "total_amount",
      headerName: "Total Bayar",
      headerClassName: "bg-slate-200 text-center font-abc",
      minWidth: 150,
      flex: 0.7,
    },
    {
      field: "tanggal_bayar",
      headerName: "Tanggal Bayar",
      headerClassName: "bg-slate-200 text-center font-abc",
      minWidth: 150,
      flex: 0.7,
    },
    {
      field: "aksi",
      headerName: "Aksi",
      headerClassName: "bg-slate-200 text-center font-abc",
      flex: 0.7,
      minWidth: 150,

      sortable: false,
      renderCell: (params: any) => {
        return (
          <div className="flex">
            <button className="mr-4">
              <BsTrash3
                color="red"
                size={20}
                // onClick={() => HandleTrigerDelete(params.id)}
              />
            </button>
            <button className="">
              <BiEditAlt
                // onClick={() => HandleTrigerEdit(params.id)}
                color="blue"
                size={20}
              />
            </button>
          </div>
        );
      },
    },
  ];

  const InsertDataTagihan = () => {
    if (tagihan && tagihan.length > 0) {
      const data: any = tagihan?.map((d, index) => ({
        no: index + 1,
        name: d.name,
        id: d.id,
        bulan: d.bulan,
        tahun: d.tahun,
        status: d.status,
        periode_pemakaian: d.periode_pemakaian,
      }));
      setRows1(data);
    }
  };

  const InsertDataPembayaran = () => {
    if (pembayaran && pembayaran.length > 0) {
      const data: any = pembayaran?.map((d, index) => ({
        no: index + 1,
        id_user: d.id_user,
        name: d.name,
        id_pembayaran: d.id_pembayaran,
        id: d.id,
        email: d.email,
        periode_pemakaian: d.periode_pemakaian,
        total_amount: d.total_amount,
        status: d.status,
        tanggal_bayar: d.tanggal_bayar,
      }));
      setRows2(data);
    }
  };

  useEffect(() => {
    InsertDataTagihan();
    InsertDataPembayaran();
  }, [tagihan, pembayaran]);

  useEffect(() => {
    if (data && data?.user?.role == "admin") {
      push("/");
    }
  }, [query.slug]);

  return (
    <div className="w-full">
      {data && data?.user?.role == "admin" ? (
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

          {open ? (
            <Sidebar open={open} setOpen={setOpen} active={active} />
          ) : null}
          {/* Template Admin */}
          <div className="w-[94%] mx-auto  h-[100vh] pt-3">
            <div className="w-[97%] mx-auto  h-[70px]  p-3  border-b-[1px] border-black">
              <h1 className="text-xl font-[500] pl-3 mt-2">
                Detail Pengguna {data?.user?.role}
              </h1>
              <div className="w-full mt-[60px] rounded-md border-[1px] p-3 border-black">
                <div className="w-full flex">
                  <h1 className="w-full font-[500]">ID</h1>
                  <h1 className="w-full">{id}</h1>
                </div>
                <div className="w-full flex">
                  <h1 className="w-full font-[500]">Nama</h1>
                  <h1 className="w-full">{name}</h1>
                </div>
                <div className="w-full flex">
                  <h1 className="w-full font-[500]">Paket Langganan</h1>
                  <h1 className="w-full">{paket_langganan}</h1>
                </div>
                <div className="w-full flex">
                  <h1 className="w-full font-[500]">Harga Langganan</h1>
                  <h1 className="w-full">{harga_langganan}</h1>
                </div>
                <div className="w-full flex">
                  <h1 className="w-full font-[500]">Alamat</h1>
                  <h1 className="w-full">{alamat}</h1>
                </div>
              </div>
              <div className="mt-[50px] xl:flex lg:flex md:block block gap-3">
                <div className="xl:w-[50%] lg:w-[50%] md:w-full w-full">
                  <h1 className="mb-4 font-[500]">Daftar Tagihan</h1>

                  {tagihan ? (
                    <DataGrid
                      key={gridKey}
                      disableRowSelectionOnClick
                      autoHeight
                      columns={columns}
                      getRowId={(rows1: any) => rows1?.id}
                      rows={rows1}
                    />
                  ) : null}
                </div>
                <div className="xl:w-[50%] lg:w-[50%] md:w-full w-full">
                  <h1 className="mb-4 font-[500]">Daftar Pembayaran</h1>

                  {pembayaran ? (
                    <DataGrid
                      key={gridKey}
                      disableRowSelectionOnClick
                      autoHeight
                      columns={columns2}
                      getRowId={(rows2: any) => rows2?.id}
                      rows={rows2}
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="">
          <h1>Youare not admin</h1>
          <Link href={"/"}>
            <button className="">back</button>
          </Link>
        </div>
      )}
    </div>
  );
}
