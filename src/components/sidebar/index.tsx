import { useRouter } from "next/navigation";
import { sidebarlist } from "./sidebarlist";
import { FaWindowClose } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function Sidebar({ active, open, setOpen }: any) {
  const router = useRouter();
  const moveSidebar = (i: any, d: any) => {
    router.push(d.link);
  };

  // const Logout = () => {
  //   signOut();
  //   push("/");
  // };

  return (
    <div>
      <div className="w-[200px]   h-screen bg-white shadow-2xl z-40 font-[500] fixed p-3">
        <FaWindowClose
          onClick={() => setOpen(false)}
          className="absolute right-2"
          size={25}
        />
        <div className=" mt-[30px]">
          <img
            src="https://mediagrasi.net/wp-content/uploads/2023/02/Asset-2@2x-2-e1676605352394.png"
            alt=""
            className="w-[180px] h-[60px] object-contain"
          />
        </div>
        <div className="mt-[10px] p-1 w-full">
          {sidebarlist.map((d: any, i) => (
            // <Link href={d.link}>
            <div
              onClick={() => moveSidebar(i, d)}
              key={i}
              className={`${
                active === i + 1 ? "bg-slate-800 text-white" : " bg-slate-200"
              } flex mt-5 h-[30px] rounded-md cursor-pointer `}
            >
              <div className="w-[23%] relative">{d.icons}</div>
              <div className="w-[77%]">
                {" "}
                <h1 className="mt-[1.5px]">{d.name}</h1>
              </div>
            </div>
            // </Link>
          ))}

          <div
            onClick={() => signOut()}
            className="flex mt-5 bg-slate-200 cursor-pointer h-[30px] rounded-md "
          >
            <div className="w-[23%] relative ">
              <TbLogout2 className="absolute  left-3 top-2" />
            </div>
            <div className="w-[77%]">
              {" "}
              <h1 className="mt-1">Keluar</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
