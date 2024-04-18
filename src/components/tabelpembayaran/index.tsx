import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { BsTrash3 } from "react-icons/bs";

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

export default function TabelPemayaran({
  pembayaran,
}: {
  pembayaran: PembayaranType[];
}) {
  const [gridKey, setGridKey] = useState(0);
  const [rows, setRows] = useState<any[]>([]);
  const columns = [
    {
      field: "no",
      headerName: "No",
      headerClassName: "bg-slate-200 text-center font-abc",
      minWidth: 50,
      flex: 0.5,
    },
    {
      field: "id",
      headerName: "ID",
      headerClassName: "bg-slate-200 text-center font-abc",
      minWidth: 100,
      flex: 0.7,
    },
    {
      field: "id_pelanggan",
      headerName: "ID Pelanggan",
      headerClassName: "bg-slate-200 text-center font-abc",
      minWidth: 150,
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
      field: "email",
      headerName: "Email",
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
      field: "status",
      headerName: "Status",
      headerClassName: "bg-slate-200 text-center font-abc",
      minWidth: 150,
      flex: 0.7,
    },
    {
      field: "alamat",
      headerName: "Alamat",
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
      field: "paket_langganan",
      headerName: "Paket Langganan",
      headerClassName: "bg-slate-200 text-center font-abc",
      minWidth: 150,
      flex: 0.7,
    },
    {
      field: "harga_langganan",
      headerName: "Harga Langganan",
      headerClassName: "bg-slate-200 text-center font-abc",
      minWidth: 150,
      flex: 0.7,
    },
    {
      field: "total_amount",
      headerName: "Total  Amount",
      headerClassName: "bg-slate-200 text-center font-abc",
      minWidth: 150,
      flex: 0.7,
    },
    {
      field: "metode_pembayaran",
      headerName: "Metode Pembayaran",
      headerClassName: "bg-slate-200 text-center font-abc",
      minWidth: 150,
      flex: 0.7,
    },

    {
      field: "created_at",
      headerName: "Tanggal bayar",
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

  const InsertData = () => {
    const data = pembayaran?.map((p, index) => ({
      no: index + 1,
      id: p.id,
      id_pelanggan: p.id_pelanggan,
      id_pembayaran: p.id_pembayaran,
      name: p.name,
      email: p.email,
      metode_pembayaran: p.metode_pembayaran,
      status: p.status,
      alamat: p.alamat,
      total_amount: p.total_amount,
      paket_langganan: p.paket_langganan,
      harga_langganan: p.harga_langganan,
      periode_pemakaian: p.periode_pemakaian,

      created_at: p.created_at,
    }));
    setRows(data); // Mengatur rows menggunakan setRows
  };

  useEffect(() => {
    InsertData();
  }, [pembayaran]);

  return (
    <>
      <div className=""></div>
      <div className="w-full relative">
        <div className="flex justify-between w-full ">
          <div className="flex justify-between w-full">
            <div className="flex ">
              <div className=""></div>
            </div>
          </div>
        </div>
        <div className="mt-7">
          <DataGrid
            key={gridKey}
            disableRowSelectionOnClick
            autoHeight
            columns={columns}
            getRowId={(rows) => rows?.id}
            rows={rows}
          />
        </div>
      </div>
    </>
  );
}
