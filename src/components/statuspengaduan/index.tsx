import { stat } from "fs";
import { useState } from "react";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { FaCarSide } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
interface StatusPengaduanProps {
  status: string;
}

export default function StatusPengaduan({ status }: StatusPengaduanProps) {
  const [st, setStatus] = useState(status);
  return (
    <>
      {status !== "dibatalkan" ? (
        <div>
          <div className="w-full mx-auto flex">
            <HiOutlineClipboardDocumentList
              size={30}
              className=""
              color="green"
            />
            <h1 className="text-[13px] font-[500] ml-3 text-green-500">
              Laporan Diterima Sedang Di Proses{" "}
            </h1>
          </div>
          <div className="h-[50px] w-[3px] rounded-lg bg-green-500 ml-3 "></div>
          <div className="w-full mx-auto flex">
            <FaCarSide
              size={30}
              className=""
              color={`${status === "diproses" ? "gray" : "green"}`}
            />
            <h1
              className={`text-[13px] font-[500] ml-3 ${
                status === "diproses" ? "text-gray-500" : "text-green-500"
              } `}
            >
              Petugas Sedang Menuju Lokasi{" "}
            </h1>
          </div>
          <div
            className={`h-[50px] w-[3px] rounded-lg ${
              status === "diproses" ? "bg-gray-500 " : "bg-green-400"
            } ml-3`}
          ></div>
          <div className="w-full mx-auto flex">
            <FaTools
              size={30}
              className=""
              color={`${
                status === "diproses" || status === "dalam perjalanan"
                  ? "gray"
                  : "green"
              }`}
            />
            <h1
              className={`text-[13px] font-[500] ml-3 ${
                status === "diproses" || status === "dalam perjalanan"
                  ? "text-gray-500"
                  : "text-green-500"
              } `}
            >
              Sedang Dalam Perbaikan{" "}
            </h1>
          </div>
          <div
            className={`h-[50px] w-[3px] rounded-lg ${
              status === "diproses" || status === "dalam perjalanan"
                ? "bg-gray-500 "
                : "bg-green-400"
            } ml-3`}
          ></div>
          <div className="w-full mx-auto flex">
            <IoCheckmarkDoneCircle
              size={30}
              className=""
              color={`${
                status === "diproses" ||
                status === "dalam perjalanan" ||
                status === "sedang diperbaiki"
                  ? "gray"
                  : "green"
              }`}
            />
            <h1
              className={`text-[13px] font-[500] ml-3 ${
                status === "diproses" ||
                status === "dalam perjalanan" ||
                status === "sedang diperbaiki"
                  ? "text-gray-500"
                  : "text-green-500"
              } `}
            >
              Berhasil Diperbaiki{" "}
            </h1>
          </div>
        </div>
      ) : (
        <div>
          <div className="w-full mx-auto flex">
            <MdCancel size={30} className="" color="red" />
            <h1 className="text-[13px] font-[500] ml-3 text-red-500 mt-1">
              Dibatalkan
            </h1>
          </div>
        </div>
      )}
    </>
  );
}
