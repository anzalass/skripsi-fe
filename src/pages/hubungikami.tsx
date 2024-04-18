import React from "react";
import { MdOutlineWhatsapp } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsTelephonePlusFill } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";

export default function HubungiKami() {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-[700] text-center mt-10">HUBUNGI KAMI</h1>
      <div className="w-11/12 mt-10 mb-10 min-h-screen   block mx-auto ">
        <div className="w-full h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15869.08472266998!2d106.52305455!3d-6.09412745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e41fe127268b975%3A0x8a2576b3c0f96983!2sPT.%20GAMA%20PRIMA%20KARYA!5e0!3m2!1sid!2sid!4v1713427995975!5m2!1sid!2sid"
            // width="600"
            height="450"
            // allowfullscreen=""
            loading="lazy"
            className="rounded-md border-2 w-full h-full border-gray-600"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className=" w-full mt-[40px] ">
          <div className="flex">
            <MdOutlineWhatsapp size={25} />
            <h1 className="font-[600] ml-3">087711224422</h1>
          </div>
          <div className="flex mt-4">
            <FaInstagram size={25} />
            <h1 className="font-[600] ml-3">@anzalass</h1>
          </div>
          <div className="flex mt-4">
            <FaFacebook size={25} />
            <h1 className="font-[600] ml-3">Muhammad Gempar Anzalas</h1>
          </div>
          <div className="flex mt-4">
            <FaYoutube size={25} />
            <h1 className="font-[600] ml-3">Anzalass</h1>
          </div>
          <div className="flex mt-4">
            <BsTelephonePlusFill size={25} />
            <h1 className="font-[600] ml-3">+62-270803</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
