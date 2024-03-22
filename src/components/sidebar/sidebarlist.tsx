import { IoHomeOutline } from "react-icons/io5";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { LuRouter } from "react-icons/lu";
import { GrArticle } from "react-icons/gr";
import { MdLibraryBooks } from "react-icons/md";
export const sidebarlist = [
  {
    name: "Beranda",
    icons: <IoHomeOutline className="absolute left-3 top-2" />,
    link: "/admin/home",
  },
  {
    name: "Pembayaran",
    icons: <MdLibraryBooks className="absolute left-3 top-2" />,
    link: "/admin/pembayaran",
  },
  {
    name: "Pengguna",
    icons: <FaRegUser className="absolute left-3 top-2" />,
    link: "/admin/pengguna",
  },
  {
    name: "Tagihan",
    icons: <FaMoneyCheckDollar className="absolute left-3 top-2" />,
    link: "/admin/tagihan",
  },

  {
    name: "Pengaduan",
    icons: <RiCustomerService2Fill className="absolute left-3 top-2" />,
    link: "/admin/pengaduan",
  },
  {
    name: "Pemasangan",
    icons: <LuRouter className="absolute left-3 top-2" />,
    link: "/admin/pemasangan",
  },
  {
    name: "Artikel",
    icons: <GrArticle className="absolute left-3 top-2" />,
    link: "/admin/artikel",
  },
];
