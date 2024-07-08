import Modalinsertid from "@/components/chat/modalinsertid1";
import { server } from "@/server";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";

import { SiWhatsapp } from "react-icons/si";
import { text } from "stream/consumers";
import Swal from "sweetalert2";

export default function Chat() {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputref = useRef<HTMLInputElement>(null);
  const [chat, setChat] = useState<any>([]);
  const [sendChat, setSendChat] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [render, setRender] = useState(false);
  const [render2, setRender2] = useState(false);
  const [modalinsertid, setModalInsertid] = useState(false);
  const [faq, setFaq] = useState<any>([]);
  const [ten, setTen] = useState<any>([]);
  const [read, setRead] = useState(false);
  const { data } = useSession();

  const CheckIdUser = async () => {
    const datas = await axios.get(`${server}cekiduser/${data?.user?.email}`);
    if (datas.data.data !== "") {
      setModalInsertid(false);
    } else {
      setModalInsertid(true);
    }
    console.log(datas.data.data);
    console.log(datas.data.data);
  };
  console.log(modalinsertid);

  const Scroll = () => {
    chatContainerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    CheckIdUser();
  }, [data?.user?.email]);

  useEffect(() => {
    Scroll();
  }, [chat]);
  useEffect(() => {
    inputref.current?.focus();
  }, [chat]);

  useEffect(() => {
    const GetAllFaq = () => {
      axios
        .get(`${server}faq`)
        .then((res) => {
          setFaq(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    GetAllFaq();
  }, []);

  useEffect(() => {
    const GetTen = () => {
      const ten = faq?.slice(0, 7);
      setTen(ten);
    };
    GetTen();
  }, [faq]);

  const GetChatByEmail = async () => {
    await axios
      .get(`${server}chat/${data?.user?.email}`)
      .then((response: any) => {
        setChat(response.data.data);
      });
  };

  const SendChat = async (e: any) => {
    e.preventDefault();
    if (sendChat !== "") {
      setDisabled(true);
      const res1 = await axios.post(`${server}question`, {
        email: data?.user?.email,
        text: sendChat,
        name: data?.user?.name,
      });
      setRender(true);

      if (res1.data.data !== null) {
        const res2 = await axios.post(`${server}answer`, {
          email: data?.user?.email,
          text: res1.data?.data?.text || "",
          name: data?.user?.name,
        });
      } else {
        Swal.fire({
          icon: "warning",
          title: " Yahh",
          text: "Kesempatan hari ini sudah habis silahkan kembali lagi esok hari, jika masih ada pertanyaan silahkan klik tombol whatsapp di pojok kanan atas",
        });
      }
      setRender2(true);
      setSendChat("");
      setDisabled(false);
      setRender(false);
      setRender2(true);
    }
  };
  const [active, setActive] = useState(0);
  const OpenFaq = (i: any) => {
    setActive(i === active ? null : i);
    console.log(active);
  };

  useEffect(() => {
    GetChatByEmail();
  }, [data, render, render2]);
  return (
    <>
      {modalinsertid ? (
        <Modalinsertid />
      ) : (
        <div className="h-screen font-poppins w-full bg-slate-700  justify-between">
          <div className="w-full pl-4 pt-3 relative">
            <SiWhatsapp
              className="absolute right-7 top-2"
              size={20}
              color="white"
            />
            <Link href={"/"}>
              <div className="absolute">
                <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-2 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                  {" "}
                  <IoArrowBackOutline size={15} />
                </button>
              </div>
            </Link>

            <h1 className="font-[600] text-xl text-white ml-10">
              Faq dan Asisstant
            </h1>
          </div>
          <div className="flex w-full">
            <div className="w-[30%] p-3 h-[88vh] relative">
              <div className="p-2 w-full text-white mt-4 h-[88vh] overflow-y-auto">
                {ten &&
                  ten.map((f: any, i: any) => (
                    <div
                      key={i}
                      className="border-[1px] border-r-0 mt-1 border-t-0 border-l-0 p-2"
                    >
                      <h1 onClick={() => OpenFaq(i)} className="font-[700]">
                        {f.question}
                      </h1>
                      <p className={`${active === i ? "block" : "hidden"}`}>
                        {f.answer}
                      </p>
                    </div>
                  ))}
                <Link href={"/faq"}>
                  <button className="mt-4 border-[1px] p-2 rounded-md">
                    Lihat FAQ Lainya..
                  </button>
                </Link>
              </div>
            </div>
            <div className="xl:w-[70%] relative lg:w-[70%] md:w-[90%] w-full  mx-auto bg-gray-900 h-[81vh] rounded-lg overflow-auto p-3  ">
              <div className="   ">
                <div className="overflow-auto  mb-2 ">
                  {chat &&
                    chat.map((c: any, i: any) => (
                      <div
                        key={i}
                        className={` mt-[40px] w-fit ${
                          c.role === "answer" ? "ml-auto" : "mr-auto"
                        }`}
                      >
                        <div
                          className={`${
                            c.role === "answer"
                              ? "text-white bg-slate-700 rounded-lg p-2"
                              : "text-black bg-white  rounded-lg p-2"
                          } p-3`}
                        >
                          {c.text}
                        </div>
                      </div>
                    ))}
                </div>
                <div className="" ref={chatContainerRef}></div>
              </div>
              <form className=" bg-gray-900 fixed bottom-0 right-0 flex  w-[70%]  mx-auto p-3">
                <input
                  type="text"
                  name=""
                  className="h-[52px] rounded-l-xl pl-4 w-[90%]"
                  placeholder="Ketik pesan..."
                  value={sendChat}
                  disabled={disabled}
                  ref={inputref}
                  onChange={(e: any) => setSendChat(e.target.value)}
                  id=""
                />
                <button
                  onClick={SendChat}
                  className={`${
                    disabled === true ? "bg-red-400" : "bg-slate-300"
                  } h-[52px] rounded-r-xl w-[10%]`}
                >
                  Kirim
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
