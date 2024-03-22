import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { BsTrash3 } from "react-icons/bs";
import CreateAllInvoice from "../modaluser/createallinvoice";
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
export default function TabelTagihan({ tagihan }: { tagihan: TagihanType[] }) {
  const [gridKey, setGridKey] = useState(0);
  const [rows, setRows] = useState<TagihanType[]>([]);
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
      headerName: "ID User",
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
      field: "paket_langganan",
      headerName: "Paket Langganan",
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
      field: "periode_pemakaian",
      headerName: "Periode Pemakaian",
      headerClassName: "bg-slate-200 text-center font-abc",
      minWidth: 150,
      flex: 0.7,
    },
    {
      field: "created_at",
      headerName: "Terbit tanggal",
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
    const data = tagihan?.map((p, index) => ({
      no: index + 1,
      id: p.id,
      id_pelanggan: p.id_pelanggan,
      name: p.name,
      status: p.status,
      alamat: p.alamat,
      paket_langganan: p.paket_langganan,
      harga_langganan: p.harga_langganan,
      bulan: p.bulan,
      tahun: p.tahun,
      periode_pemakaian: p.periode_pemakaian,
      created_at: p.created_at,
    }));
    setRows(data); // Mengatur rows menggunakan setRows
  };

  useEffect(() => {
    InsertData();
  }, [tagihan]);
  const [createInvoice, setCreateInvoice] = useState<any>(false);
  return (
    <>
      {createInvoice ? (
        <div className=" w-full mx-auto ">
          <CreateAllInvoice setOpen={setCreateInvoice} />
        </div>
      ) : null}
      <div className=""></div>
      <div className="w-full relative">
        <div className="flex justify-between w-full ">
          <div className="flex justify-between w-full">
            <div className="flex ">
              <div className="">
                <button
                  onClick={() => setCreateInvoice(true)}
                  className="border-2 h-[40px] px-2 rounded-md"
                >
                  Buat Invoice {"+"}
                </button>
              </div>
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
