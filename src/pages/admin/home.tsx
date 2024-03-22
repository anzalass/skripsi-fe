import BerandaAdmin from "@/components/berandaadmin";
import Sidebar from "@/components/sidebar";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function HomeAdmin() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(1);
  return (
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

      {open ? <Sidebar open={open} setOpen={setOpen} active={active} /> : null}
      {/* Template Admin */}
      <div className="w-[94%] mx-auto  h-[100vh] pt-3">
        <div className="w-[97%] mx-auto  h-[70px]  p-3  border-b-[1px] border-black">
          <h1 className="text-xl font-[500] pl-3 mt-2">Selamat Datang Admin</h1>
          <div className="w-full mt-[60px]">
            <BerandaAdmin />
          </div>
        </div>
      </div>
    </div>
  );
}
